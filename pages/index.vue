<template>
  <div>
    <userLocation />
    <mensaliste :key="storeMensa.rerenderKey"/>
  </div>  
</template>

<script setup>

import { useMensaStore } from '/stores/mensa'

const storeMensa = useMensaStore()

</script>