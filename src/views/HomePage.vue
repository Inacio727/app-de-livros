<template>
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Meus Livros Favoritos</IonTitle>
        <IonButtons slot="end">
          <IonButton @click="logout">
            <IonIcon slot="icon-only" :icon="logOutOutline"></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        <IonItem v-for="book in bookList" :key="book.id" button @click="viewDetails(book.id)">
          <IonLabel>
            <h2>{{ book.title }}</h2>
            <p>{{ book.author }}</p>
          </IonLabel>
          <IonIcon slot="end" :icon="chevronForwardOutline"></IonIcon>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonIcon, IonButtons, IonButton 
} from '@ionic/vue';
import { chevronForwardOutline, logOutOutline } from 'ionicons/icons';
import { books } from '../mockData';

const router = useRouter();
const bookList = ref(books);

const viewDetails = (id: number) => {
  router.push(`/details/${id}`);
};

const logout = () => {
  router.push('/login');
};
</script>