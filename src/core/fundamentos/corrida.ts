import Carro from './Carro';
import TerminalUtil from '@/app/util/TerminalUtil';

export default function corrida(carro: Carro) {
  Array.from({ length: 10 }).forEach(() => {
    carro.acelerar();
    TerminalUtil.textoRed(`\n Velocidade: ${carro.velocidadeAtual}`)
  })

  Array.from({ length: 10 }).forEach(() => {
    carro.frear();
    TerminalUtil.textoRed(`\n Velocidade: ${carro.velocidadeAtual}`)
  })
}