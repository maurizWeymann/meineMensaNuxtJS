<template>
    <section class="ui two column centered ">
      <div class="column">
        <form class="ui segment large form">
            <div class="field">
              <div class="ui right icon input large">
                <input
                  type="text"
                  placeholder="Enter your address"
                  v-model="address"
                  ref="autocomplete"
                />
                <i class="dot circle link icon" @click="locatorButtonPressed"></i>
              </div>
          </div>
        </form>
      </div>
      <div>
        {{ coordinates.latitude }} : {{ coordinates.longitude }}

      </div>
    </section>
  </template>

  <script setup>
    //import { ref } from '#imports'

    const coordinates = ref(
      {
        latitude:30,
        longitude:40
      });
    
    //https://medium.com/js-dojo/vue-js-google-maps-api-getting-user-location-f22ad96115ef
    function locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          coordinates.value.latitude = position.coords.latitude;
          coordinates.value.longitude = position.coords.longitude;

          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        error => {
          console.log(error.message);
        },
        )  
       
    }
  </script>