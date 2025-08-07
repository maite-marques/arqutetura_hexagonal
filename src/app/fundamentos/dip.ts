// dependency inversion principal

import Fusca from '@/core/fundamentos/Fusca';
import TerminalUtil from '../util/TerminalUtil';
import corrida from '@/core/fundamentos/corrida';
import Ferrari from '@/core/fundamentos/Ferrari';
import Carro from '@/core/fundamentos/Carro';

export default async function dip() {
  TerminalUtil.titulo('DIP')

  const [tipo] = await TerminalUtil.selecao('Tipo de carro?', ['Fusca', 'Ferrari'])

  let carro;

  switch(tipo) {
    case 0: 
      carro = new Fusca() 
      break
    case 1: 
      carro = new Ferrari() 
      break
  }

  corrida(carro as Carro);

  await TerminalUtil.esperarEnter()
}