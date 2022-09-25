<template>
    <section class="ui two column centered ">
      <div class="column">
        <form class="ui segment large form">
            <div class="field">
              <div class="ui right icon input large">
                <input
                  type="text"
                  placeholder="Wo essen wir heute?"
                  v-model="address"
                  ref="autocomplete"
                />
                <i class="dot circle link icon" @click="locatorButtonPressed"></i>
              
          <input v-model.lazy="storeMensa.distance" class="input" type="number" min="1" max="10" required placeholder="Umkreis" 
          @keyup="storeMensa.getMensen(), storeMensa.rerenderKey++ "
 >  
        </div>       
        </div>
        </form>
      </div>
      <div>
        {{ storeMensa.latitude }} : {{ storeMensa.longitude }}
      </div>
      <button @click="storeMensa.getMensen(), storeMensa.rerenderKey++">get my mensa</button>
    </section>
  </template>

  <script setup>
    import { useMensaStore } from '/stores/mensa'
    
    const storeMensa = useMensaStore()

    const address = ""
    
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