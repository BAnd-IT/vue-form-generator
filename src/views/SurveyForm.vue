<template>
    <div class="survey-form">
        <h1 class="survey-form__title">Опрос пользователя</h1>
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

const formId = 'survey-form';
const formData = ref<FormData>({});

const initialValues = computed(() => {
    return store.getters['getFormValues'](formId) || {};
});

const formConfig: FormConfig = {
    id: formId,
    name: 'Survey Form',
    layout: 'vertical',
    fields: [
        {
            id: 'disabled',
            type: 'input',
            name: 'info',
            label: 'Это нередактируемое поле со значением по умолчанию',
            disabled: true,
            value: 'Значение по умолчанию',
        },
        {
            id: 'satisfaction',
            type: 'select',
            name: 'satisfaction',
            label: 'Насколько вы довольны нашим сервисом?',
            required: true,
            placeholder: 'Выберите оценку',
            options: [
                { value: 5, label: 'Очень доволен' },
                { value: 4, label: 'Доволен' },
                { value: 3, label: 'Нейтрально' },
                { value: 2, label: 'Не доволен' },
                { value: 1, label: 'Очень не доволен' },
            ],
        },
        {
            id: 'recommend',
            type: 'select',
            name: 'recommend',
            label: 'Порекомендуете ли вы нас друзьям?',
            required: true,
            options: [
                { value: 'yes', label: 'Да, обязательно' },
                { value: 'maybe', label: 'Возможно' },
                { value: 'no', label: 'Нет' },
            ],
        },
        {
            id: 'features',
            type: 'checkbox',
            name: 'features',
            label: 'Какие функции вам наиболее полезны? (можно выбрать несколько)',
            attributes: {
                type: 'hidden',
            },
        },
        {
            id: 'featureForms',
            type: 'checkbox',
            name: 'featureForms',
            label: 'Генератор форм',
        },
        {
            id: 'featureUi',
            type: 'checkbox',
            name: 'featureUi',
            label: 'Пользовательский интерфейс',
        },
        {
            id: 'featurePerformance',
            type: 'checkbox',
            name: 'featurePerformance',
            label: 'Производительность',
        },
        {
            id: 'featureSupport',
            type: 'checkbox',
            name: 'featureSupport',
            label: 'Поддержка',
        },
        {
            id: 'comments',
            type: 'textarea',
            name: 'comments',
            label: 'Дополнительные комментарии или предложения',
            placeholder: 'Поделитесь вашими мыслями...',
            validation: {
                maxLength: 500,
            },
        },
        {
            id: 'contactAllowed',
            type: 'checkbox',
            name: 'contactAllowed',
            label: 'Разрешаете связаться с вами для уточнения деталей?',
        },
        {
            id: 'submit',
            type: 'button',
            name: 'submit',
            label: 'Отправить опрос',
            attributes: {
                type: 'submit',
                variant: 'primary',
            },
        },
        {
            id: 'cancel',
            type: 'button',
            name: 'cancel',
            label: 'Пропустить опрос',
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
.survey-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;

    &__title {
        margin-bottom: 2rem;
        text-align: center;
        color: #333;
    }
}
</style>
