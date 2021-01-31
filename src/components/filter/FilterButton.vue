<template>
  <button><ion-icon :icon="filterOutline"></ion-icon></button>
</template>
<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { filterOutline } from "ionicons/icons";

export default {
  name: "FilterButton",
  components: {
    IonIcon,
  },
  setup() {
    return {
      filterOutline,
    };
    // TODO: Filter component
  },
};
</script>
<style lang="scss" scoped>
button {
  width: 2.5em;
  height: 2.5em;
  margin: 1em;
  background: transparent;
  color: white;
  ion-icon {
    font-size: 1.5em;
  }
}
</style>