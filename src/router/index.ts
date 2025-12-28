import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactForm from '@/views/ContactForm.vue';
import RegistrationForm from '@/views/RegistrationForm.vue';
import SurveyForm from '@/views/SurveyForm.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactForm,
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationForm,
    },
    {
        path: '/survey',
        name: 'survey',
        component: SurveyForm,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
