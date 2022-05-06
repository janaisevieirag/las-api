//const eventos = require("../controllers/eventos");
const pool = require("../infraestrutura/database/conexao");


class Eventos {
    listar(res, next) {
      const sql = "SELECT * FROM Eventos";
      pool.query(sql, (erro, resultados) => {
        if (erro) {
          next(erro);
        } else {
          res.status(200).json(resultados);
        }
      });
    }

    detalhaEvento(id, res, next) {
        const sql = "SELECT * FROM Eventos WHERE id = ?";
        pool.query(sql, id, (erro, resultados) => {
          const eventos = resultados[0];
          if (erro) {
            next(erro);
          } else {
            if (eventos) {
              res.status(200).json(eventos);
            } else {
              res.status(404).end();
            }
          }
        });
    }


}



module.exports = new Eventos();