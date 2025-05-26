import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ApiPath = 'https://fake-api-tau.vercel.app/api/efood'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: ApiPath
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
export default api
