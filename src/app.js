const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// importing routes
const transactionRoutes = require('./routes/transaction');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 3306,
    database: 'personal_finances_db'
}, 'single'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/', transactionRoutes); //en el tutorial lo llaman customerRouter


//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000');
});