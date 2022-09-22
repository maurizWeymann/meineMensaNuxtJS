import { defineStore } from 'pinia'

export const useMensaStore = defineStore({
  id: 'mensen',
  state: () => ({
    city: 'berlin'
  })
})