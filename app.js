const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const schoolRoutes = require('./routes/schoolRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', schoolRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
