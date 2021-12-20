const controller = {};

//funcion para cargar transacciones y categorias
controller.listCatAndTrans = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT transactions.id, date, notes, amount_spend, categories.name  as cName
                FROM transactions  
                LEFT JOIN categories 
                ON categories.id = transactions.categories
                ORDER BY date desc`, function (err, rows1) {
                    if (err) throw err;
                    conn.query(`SELECT * from categories`, function (err, rows2) {
                        if (err) throw err;
                        res.render('transactions', {transactions: rows1, categories: rows2});
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
        // console.log(transaction);
        res.redirect('/transactions');
    });
});
};

//funcion para borrar transacciones
controller.delete = (req, res) => {

    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM transactions WHERE id = ?', [id], (err, rows) => {
            res.redirect('/transactions');
        });
    });
};

//funcion para editar transacciones
controller.edit = (req, res) => {
    const { id } = req.params;
    // console.log(id);
    req.getConnection((err, conn) => {
        conn.query(`SELECT transactions.id, date, notes, amount_spend, categories.name  as cName, categories.id as cId
        FROM transactions  
        LEFT JOIN categories 
        ON categories.id = transactions.categories WHERE transactions.id = ?`, [ id ], (err, transaction) => {
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
            res.redirect('/transactions');
        });
    });
};

// funcion para cargar categorias para alimentar el modal de agregar transaccion
controller.categories_list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT * from categories`, (err, categories) => {
            if (err) {
                res.json(err);
            }
            res.render('transactions', {
                data: categories
            });
        });
    });
};

// funcion para cargar home
controller.home_list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT * from categories`, (err, categories) => {
            if (err) {
                res.json(err);
            }
            res.render('home', {
                data: categories
            });
        });
    });
};

// funcion para cargar dashboard
controller.dashboard_list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT * from categories`, (err, categories) => {
            if (err) {
                res.json(err);
            }
            // console.log(transactions);
            res.render('dashboard', {
                data: categories
            });
        });
    });
};




//funcion para traer transacciones. No la necesito porque suplo esto con listCatAndTrans
// controller.list = (req, res) => {
//     req.getConnection((err, conn) => {
//         conn.query(`SELECT transactions.id, date, notes, amount_spend, categories.name  as cName
//                 FROM transactions  
//                 LEFT JOIN categories 
//                 ON categories.id = transactions.categories
//                 ORDER BY date desc`, (err, transactions) => {
//             if (err) {
//                 res.json(err);
//             }
//             res.render('transactions', {
//                 data: transactions
//             });
//         });
//     });
// };

module.exports = controller;

