const pool = require("../infraestrutura/database/conexao");


class TiposVendas {
    listar(res, next) {
      const sql = "SELECT * FROM TiposVendas";
      pool.query(sql, (erro, resultados) => {
        if (erro) {
          next(erro);
        } else {
          res.status(200).json(resultados);
        }
      });
    }

}


module.exports = new TiposVendas();