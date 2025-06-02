const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

export default getTotalPrice
