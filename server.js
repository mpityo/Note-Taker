const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// makes all public assets available for all pages
app.use(express.static('public'));
// main index
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port  ${PORT}`);
});