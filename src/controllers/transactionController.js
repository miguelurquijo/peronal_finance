const controller = {};

//funcion para traer transacciones
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT transactions.id, date, notes, amount_spend, categories.name  as cName
                FROM transactions  
                LEFT JOIN categories 
                ON categories.id = transactions.categories`, (err, transactions) => {
            if (err) {
                res.json(err);
            }
            // console.log(transactions);
            res.render('transactions', {
                data: transactions
            });
        });
    });
};

//funcion para agregar transacciones
controller.add = (req, res) => {
    req.getConnection((err, conn) => {
    const data = req.body;
    conn.query('INSERT INTO transactions set ?', [data], (err, transaction) => {
        if (err) {
            res.json(err);
        }
        console.log(transaction);
        res.redirect('/');
    });
});
};

//funcion para borrar transacciones
controller.delete = (req, res) => {

    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM transactions WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

//funcion para editar transacciones
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM transactions WHERE id = ?', [id], (err, transaction) => {
            res.render('transactions_edit', {
                data: transaction[0]
            });
        });
    });
};

//funcion para actualiar la editada transacciones
controller.update = (req, res) => {
    const { id } = req.params;
    const newTransaction = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE transactions set ? WHERE id = ?', [newTransaction, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;

