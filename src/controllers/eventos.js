const Eventos = require("../models/eventos");


module.exports = (app) => {

    app.get("/eventos", (req, res, next) => {
      Eventos.listar(res, next);

    });

    app.get("/eventos/:id", (req, res, next) => {
        const id = parseInt(req.params.id);
        Eventos.detalhaEvento(id, res, next);
    });

};
