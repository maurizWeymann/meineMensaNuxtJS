import { defineStore } from 'pinia'

export const useMensaStore = defineStore({
  id: 'mensen',
  state: () => ({
    city: 'berlin',
    currentMensa: 62,
    latitude: 52.393535,
    longitude: 13.127814

  }),
  actions: {
    getMensen() {
      this.city = this.latitude
    }
    

  }
})