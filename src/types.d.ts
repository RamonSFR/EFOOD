declare type Restaurant = {
  id: number
  title: string
  type: string
  review: number
  description: string
  cover: string
  menu: [
    {
      picture: string
      price: number
      id: number
      name: string
      description: string
      serving: string
    }
  ]
}
