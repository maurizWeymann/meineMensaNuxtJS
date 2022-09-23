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
        {{ storeMensa.latitude }} : {{ storeMensa.longitude }}
      </div>
      <div>
        {{ storeMensa.city }}
      </div>
      <button @click="storeMensa.getMensen">get my mensa</button>
    </section>
  </template>

  <script setup>
    import { useMensaStore } from '/stores/mensa'
    
    const storeMensa = useMensaStore()

    const address = ""

    const coordinates = ref(
      {
        latitude:30,
        longitude:40
      });
    
    //https://medium.com/js-dojo/vue-js-google-maps-api-getting-user-location-f22ad96115ef
    const locatorButtonPressed = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          storeMensa.latitude = position.coords.latitude;
          storeMensa.longitude = position.coords.longitude;
        },
        error => {
          console.log(error.message);
        },
        )     
    }

  </script>