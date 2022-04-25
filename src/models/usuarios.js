const conexao = require("../infraestrutura/conexao");

class Usuarios {
  buscaPorUsuario(res) {
    const sql = "SELECT * FROM Usuarios";

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  async adiciona(usuario, res) {
    let idUsuario = await this.validarNomeUsuarioNaoUtilizado(usuario.nome);
    let urlUsuario = await this.validarUrlFotoPerfil(usuario.urlFotoPerfil);

    if (urlUsuario == false) {
      res.status(400).json("A URL é invalida");
    } else {
      if (idUsuario > 0) {
        res.status(400).json(`Usuário ${usuario.nome} já cadstrado`);
      } else {
        const sql = "INSERT INTO usuarios SET ?";
        if (usuario.nome.length < 3) {
          res
            .status(400)
            .json("Informe um nome de usuário válido maior que 3 caracteres");
        } else {
          conexao.query(sql, usuario, (erro) => {
            if (erro) {
              res.status(400).json(erro);
            } else {
              res.status(200).json(usuario);
            }
          });
        }
      }
    }
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Usuarios WHERE id=${id}`;

    conexao.query(sql, (erro, resultados) => {
      const usuario = resultados[0];

      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(usuario);
      }
    });
  }

  deleta(id, res) {
    const sql = "DELETE FROM Usuarios WHERE id=?";

    conexao.query(sql, id, (erro) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ id });
      }
    });
  }

  altera(id, valores, res) {
    const sql = "UPDATE Usuarios SET ? WHERE id=?";

    conexao.query(sql, [valores, id], (erro) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }
}

module.exports = new Usuarios();
