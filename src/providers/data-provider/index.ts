"use client"

import { CreateResponse, IDataContextProvider } from "@refinedev/core/dist/interfaces"

export const dataProvider = (): IDataContextProvider => ({
  getList: async ({ resource }: { resource: string }) => {
    const res = await fetch(`/api/${resource}`)
    return res.json()
  },
  getOne: async ({ resource }: { resource: string }) => {
    throw new Error('Not implemented')
  },
  create: async (params) => {
    console.log('params', params)
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
