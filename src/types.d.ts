declare type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
