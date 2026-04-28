<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="register-container">
        <ion-item>
          <ion-label position="stacked">Nome</ion-label>
          <ion-input v-model="name" type="text" placeholder="Seu nome completo"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">E-mail</ion-label>
          <ion-input v-model="email" type="email" placeholder="seu@email.com"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Senha</ion-label>
          <ion-input v-model="password" type="password" placeholder="Crie uma senha"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Confirmar Senha</ion-label>
          <ion-input v-model="confirmPassword" type="password" placeholder="Repita a senha"></ion-input>
        </ion-item>

        <ion-button expand="block" class="ion-margin-top" @click="handleRegister">
          Cadastrar
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
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = async () => {
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
        const alert = await alertController.create({
            header: 'Erro',
            message: 'Por favor, preencha todos os campos.',
            buttons: ['OK']
        });
        await alert.present();
        return;
    }

    if (password.value !== confirmPassword.value) {
        const alert = await alertController.create({
            header: 'Erro',
            message: 'As senhas não coincidem.',
            buttons: ['OK']
        });
        await alert.present();
        return;
    }

    const storedUsers = localStorage.getItem('users_list');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const userExists = users.find((u: any) => u.email === email.value);
    if (userExists) {
        const alert = await alertController.create({
            header: 'Erro',
            message: 'Este e-mail já está cadastrado.',
            buttons: ['OK']
        });
        await alert.present();
        return;
    }

    const newUser = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    users.push(newUser);

    localStorage.setItem('users_list', JSON.stringify(users));

    const successAlert = await alertController.create({
        header: 'Sucesso',
        message: 'Cadastro realizado com sucesso! Agora você pode fazer login,',
        buttons: ['OK']
    });
    await successAlert.present();
    router.push('login');
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>