import Usuario from '@/core/usuario/model/Usuario';
import TerminalUtil from '../util/TerminalUtil';
import RegistrarUsuario from '@/core/usuario/service/RegistrarUsuario';
import SenhaCripto from '@/adapter/auth/SenhaCritpo';
import RepositorioUsuarioEmMemoria from '@/adapter/mock/RepositorioUsuarioEmMemoria';

export default async function registrarUsuario(): Promise<void> {
  TerminalUtil.titulo("Registrar Usuario")

  const nome = await TerminalUtil.campoRequerido('Nome: ', 'Ana da Silva')
  const email = await TerminalUtil.campoRequerido('Email: ', 'anasilva2gmail.com')
  const senha = await TerminalUtil.campoRequerido('Senha: ', '1234567')

  const usuario: Usuario = { nome, email, senha }

  const repositorio = new RepositorioUsuarioEmMemoria()
  const provedorCripto = new SenhaCripto()

  const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto);

  await casoDeUso.executar(usuario);
  TerminalUtil.sucesso('Usuario registrado com sucesso\n')
  await TerminalUtil.esperarEnter()

  try{
    await casoDeUso.executar(usuario)
  } catch (e: any) {
    TerminalUtil.erro(e.message)
  } finally {
    await TerminalUtil.esperarEnter()
  }
}