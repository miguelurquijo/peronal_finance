const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection', {multipleStatements: true});
const app = express();
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);




//initialization
require('./lib/passport');

//importing routes
const transactionRoutes = require('./routes/transaction');
const userRoutes = require('./routes/user');


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

app.use(session({
    secret: 'faztmysqlnodemysql',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', transactionRoutes); //aca debo poner todas las rutas que quiere agregar (user, transaction, balance, categories, etc)
app.use('/', userRoutes); 



//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000');
});