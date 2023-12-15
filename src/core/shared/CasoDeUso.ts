export default interface CasoDeUso<E, S>{
  execut(data: E): Promise<S>
}