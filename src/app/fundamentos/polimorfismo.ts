import { Terminal } from 'terminal-kit';
import TerminalUtil from '../util/TerminalUtil';

export default async function polimorfismo(): Promise<void> {
  TerminalUtil.titulo("Polimorfismo")

  const tipoCarro = await TerminalUtil.selecao('Tipo de carro?', ['Ferrari', 'Fusca']
    
  )

  while(true) {
    TerminalUtil.limpar();
    const continuar = await TerminalUtil.confirmacao('Deseja continuar?')
    if(!continuar) return
  }

}