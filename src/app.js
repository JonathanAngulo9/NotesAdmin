const express = require('express');
const notesRoutes = require('./routes/notes');

const app = express();
app.use(express.json());
app.use('/notes', notesRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // para testing
