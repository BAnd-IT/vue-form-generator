<template>
    <div class="registration-form">
        <h1 class="registration-form__title">Форма регистрации</h1>

        <div v-if="passwordMismatch" class="registration-form__alert alert-error">
            Пароли не совпадают. Пожалуйста, проверьте введенные пароли.
        </div>

        <FormGeneratorWrapper
            :form-config="formConfig"
            :initial-values="initialValues"
            @update:model-value="handleFormUpdate"
            @submit="handleSubmit"
            @cancel="handleCancel"
            @validation="handleValidation"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import FormGeneratorWrapper from '@/components/FormGenerator/FormGeneratorWrapper.vue';
import type { FormConfig, FormData } from '@/types/form';

const store = useStore();
const router = useRouter();

const formId = 'registration-form';
const formData = ref<FormData>({});
const passwordMismatch = ref(false);
const formIsValid = ref(false);

const initialValues = computed(() => {
    return store.getters['getFormValues'](formId) || {};
});

const formConfig: FormConfig = {
    id: formId,
    name: 'Registration Form',
    layout: 'vertical',
    fields: [
        {
            id: 'firstName',
            type: 'input',
            name: 'firstName',
            label: 'Имя',
            placeholder: 'Введите ваше имя',
            required: true,
            validation: {
                minLength: 2,
                maxLength: 50,
            },
        },
        {
            id: 'lastName',
            type: 'input',
            name: 'lastName',
            label: 'Фамилия',
            placeholder: 'Введите вашу фамилию',
            required: true,
            validation: {
                minLength: 2,
                maxLength: 50,
            },
        },
        {
            id: 'email',
            type: 'input',
            name: 'email',
            label: 'Email',
            placeholder: 'example@domain.com',
            required: true,
            validation: {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
            errorMessage: 'Введите корректный email адрес',
        },
        {
            id: 'password',
            type: 'input',
            name: 'password',
            label: 'Пароль',
            placeholder: 'Введите пароль',
            required: true,
            attributes: {
                type: 'password',
            },
            validation: {
                minLength: 6,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
                custom: (value) => {
                    if (!value) return true;
                    const strValue = String(value);
                    return /[A-Za-z]/.test(strValue) && /\d/.test(strValue);
                },
            },
            errorMessage: 'Пароль должен содержать минимум 6 символов, включая буквы и цифры',
        },
        {
            id: 'confirmPassword',
            type: 'input',
            name: 'confirmPassword',
            label: 'Подтверждение пароля',
            placeholder: 'Повторите пароль',
            required: true,
            attributes: {
                type: 'password',
            },
            validation: {
                custom: (value, allValues) => {
                    return true;
                },
            },
        },
        {
            id: 'country',
            type: 'select',
            name: 'country',
            label: 'Страна',
            required: true,
            placeholder: 'Выберите страну',
            options: [
                { value: 'ru', label: 'Россия' },
                { value: 'by', label: 'Беларусь' },
                { value: 'kz', label: 'Казахстан' },
                { value: 'other', label: 'Другая' },
            ],
        },
        {
            id: 'newsletter',
            type: 'checkbox',
            name: 'newsletter',
            label: 'Подписаться на новостную рассылку',
        },
        {
            id: 'terms',
            type: 'checkbox',
            name: 'terms',
            label: 'Я согласен с условиями использования',
            required: true,
            errorMessage: 'Необходимо принять условия использования',
        },
        {
            id: 'privacy',
            type: 'checkbox',
            name: 'privacy',
            label: 'Я согласен на обработку персональных данных',
            required: true,
            errorMessage: 'Необходимо согласиться на обработку данных',
        },
        {
            id: 'submit',
            type: 'button',
            name: 'submit',
            label: 'Зарегистрироваться',
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

const checkPasswordMatch = (values: FormData): boolean => {
    const password = values.password as string;
    const confirmPassword = values.confirmPassword as string;

    if (!password || !confirmPassword) {
        passwordMismatch.value = false;
        return true;
    }

    const match = password === confirmPassword;
    passwordMismatch.value = !match;

    return match;
};

const handleFormUpdate = (values: FormData) => {
    formData.value = values;
    store.dispatch('saveForm', { formId, values: formData.value });
};

const handleValidation = (isValid: boolean) => {
    formIsValid.value = isValid;
};

const handleSubmit = (values: FormData) => {
    console.log('Форма отправлена:', values);

    if (!checkPasswordMatch(values)) {
        alert('Ошибка: Пароли не совпадают. Пожалуйста, проверьте введенные пароли.');
        return;
    }

    if (!values.terms || !values.privacy) {
        alert('Необходимо принять условия использования и согласие на обработку данных.');
        return;
    }

    if (!formIsValid.value) {
        alert('Пожалуйста, заполните все обязательные поля корректно.');
        return;
    }

    alert('Форма успешно отправлена!');
    store.dispatch('clearForm', formId);
    router.push('/');
};

const handleCancel = () => {
    if (confirm('Вы уверены, что хотите отменить регистрацию? Все введенные данные будут потеряны.')) {
        store.dispatch('forms/clearForm', formId);
        router.push('/');
    }
};

watch(
    () => formData.value.password,
    () => {
        checkPasswordMatch(formData.value);
    },
);

watch(
    () => formData.value.confirmPassword,
    () => {
        checkPasswordMatch(formData.value);
    },
);
</script>

<style lang="scss" scoped>
.registration-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;

    &__title {
        margin-bottom: 2rem;
        text-align: center;
        color: #333;
    }

    &__alert {
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 8px;
        font-weight: 500;

        &.alert-error {
            background-color: #fee;
            border: 1px solid #fcc;
            color: #c00;
        }
    }
}

.custom-field {
    &__input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        font-size: 1rem;

        &:focus {
            outline: 0;
            border-color: #86b7fe;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }

        &--error {
            border-color: #dc3545;

            &:focus {
                border-color: #dc3545;
                box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
            }
        }
    }
}
</style>
