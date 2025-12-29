<template>
    <div class="form-field form-field--button">
        <slot name="button" :field="field" :handleClick="handleClick">
            <button
                :type="field.attributes?.type || 'button'"
                :class="[
                    'form-field__button',
                    field.attributes?.variant && `form-field__button--${field.attributes.variant}`,
                ]"
                @click="handleClick"
            >
                {{ field.label }}
            </button>
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { FormField } from '@/types/form';

interface Props {
    field: FormField;
}

interface Emits {
    (e: 'click'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const handleClick = (): void => {
    emits('click');
};
</script>

<style lang="scss" scoped>
.form-field {
    &__button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        cursor: pointer;
        transition: all 0.15s ease-in-out;

        &--primary {
            background-color: #0d6efd;
            color: #fff;

            &:hover {
                background-color: #0b5ed7;
            }

            &:active {
                background-color: #0a58ca;
            }
        }

        &--secondary {
            background-color: #6c757d;
            color: #fff;

            &:hover {
                background-color: #5c636a;
            }
        }

        &--outline {
            background-color: transparent;
            border: 1px solid #0d6efd;
            color: #0d6efd;

            &:hover {
                background-color: #0d6efd;
                color: #fff;
            }
        }

        &:disabled {
            opacity: 0.65;
            cursor: not-allowed;
        }
    }
}
</style>
