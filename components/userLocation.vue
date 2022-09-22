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
    </section>
  </template>

  <script setup>
    //https://medium.com/js-dojo/vue-js-google-maps-api-getting-user-location-f22ad96115ef
    function locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        error => {
          console.log(error.message);
        },
        )   
    }
  </script>