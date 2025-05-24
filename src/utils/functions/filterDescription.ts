const filterDescription = (text: string, amount: number) => {
  if (text.length > amount) {
    return text.slice(0, amount - 3) + '...'
  }

  return text
}

export default filterDescription
