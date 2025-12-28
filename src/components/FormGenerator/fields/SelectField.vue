<template>
    <div class="form-field form-field--select">
        <label v-if="field.label" :for="field.name" class="form-field__label">
            {{ field.label }}
            <span v-if="field.required" class="form-field__required">*</span>
        </label>

        <slot name="select" :field="field" :value="modelValue" :update="updateValue">
            <select
                :id="field.name"
                v-model="localValue"
                :name="field.name"
                :required="field.required"
                :disabled="field.disabled"
                class="form-field__select"
            >
                <option v-if="field.placeholder" value="" disabled>
                    {{ field.placeholder }}
                </option>
                <option v-for="option in field.options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
        </slot>

        <div v-if="errorMessage" class="form-field__error">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { FormField } from '@/types/form';

interface Props {
    field: FormField;
    modelValue?: unknown;
}

interface Emits {
    (e: 'update:modelValue', value: unknown): void;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
});

const emits = defineEmits<Emits>();

const errorMessage = computed(() => {
    if (props.field.required && !props.modelValue) {
        return props.field.errorMessage || 'Это поле обязательно для заполнения';
    }
    return '';
});

const localValue = computed({
    get: () => props.modelValue,
    set: (value: unknown) => {
        emits('update:modelValue', value);
    },
});

const updateValue = (value: unknown): void => {
    emits('update:modelValue', value);
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

    &__select {
        width: 100%;
        padding: 0.75rem 2.25rem 0.75rem 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
        appearance: none;

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
