<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/Projects">
          <ion-icon :icon="constructOutline" />
          <ion-label>Projects</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/Skills">
          <ion-icon :icon="hammerOutline" />
          <ion-label>Skills</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/UniModules">
          <ion-icon :icon="schoolOutline" />
          <ion-label>Uni Modules</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { hammerOutline, schoolOutline, constructOutline } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      hammerOutline,
      schoolOutline,
      constructOutline,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../theme/globals';

// Desktop
@media screen and (min-width: globals.$breakpoint) {
  ion-tab-bar {
    display: none;
  }
}
</style>