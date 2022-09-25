import { defineStore } from 'pinia'

export const useMensaStore = defineStore({
  id: 'mensen',
  state: () => ({
    currentMensaID: 62,
    latitude: 52.498338, 
    longitude: 13.523185,
    distance:10,
    rerenderKey: 0,
    mensen: ""  

  }),
  actions: {
    async getMensen() {
      const { pending, data: fetchedMensen, refresh } = await useFetch(`https://openmensa.org/api/v2/canteens?near[lat]=${this.latitude}&near[lng]=${this.longitude}&near[dist]=${this.distance}`)
   
      this.mensen = fetchedMensen.value
      refresh()
      this.rerenderKey++
  watch(fetchedMensen, (newfetchedMensen) => {
    refresh()
    // Because posts starts out null, you won't have access
    // to its contents immediately, but you can watch it.
  })
  

    }
    

  }
})