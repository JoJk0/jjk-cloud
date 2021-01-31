<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-row>
          <ion-title mode="md">Projects</ion-title>
          <ion-searchbar></ion-searchbar>
          <filter-button></filter-button>
          <account-badge></account-badge>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="project-list">
        <ion-card button="true" mode="ios">
          <img
            src="https://ionicframework.com/docs/demos/api/card/madison.jpg"
          />
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>JJK Portfolio 8.0</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Keep close to Nature's heart... and break clear away, once in awhile
          </ion-card-content>
        </ion-card>
      </div>
      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="addCircleOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonSearchbar,
  IonRow,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import AccountBadge from "@/components/account/AccountBadge.vue";
import FilterButton from "@/components/filter/FilterButton.vue";
import { addCircleOutline } from "ionicons/icons";
import { useStore } from "@/services/store";

export default {
  name: "Projects",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSearchbar,
    IonRow,
    IonFab,
    IonFabButton,
    IonIcon,
    AccountBadge,
    FilterButton
  },
  setup() {
    const store = useStore();

    // TODO: Projects

    // created(){

    // }

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
.project-list {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;

  ion-card {
    width: 30em;
    img {
      max-width: 30em;
    }
  }
}
</style>
