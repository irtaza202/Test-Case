const express = require('express');
const bodyParser = require('body-parser');
const User = require('././models/user');

// Create an instance of the Express.js app
const app = express();

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes for User table
app.post('/user_profiles', async (req, res) => {
    const user_profile = await User.create(req.body);
    res.json(user_profile);
});

app.get('/user_profiles', async (req, res) => {
    const user_profiles = await User.findAll();
    res.json(user_profiles);
});

app.get('/user_profiles/:id', async (req, res) => {
    const user_profile = await User.findByPk(req.params.id);
    res.json(user_profile);
});

app.delete('/user_profiles/:id', async (req, res) => {
    await User.destroy({ where: { user_id: req.params.id } });
    res.json({ message: 'User profile deleted successfully!' });
});

app.patch('/user_profiles/:id', async (req, res) => {
    const user_profile = await User.findByPk(req.params.id);
    await user_profile.update(req.body);
    res.json(user_profile);
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));