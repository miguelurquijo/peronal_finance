const controller = {};

//funcion para traer tr
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM transactions', (err, transactions) => {
            if (err) {
                res.json(err);
            }
            console.log(transactions);
            res.render('transactions', {
                data: transactions
            });
        });
    });
};

module.exports = controller;

