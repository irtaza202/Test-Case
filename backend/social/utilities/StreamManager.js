const processMessage = async (kafkaMessage) => {
	const kafka = require('kafka-node');
	const Consumer = kafka.Consumer;
	const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });

	const topics = [{ topic: 'event_stream' }];

	const consumer = new Consumer(client, topics, {
		groupId: 'social-consumer', 
		autoCommit: true,
	});

	consumer.on('message', async function (message) {
		try {
			const parsedMessage = JSON.parse(message.value); // Assuming messages are JSON

			// Insert parsedMessage into your database using Sequelize models
			const User = require('./././models/user');
			await User.create(parsedMessage); 

			const Tenant = require('./././models/tenant');
			await Tenant.create(parsedMessage); 

			console.log('Message inserted into the database:', parsedMessage);
		} catch (error) {
			console.error('Error processing message:', error);
		}
	});

	consumer.on('error', function (error) {
		console.error('Kafka Consumer Error:', error);
	});


};

module.exports = { processMessage };

