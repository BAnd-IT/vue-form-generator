<template>
    <div class="form-field form-field--checkbox">
        <slot name="checkbox" :field="field" :value="modelValue" :update="updateValue">
            <label class="form-field__checkbox-label">
                <input
                    :id="field.name"
                    v-model="localValue"
                    type="checkbox"
                    :name="field.name"
                    :required="field.required"
                    :disabled="field.disabled"
                    class="form-field__checkbox"
                />
                <span class="form-field__checkbox-text">
                    {{ field.label }}
                    <span v-if="field.required" class="form-field__required">*</span>
                </span>
            </label>
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
    modelValue: false,
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

    &__checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    &__checkbox {
        margin-right: 0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
    }

    &__checkbox-text {
        user-select: none;
    }

    &__error {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #dc3545;
    }
}
</style>
