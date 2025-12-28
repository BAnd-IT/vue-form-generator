export type FieldType = 'input' | 'select' | 'checkbox' | 'textarea' | 'button';

export interface FormField {
    id: string;
    type: FieldType;
    label?: string;
    name: string;
    value?: string | boolean | number | string[];
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    options?: Array<{
        value: string | number;
        label: string;
        disabled?: boolean;
    }>;
    validation?: {
        pattern?: RegExp;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
        custom?: (value: unknown) => boolean;
    };
    errorMessage?: string;
    attributes?: {
        type?: string;
        variant?: 'primary' | 'secondary' | 'outline' | 'danger';
        rows?: number;
        cols?: number;
        action?: 'submit' | 'cancel' | 'reset';
        size?: number;
        [key: string]: unknown;
    };
    slotName?: string;
}

export interface FormConfig {
    id: string;
    name: string;
    fields: FormField[];
    layout?: 'vertical' | 'horizontal';
}

export interface FormData {
    [key: string]: unknown;
}

export interface FormState {
    configs: Record<string, FormConfig>;
    values: Record<string, FormData>;
}
