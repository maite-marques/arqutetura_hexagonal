// interface para padronizar os casos de uso da aplicação

export default interface CasoDeUso<E,S> {

  executar(entrada: E): Promise<S>
}