const TiposVendas = require("../models/tipos-vendas");


module.exports = (app) => {

    app.get("/tipos-vendas", (req, res, next) => {
      TiposVendas.listar(res, next);

    });
};