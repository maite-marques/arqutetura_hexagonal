import ProvedorCriptografia from '../../core/usuario/service/ProvedorCriptografia';

// Na arquitetura hexagonal esta classe é um adaptador para a porta provedorCriptografia
// um adaptador não faz parte do core bussines da aplicação
export default class InverterSenhaCripto implements ProvedorCriptografia{
  criptografar(senha: string): string {
    return senha.split('').reverse().join('')
  }
}