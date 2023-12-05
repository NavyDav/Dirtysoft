require("dotenv").config();
const express = require('express');
const cors = require('cors');

const clienteRoutes = require('./routes/cliente-route'); 

const app = express();

app.use(express.json());
app.use(cors());

app.use('/cliente',clienteRoutes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
