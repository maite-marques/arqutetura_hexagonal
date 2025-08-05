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
}