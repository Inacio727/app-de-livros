<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Recuperar Senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="forgot-container">
        <p class="ion-text-center">Informe seu e-mail para receber as instruções de recuperação.</p>
        
        <ion-item>
          <ion-label position="stacked">E-mail</ion-label>
          <ion-input v-model="email" type="email" placeholder="seu@email.com"></ion-input>
        </ion-item>

        <ion-button expand="block" class="ion-margin-top" @click="handleRecover">
          Recuperar Senha
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton, 
  alertController
} from '@ionic/vue';

const router = useRouter();
const email = ref('');

const handleRecover = async () => {
    if (!email.value) {
        const alert = await alertController.create({
            header: 'Erro',
            message: 'Por favor, informe o e-mail.',
            buttons: ['OK']
        });
        await alert.present();
        return;
    }

    const storedUsers = localStorage.getItem('users_list');

    if (storedUsers) {
        const users = JSON.parse(storedUsers);

        const user = users.find((u: any) => u.email === email.value);

        if (user) {
            const successAlert = await alertController.create({
                header: 'Senha Recuperada',
                message: `Olá ${user.name}, sua senha é: ${user.password}`,
                buttons: [
                    {
                        text: 'Ir para login',
                        handler: () => {
                            router.push('/login');
                        }
                    }
                ]
            });
            await successAlert.present();
        } else {
            const errorAlert = await alertController.create({
                header: 'Não Encontrado',
                message: 'Este e-mail não está cadastrado no sistema.',
                buttons: ['OK']
            });
            await errorAlert.present();
        }
    }


};
</script>

<style scoped>
.forgot-container {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>