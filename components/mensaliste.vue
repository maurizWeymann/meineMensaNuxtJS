<template>
  <div class="card p-5">
     <!-- you'll need to handle a loading state -->
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <div v-for=" mensa, index in mensen " :key="mensa.id">
      <!-- do something -->
      <div v-if="index <= 9">

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
                <img :src= " `/mensaFotos/${mensa.id}.jpg` " 
              onerror="this.src='/mensaFotos/40.jpg'" alt="Placeholder image"> 
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ mensa.name }}</p>
                <p class="subtitle is-6">{{ mensa.city }}</p>
              </div>
            </div>

            <div class="content">
              {{ mensa.address}} mensaID: {{ mensa.id}}
              
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="open-status">Open/Closed {{ today }} </time>
            </div>
          </div>
        </div>
        
      </div>     
    </div>
    <a class="button">show more</a>

  </div>
  </div>


</template>

<script setup>
  import { useMensaStore } from '/stores/mensa'

  const storeMensa = useMensaStore()

  const { pending, data: mensen } = useLazyFetch(`https://openmensa.org/api/v2/canteens?near[lat]=${storeMensa.latitude}&near[lng]=${storeMensa.longitude}&near[dist]=1`)
  watch(mensen, (newMensen) => {
    // Because posts starts out null, you won't have access
    // to its contents immediately, but you can watch it.
  })

  let today = new Date().toISOString().slice(0, 10)

</script>