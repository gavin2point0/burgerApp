var orm = {
    selectAll: function(table) {
        var queryString = 'SELECT * FROM ?';
        connection.query(queryString, [tables],function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(value) {
        var queryString = 'INSERT INTO burgers_db(burger_name) values(?)';
        connection.query(queryString, [value], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(column, value, id) {
        var queryString = 'UPDATE burgers_db SET ??="?" WHERE id=?';
        connection.query(queryString, [column, value, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;