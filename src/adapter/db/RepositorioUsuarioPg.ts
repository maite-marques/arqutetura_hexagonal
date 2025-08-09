import Usuario from '../../core/usuario/model/Usuario'
import db from './db'

// se os nomes das colunas forem diferentes dos nomes dos atributos deveriam haver mappers aqui no adapter para adaptar aos tipos usados na aplicação. E Já devolver os tipos corretos.
export default class RepositorioUsuarioPg {
  private static readonly items: Usuario[] = []

  async inserir(usuario: Usuario) {
    await db.query(`
      insert into usuarios
      (id, name, email, senha)
      values ($1, $2, $3, $4)
    `, [
      usuario.id,
      usuario.nome,
      usuario.email,
      usuario.senha,
    ])
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const usuario = await db.oneOrNone(`select * from usuarios where email = $1`, [email])
    if (!usuario) return null
    return { ...usuario, nome: usuario.name }
  }
}