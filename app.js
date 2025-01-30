require('dotenv').config();
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const useragent = require('express-useragent');
const path = require('path');

const connectDB = require('./server/config/db')

const app = express()
const PORT = 3030 || process.env.PORT

connectDB()

app.use(express.static('public'))

app.use(expressLayouts);
app.use(useragent.express());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    if (req.useragent.isMobile) {
        app.set('layout', './layouts/mobile');
    } else {
        app.set('layout', './layouts/main');
    }
    next();
  });

app.use('/', require('./server/routes/main'))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


/*
app.listen(PORT, '0.0.0.0', () => {
  console.log(`webGartyParty running on  http://0.0.0.0:${PORT}`);
}); 
*/