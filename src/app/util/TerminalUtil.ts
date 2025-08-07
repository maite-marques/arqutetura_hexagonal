import { terminal } from 'terminal-kit';

export default class TerminalUtil {

  static titulo(text: string) {
    terminal.clear();
    terminal.magenta(`${text}\n`)
    terminal.magenta(`-`.repeat(text.length) + `\n`)
  }

  static limpar() {
    terminal.clear();
  }

  static exibirChaveValor(chave: string, valor: any) {
    terminal.yellow(chave).green(valor).white('\n');
  }

  static async campoRequerido(label: string, valorPadrao: string = ''): Promise<string> {
    terminal.yellow(`\n${label}`)
    const valor = await terminal.inputField({
      default: valorPadrao
    }).promise
    if(valor) return valor
    return TerminalUtil.campoRequerido(label)
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const resposta = await terminal.singleColumnMenu(options).promise
    return [resposta.selectedIndex, resposta.selectedText]
  }

  static async selecao(text: string, options: string[]): Promise<[number, string]> {
    terminal.yellow(`\n${text}`)
    const resposta = await terminal.singleLineMenu(options).promise
    return [resposta.selectedIndex, resposta.selectedText]
  }

  static async confirmacao(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`)
    const resposta = await terminal.singleLineMenu(['Sim', 'Não']).promise
    return resposta.selectedIndex === 0
  }

  static async esperarEnter():Promise<void> {
    terminal.white('\Pressione ENTER para continuar... ')
    await terminal.inputField({ echo: false }).promise
  }

  static async sucesso(texto: string) {
    terminal.green(texto + '\n')
  }

  static async erro(texto: string) {
    terminal.red(texto + '\n')
  }
}