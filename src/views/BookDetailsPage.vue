<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalhes do Livro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div v-if="book" class="book-details">
        <ion-card>
          <img :src="book.image" :alt="book.title" class="book-image" />
          <ion-card-header>
            <ion-card-title>{{ book.title }}</ion-card-title>
            <ion-card-subtitle>{{ book.author }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            <p>{{ book.description }}</p>
          </ion-card-content>
        </ion-card>
      </div>
      <div v-else class="ion-text-center">
        <p>Livro não encontrado.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, IonCardContent 
} from '@ionic/vue';
import { books, Book } from '../mockData';

const route = useRoute();
const book = ref<Book | null>(null);

onMounted(() => {
  const id = Number(route.params.id);
  const foundBook = books.find(b => b.id === id);
  if (foundBook) {
    book.value = foundBook;
  }
});
</script>

<style scoped>
.book-details {
  max-width: 500px;
  margin: 0 auto;
}
.book-image {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  background: #f4f4f4;
  padding: 20px 0;
}
</style>