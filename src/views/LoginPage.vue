<template>
    <IonPage>
        <IonContent>
            <IonInput placeholder="E-mail" v-model="email"/>
            <IonInput type="password" placeholder="Senha" v-model="senha"/>

            <IonButton @click="entrar">Entrar</IonButton>


        </IonContent>
    </IonPage>
</template>


<script setup>
import { IonButton, IonContent, IonInput, IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const senha = ref('');
const router = useRouter();

const entrar = () => {
    if (email.value && senha.value) {
        router.push('/home');
    } else {
        alert('Preencha tudo');
    }
};
</script>