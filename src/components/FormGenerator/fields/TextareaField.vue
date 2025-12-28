<template>
    <div class="form-field form-field--textarea">
        <label v-if="field.label" :for="field.name" class="form-field__label">
            {{ field.label }}
            <span v-if="field.required" class="form-field__required">*</span>
        </label>

        <slot name="textarea" :field="field" :value="modelValue" :update="updateValue">
            <textarea
                :id="field.name"
                v-model="localValue"
                :name="field.name"
                :placeholder="field.placeholder"
                :required="field.required"
                :disabled="field.disabled"
                :readonly="field.readonly"
                :rows="field.attributes?.rows || 3"
                class="form-field__textarea"
                @blur="validateField"
            />
        </slot>

        <div v-if="errorMessage" class="form-field__error">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { FormField } from '@/types/form';

interface Props {
    field: FormField;
    modelValue?: unknown;
}

interface Emits {
    (e: 'update:modelValue', value: unknown): void;
    (e: 'validate', isValid: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
});

const emits = defineEmits<Emits>();

const errorMessage = ref<string>('');
const localValue = computed({
    get: () => props.modelValue,
    set: (value: unknown) => {
        emits('update:modelValue', value);
    },
});

const updateValue = (value: unknown): void => {
    emits('update:modelValue', value);
};

const validateField = (): void => {
    const value = props.modelValue;
    let isValid = true;

    if (props.field.required && (value === '' || value === null || value === undefined)) {
        errorMessage.value = props.field.errorMessage || 'Это поле обязательно для заполнения';
        isValid = false;
    } else if (props.field.validation) {
        const { validation } = props.field;

        if (validation.minLength && typeof value === 'string' && value.length < validation.minLength) {
            errorMessage.value = `Минимальная длина: ${validation.minLength} символов`;
            isValid = false;
        }

        if (validation.maxLength && typeof value === 'string' && value.length > validation.maxLength) {
            errorMessage.value = `Максимальная длина: ${validation.maxLength} символов`;
            isValid = false;
        }
    }

    if (isValid) {
        errorMessage.value = '';
    }

    emits('validate', isValid);
};
</script>

<style lang="scss" scoped>
.form-field {
    margin-bottom: 1.5rem;

    &__label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
    }

    &__required {
        color: #dc3545;
    }

    &__textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        font-size: 1rem;
        line-height: 1.5;
        resize: vertical;
        min-height: 6rem;

        &:focus {
            outline: 0;
            border-color: #86b7fe;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }

        &:disabled {
            background-color: #e9ecef;
            opacity: 0.6;
        }
    }

    &__error {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #dc3545;
    }
}
</style>
