const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use(express.json());

// Rotas
const loginRoutes = require('./routes/loginRoutes');
const medicamentosRoutes = require('./routes/medicamentosRoutes');


app.use('/login', loginRoutes);
app.use('/medicamentos', medicamentosRoutes);


app.listen(3001, () => {
  console.log('API rodando na porta 3001');
});

module.exports = app;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
