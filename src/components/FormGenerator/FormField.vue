<template>
    <component
        :is="fieldComponent"
        :field="field"
        :model-value="value"
        @update:model-value="updateValue"
        @validate="handleValidation"
        @click="handleButtonClick"
    >
        <template v-if="field.slotName" #[field.slotName]="slotProps">
            <slot :name="field.slotName" v-bind="slotProps" />
        </template>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InputField from './fields/InputField.vue';
import SelectField from './fields/SelectField.vue';
import CheckboxField from './fields/CheckboxField.vue';
import TextareaField from './fields/TextareaField.vue';
import ButtonField from './fields/ButtonField.vue';
import type { FormField } from '@/types/form';

interface Props {
    field: FormField;
    modelValue?: unknown;
}

interface Emits {
    (e: 'update:modelValue', fieldName: string, value: unknown): void;
    (e: 'validate', fieldName: string, isValid: boolean): void;
    (e: 'button-click', fieldName: string): void;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: undefined,
});

const emits = defineEmits<Emits>();

const fieldComponents = {
    input: InputField,
    select: SelectField,
    checkbox: CheckboxField,
    textarea: TextareaField,
    button: ButtonField,
};

const fieldComponent = computed(() => {
    return fieldComponents[props.field.type];
});

const value = computed(() => {
    return props.modelValue ?? props.field.value ?? getDefaultValue();
});

const getDefaultValue = (): unknown => {
    switch (props.field.type) {
        case 'input':
        case 'textarea':
            return '';
        case 'select':
            return '';
        case 'checkbox':
            return false;
        default:
            return '';
    }
};

const updateValue = (newValue: unknown): void => {
    emits('update:modelValue', props.field.name, newValue);
};

const handleValidation = (isValid: boolean): void => {
    emits('validate', props.field.name, isValid);
};

const handleButtonClick = (): void => {
    emits('button-click', props.field.name);
};
</script>
