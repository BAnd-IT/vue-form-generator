<template>
    <div class="contact-form">
        <h1 class="contact-form__title">Контактная форма</h1>
        <FormGeneratorWrapper
            :form-config="formConfig"
            :initial-values="initialValues"
            @update:model-value="handleFormUpdate"
            @submit="handleSubmit"
            @cancel="handleCancel"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import FormGeneratorWrapper from '@/components/FormGenerator/FormGeneratorWrapper.vue';
import type { FormConfig, FormData } from '@/types/form';

const store = useStore();
const router = useRouter();

const formId = 'contact-form';
const formData = ref<FormData>({});

const initialValues = computed(() => {
    return store.getters['getFormValues'](formId) || {};
});

const formConfig: FormConfig = {
    id: formId,
    name: 'Contact Form',
    layout: 'vertical',
    fields: [
        {
            id: 'name',
            type: 'input',
            name: 'name',
            label: 'Имя',
            placeholder: 'Введите ваше имя',
            required: true,
            validation: {
                minLength: 2,
                maxLength: 50,
            },
            errorMessage: 'Имя должно содержать от 2 до 50 символов',
        },
        {
            id: 'email',
            type: 'input',
            name: 'email',
            label: 'Email',
            placeholder: 'Введите ваш email',
            required: true,
            validation: {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
            errorMessage: 'Введите корректный email',
        },
        {
            id: 'phone',
            type: 'input',
            name: 'phone',
            label: 'Телефон',
            placeholder: '+7 (XXX) XXX-XX-XX',
            validation: {
                pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            },
            errorMessage: 'Формат: +7 (XXX) XXX-XX-XX',
        },
        {
            id: 'subject',
            type: 'select',
            name: 'subject',
            label: 'Тема обращения',
            required: true,
            placeholder: 'Выберите тему',
            options: [
                { value: 'general', label: 'Общий вопрос' },
                { value: 'support', label: 'Техническая поддержка' },
                { value: 'sales', label: 'Вопросы по продажам' },
                { value: 'other', label: 'Другое' },
            ],
        },
        {
            id: 'message',
            type: 'textarea',
            name: 'message',
            label: 'Сообщение',
            placeholder: 'Введите ваше сообщение',
            required: true,
            validation: {
                minLength: 10,
                maxLength: 1000,
            },
        },
        {
            id: 'subscribe',
            type: 'checkbox',
            name: 'subscribe',
            label: 'Подписаться на рассылку',
        },
        {
            id: 'submit',
            type: 'button',
            name: 'submit',
            label: 'Отправить',
            attributes: {
                type: 'submit',
                variant: 'primary',
            },
        },
        {
            id: 'cancel',
            type: 'button',
            name: 'cancel',
            label: 'Отмена',
            attributes: {
                variant: 'outline',
            },
        },
    ],
};

onMounted(() => {
    store.dispatch('saveFormConfig', { formId, config: formConfig });
});

const handleFormUpdate = (values: FormData) => {
    formData.value = values;
    store.dispatch('saveForm', { formId, values: formData.value });
};

const handleSubmit = (values: FormData) => {
    console.log('Форма отправлена:', values);
    alert('Форма успешно отправлена!');
    store.dispatch('clearForm', formId);
    router.push('/');
};

const handleCancel = () => {
    store.dispatch('clearForm', formId);
    router.push('/');
};
</script>

<style lang="scss" scoped>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;

    &__title {
        margin-bottom: 2rem;
        text-align: center;
        color: #333;
    }
}

.custom-input {
    &__field {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #4a90e2;
        border-radius: 0.5rem;
        font-size: 1rem;

        &:focus {
            outline: none;
            border-color: #2c5282;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
        }
    }
}
</style>
