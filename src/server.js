const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const fieldRoutes = require('./routes/fieldRoutes');
const allocationRoutes = require('./routes/allocationRoutes');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/fields', fieldRoutes);
app.use('/allocations', allocationRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}: localhost:${PORT}`);
});
