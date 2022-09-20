<template>
  <!-- you'll need to handle a loading state -->
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <div v-for="mensa in mensen" :key="mensa.id">
      <!-- do something -->
      {{ mensa.id }} 
    </div>
  </div>
</template>

<script setup>
const { pending, data: mensen } = useLazyFetch('https://openmensa.org/api/v2/canteens')
watch(mensen, (newMensen) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>