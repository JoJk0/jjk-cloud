<template>
  <ion-menu side="start" menu-id="main" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-row>
          <img src="/assets/logo-raw-white.svg" />
          <ion-title>jjk-cloud</ion-title>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
          v-for="menuEntry of menuEntries"
          :key="menuEntry"
          :router-link="menuEntry.path"
        >
          <ion-icon :icon="menuEntry.icon" />
          <ion-label>{{ menuEntry.name }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  menuController,
  IonIcon,
  IonLabel,
  IonRow
} from "@ionic/vue";
import {
  hammerOutline,
  schoolOutline,
  constructOutline,
  calculatorOutline
} from "ionicons/icons";
import { useStore } from "@/services/store";
import { jjkExtensions } from "@/main";
import { JJKMenuEntry } from "@/types";

export default defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonLabel,
    IonRow
  },

  setup() {
    const menuEntries: JJKMenuEntry[] = [];

    Object.keys(jjkExtensions).forEach(key => {
      const menuEntry = jjkExtensions[key].menuEntry;
      if (menuEntry) menuEntries.push(menuEntry);
    });

    //TODO: implement dynamic menu

    menuController.enable(true, "main");
    menuController.open("main");
    return {
      hammerOutline,
      schoolOutline,
      constructOutline,
      calculatorOutline,
      menuEntries
    };
  }
});
</script>

<style lang="scss" scoped>
@use '../theme/globals';

ion-menu {
  width: 15em;
  ion-header {
    ion-toolbar {
      img {
        height: 2em;
        padding: 0.9em;
        padding-left: 1em;
        box-sizing: content-box;
      }
      ion-title {
        padding-left: 0.5em;
      }
    }
  }
}

ion-item {
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ion-icon {
    margin-right: 0.7em;
  }
}

// Mobile
$mobile-breakpoint: (globals.$breakpoint - 1px);
@media screen and (max-width: $mobile-breakpoint) {
  ion-menu {
    display: none;
  }
}
</style>
