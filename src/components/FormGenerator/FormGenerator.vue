<template>
    <form
        :class="['form-generator', `form-generator--${formConfig.layout || 'vertical'}`]"
        @submit.prevent="handleSubmit"
    >
        <FormField
            v-for="field in formConfig.fields.filter((f) => f.type !== 'button')"
            :key="field.id"
            :field="field"
            :model-value="formValues[field.name]"
            @update:model-value="updateFieldValue"
            @validate="handleFieldValidation"
        >
            <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
                <slot :name="slotName" v-bind="slotProps" />
            </template>
        </FormField>

        <div v-if="hasButtons" class="form-generator__actions">
            <FormField
                v-for="button in buttonFields"
                :key="button.id"
                :field="button"
                @button-click="handleButtonClick"
            >
                <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
                    <slot :name="slotName" v-bind="slotProps" />
                </template>
            </FormField>
        </div>
    </form>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import FormField from './FormField.vue';
import type { FormConfig, FormData, FormField as IFormField } from '@/types/form';

interface Props {
    formConfig: FormConfig;
    modelValue?: FormData;
}

interface Emits {
    (e: 'update:modelValue', values: FormData): void;
    (e: 'submit', values: FormData): void;
    (e: 'cancel'): void;
    (e: 'validation', isValid: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: () => ({}),
});

const emits = defineEmits<Emits>();

const formValues = ref<FormData>({ ...props.modelValue });
const fieldValidations = ref<Record<string, boolean>>({});

const buttonFields = computed(() => {
    return props.formConfig.fields.filter((field) => field.type === 'button');
});

const hasButtons = computed(() => {
    return buttonFields.value.length > 0;
});

const updateFieldValue = (fieldName: string, value: unknown): void => {
    formValues.value[fieldName] = value;
    emits('update:modelValue', formValues.value);
};

const handleFieldValidation = (fieldName: string, isValid: boolean): void => {
    fieldValidations.value[fieldName] = isValid;
    validateForm();
};

const validateForm = (): void => {
    const requiredFields = props.formConfig.fields.filter((field) => field.required);
    const isValid = requiredFields.every((field) => fieldValidations.value[field.name] !== false);
    emits('validation', isValid);
};

const handleSubmit = (): void => {
    const isValid = Object.values(fieldValidations.value).every((v) => v !== false);
    if (isValid) {
        emits('submit', formValues.value);
    }
};

const handleButtonClick = (buttonName: string): void => {
    const buttonConfig = buttonFields.value.find((b) => b.name === buttonName);
    if (buttonConfig?.attributes?.action === 'submit') {
        handleSubmit();
    } else if (buttonConfig?.attributes?.action === 'cancel') {
        emits('cancel');
    }
};

watch(
    () => props.modelValue,
    (newValues) => {
        formValues.value = { ...newValues };
    },
    { immediate: true },
);

watch(
    () => props.formConfig,
    () => {
        fieldValidations.value = {};
        validateForm();
    },
    { deep: true },
);
</script>

<style lang="scss" scoped>
.form-generator {
    &--vertical {
        .form-generator__actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
    }

    &--horizontal {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: flex-start;

        .form-generator__actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
    }
}
</style>
