const express = require('express');
const bodyParser = require('body-parser');
const Tenant = require('././models/tenant');

// Create an instance of the Express.js app
const app = express();

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes for Tenant_Profile table
app.post('/tenant_profiles', async (req, res) => {
    const tenant_profile = await Tenant.create(req.body);
    res.json(tenant_profile);
});

app.get('/tenant_profiles', async (req, res) => {
    const tenant_profiles = await Tenant.findAll();
    res.json(tenant_profiles);
});

app.get('/tenant_profiles/:id', async (req, res) => {
    const tenant_profile = await Tenant.findByPk(req.params.id);
    res.json(tenant_profile);
});

app.delete('/tenant_profiles/:id', async (req, res) => {
    await Tenant.destroy({ where: { tenant_id: req.params.id } });
    res.json({ message: 'Tenant profile deleted successfully!' });
});

app.patch('/tenant_profiles/:id', async (req, res) => {
    const tenant_profile = await Tenant.findByPk(req.params.id);
    await tenant_profile.update(req.body);
    res.json(tenant_profile);
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));