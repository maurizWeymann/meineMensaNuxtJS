<template>
  <div>
    hallo von current mensal
    {{ mensa }}
  </div>
</template>

<script setup>

import { useMensaStore } from '/stores/mensa'

const storeMensa = useMensaStore()

const { pending, data: mensa } = useLazyFetch(`https://openmensa.org/api/v2/canteens/63/days/2022-09-23/meals`)
watch(mensa, (newMensa) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>