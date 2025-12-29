import { createStore } from 'vuex';
import type { FormConfig, FormData } from '@/types/form';

interface FormState {
    configs: Record<string, FormConfig>;
    values: Record<string, FormData>;
}

export default createStore({
    state: (): FormState => ({
        configs: {},
        values: {},
    }),

    mutations: {
        SET_FORM_CONFIG(state: FormState, payload: { formId: string; config: FormConfig }) {
            state.configs[payload.formId] = payload.config;
        },

        SET_FORM_VALUES(state: FormState, payload: { formId: string; values: FormData }) {
            if (!state.values[payload.formId]) {
                state.values[payload.formId] = {};
            }
            Object.assign(state.values[payload.formId], payload.values);
        },

        UPDATE_FIELD_VALUE(state: FormState, payload: { formId: string; fieldName: string; value: unknown }) {
            if (!state.values[payload.formId]) {
                state.values[payload.formId] = {};
            }
            state.values[payload.formId][payload.fieldName] = payload.value;
        },

        CLEAR_FORM(state: FormState, formId: string) {
            if (state.values[formId]) {
                state.values[formId] = {};
            }
        },
    },

    actions: {
        saveFormConfig({ commit }, payload: { formId: string; config: FormConfig }) {
            commit('SET_FORM_CONFIG', payload);
        },

        updateFieldValue(
            { commit },
            payload: {
                formId: string;
                fieldName: string;
                value: unknown;
            },
        ) {
            commit('UPDATE_FIELD_VALUE', payload);
        },

        saveForm({ commit }, payload: { formId: string; values: FormData }) {
            commit('SET_FORM_VALUES', payload);
        },

        clearForm({ commit }, formId: string) {
            commit('CLEAR_FORM', formId);
        },
    },

    getters: {
        getFormConfig: (state: FormState) => (formId: string) => {
            return state.configs[formId];
        },

        getFormValues: (state: FormState) => (formId: string) => {
            return state.values[formId] || {};
        },

        getFieldValue: (state: FormState) => (formId: string, fieldName: string) => {
            return state.values[formId]?.[fieldName];
        },
    },
});
