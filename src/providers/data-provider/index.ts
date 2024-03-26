"use client"

import { IDataContextProvider } from "@refinedev/core/dist/interfaces"

export const dataProvider = (): IDataContextProvider => ({
  getList: async ({ resource }: { resource: string }) => {
    const res = await fetch(`/api/${resource}`)
    return res.json()
  },
  getOne: async ({ resource }: { resource: string }) => {
    throw new Error('Not implemented')
  },
  create: async ({ resource }: { resource: string }) => {
    throw new Error('Not implemented')
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
