const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acc, item) => {
    return (acc += item.preco)
  }, 0)
}

export default getTotalPrice
