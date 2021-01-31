<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-row>
          <ion-title mode="md">Budget</ion-title>
          <ion-searchbar></ion-searchbar>
          <filter-button></filter-button>
          <account-badge></account-badge>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- Content here -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonRow
} from "@ionic/vue";
import AccountBadge from "@/components/account/AccountBadge.vue";
import FilterButton from "@/components/filter/FilterButton.vue";
import { addCircleOutline } from "ionicons/icons";

export default {
  name: "Budget",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSearchbar,
    IonRow,
    AccountBadge,
    FilterButton
  },
  setup() {
    return {
      addCircleOutline
    };
  }
};
</script>

<style lang="scss" scoped>
ion-toolbar {
  ion-title {
    width: 100px;
  }
  ion-searchbar {
    width: 20vw;
  }
}
</style>
