"use client"

import { CreateResponse, IDataContextProvider } from "@refinedev/core/dist/interfaces"

export const dataProvider = (): IDataContextProvider => {
  return ({
    getList: async (params) => {
      const queryString = params
        .filters?.map(filter => `${filter.field}=${filter.value}`)
        .join('&')
      const res = await fetch(`/api/${params.resource}?${queryString}`)
      return res.json()
    },
    getOne: async ({ resource }: { resource: string }) => {
      throw new Error('Not implemented')
    },
    create: async (params) => {
      const res = await fetch(`/api/${params.resource}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params.variables)
      })
      if (res.status !== 201) {
        throw new Error('Failed to create')
      }

      return res.json()
    },
    update: async ({ resource }: { resource: string }) => {
      throw new Error('Not implemented')
    },
    deleteOne: async ({ resource }: { resource: string }) => {
      throw new Error('Not implemented')
    },
    getApiUrl: () => {
      throw new Error('Not implemented')
    }
  })
}
