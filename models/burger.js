var orm = require('../config/orm.js');

var ormCalls = {
    select: function() {
        orm.selectAll();
    },
    insert: function(burgerInput) {
        orm.insertOne(burgerInput);
    },
    update: function(devour, burgerStatus, burgerId) {
        orm.updateOne(devour, burgerStatus, burgerId);
    }
}

module.exports = ormCalls;