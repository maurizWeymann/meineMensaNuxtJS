import { useMensaStore } from '/stores/mensa'

const storeMensa = useMensaStore()

export function fetchmensen() {
  const { pending, data: mensen } = useLazyFetch(`https://openmensa.org/api/v2/canteens?near[lat]=${storeMensa.latitude}&near[lng]=${storeMensa.longitude}&near[dist]=1`)
  watch(mensen, (newMensen) => {
    // Because posts starts out null, you won't have access
    // to its contents immediately, but you can watch it.
  })
}
