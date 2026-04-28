<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">
            <div class="login-container">
                <IonItem>
                    <IonLabel position="stacked">E-mail</IonLabel>
                    <IonInput v-model="email" type="email" placeholder="seu@email.com"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Senha</IonLabel>
                    <IonInput v-model="password" type="password" placeholder="Sua senha"></IonInput>
                </IonItem>

                <IonButton expand="block" class="ion-margin-top" @click="handleLogin">
                    Entrar
                </IonButton>

                <div class="ion-text-center ion-margin-top">
                    <IonButton fill="clear" size="small" @click="goToForgotPassword">
                        Esqueceu a senha?
                    </IonButton>
                </div>

                <div class="ion-text-center">
                    <IonButton fill="clear" size="small" @click="goToRegister">
                        Não tem uma conta? Cadastre-se
                    </IonButton>
                </div>

            </div>
        </IonContent>
    </IonPage>
</template>


<script setup>
import { alertController, IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
    // recperar dados do localstorage
    const storedUsers = localStorage.getItem('users_list');

    if (storedUsers) {
        const users = JSON.parse(storedUsers);

        const user = users.find((u) => u.email === email.value && u.password === password.value);

        if (user) {
            console.log('Login realizado com sucesso! Seja bem-vindo ', user.name);
            localStorage.setItem('current_user', JSON.stringify(user))
            router.push('/home');
        } else {
            const alert = await alertController.create({
                header: 'Erro de login',
                message: 'E-mail ou senha incorretos.',
                buttons: ['OK']
            });
            await alert.present();
        }
    } else {
        const alert = await alertController.create({
            header: 'Erro',
            message: 'Nenhum usuario cadastrado. Por favor, cadastre-se primeiro.',
            buttons: ['OK']
        });
        await alert.present();
    }
};

const goToRegister = () => {
    router.push('/register')
}

const goToForgotPassword = () => {
    router.push('/forgot-password')
}
</script>

<style scoped>
.lgin-container {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 50px;
}
</style>