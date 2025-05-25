const parseToUsd = (amount = 0) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export default parseToUsd
