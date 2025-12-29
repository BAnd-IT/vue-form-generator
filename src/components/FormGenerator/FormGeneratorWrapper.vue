<template>
    <FormGenerator
        v-if="isReady"
        :form-config="formConfig"
        :model-value="formValues"
        v-bind="$attrs"
        @update:model-value="handleUpdate"
    />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import FormGenerator from './FormGenerator.vue';
import type { FormConfig, FormData } from '@/types/form';

interface Props {
    formConfig: FormConfig;
    initialValues?: FormData;
}

const props = defineProps<Props>();

const isReady = ref(false);
const formValues = ref<FormData>({});

const emit = defineEmits<{
    'update:modelValue': [value: FormData];
}>();

const initializeFormValues = () => {
    const values: FormData = {};

    props.formConfig.fields.forEach((field) => {
        if (field.type !== 'button') {
            if (field.value !== undefined) {
                values[field.name] = field.value;
            } else {
                switch (field.type) {
                    case 'input':
                    case 'textarea':
                    case 'select':
                        values[field.name] = '';
                        break;
                    case 'checkbox':
                        values[field.name] = false;
                        break;
                    default:
                        values[field.name] = '';
                }
            }
        }
    });

    if (props.initialValues) {
        Object.assign(values, props.initialValues);
    }

    return values;
};

onMounted(() => {
    formValues.value = initializeFormValues();
    isReady.value = true;
});

const handleUpdate = (values: FormData) => {
    formValues.value = values;
    emit('update:modelValue', values);
};

watch(
    () => props.initialValues,
    (newValues) => {
        if (newValues) {
            Object.assign(formValues.value, newValues);
        }
    },
    { deep: true },
);
</script>
