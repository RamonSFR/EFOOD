declare type MenuItem = {
  picture: string
  price: number
  id: number
  name: string
  description: string
  serving: string
}

declare type Restaurant = {
  id: number
  title: string
  type: string
  review: number
  description: string
  cover: string
  menu: MenuItem[]
}
