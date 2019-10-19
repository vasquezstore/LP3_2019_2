const {schema, mondel} = require('mongoose');

const esquema = new schema({
    descricao: {
        type: String ,
        required : true
    },
    unidade:{
        type: String,
        required:true

    }
});

const Item = model ('Item', esquema );
module.exports = Item;

