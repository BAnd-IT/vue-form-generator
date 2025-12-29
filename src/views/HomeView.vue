<template>
    <div class="home-view">
        <header class="home-view__header">
            <h1 class="home-view__title">Генератор форм Vue.js</h1>
            <p class="home-view__subtitle">
                Универсальный компонент для создания динамических форм с поддержкой TypeScript, Vuex и Vue Router
            </p>
        </header>

        <div class="home-view__content">
            <section class="features">
                <h2 class="features__title">Возможности генератора</h2>
                <div class="features__grid">
                    <div class="feature-card">
                        <div class="feature-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>form-select</title>
                                <path
                                    d="M15 5H18L16.5 7L15 5M5 2H19C20.11 2 21 2.9 21 4V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V4C3 2.9 3.9 2 5 2M5 4V8H19V4H5M5 20H19V10H5V20M7 12H17V14H7V12M7 16H17V18H7V16Z"
                                />
                            </svg>
                        </div>
                        <h3 class="feature-card__title">5 типов полей</h3>
                        <p class="feature-card__description">Поддержка input, select, checkbox, textarea и кнопки</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>palette-outline</title>
                                <path
                                    d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z"
                                />
                            </svg>
                        </div>
                        <h3 class="feature-card__title">Кастомизация</h3>
                        <p class="feature-card__description">Гибкая настройка через слоты и параметры</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>checkbox-multiple-marked-outline</title>
                                <path
                                    d="M20,16V10H22V16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H16V4H8V16H20M10.91,7.08L14,10.17L20.59,3.58L22,5L14,13L9.5,8.5L10.91,7.08M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z"
                                />
                            </svg>
                        </div>
                        <h3 class="feature-card__title">Валидация</h3>
                        <p class="feature-card__description">Встроенная валидация с кастомными сообщениями</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>database</title>
                                <path
                                    d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
                                />
                            </svg>
                        </div>
                        <h3 class="feature-card__title">Vuex Store</h3>
                        <p class="feature-card__description">Сохранение состояния форм в хранилище</p>
                    </div>
                </div>
            </section>

            <section class="demos">
                <h2 class="demos__title">Демонстрационные формы</h2>
                <p class="demos__subtitle">Выберите одну из демонстрационных форм для тестирования</p>

                <div class="demos__grid">
                    <router-link to="/contact" class="demo-card demo-card--contact">
                        <div class="demo-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>message-alert-outline</title>
                                <path
                                    d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z"
                                />
                            </svg>
                        </div>
                        <h3 class="demo-card__title">Контактная форма</h3>
                        <p class="demo-card__description">
                            Форма обратной связи с полями ввода, селектами и текстовой областью
                        </p>
                        <ul class="demo-card__features">
                            <li>Поле ввода с валидацией email</li>
                            <li>Выпадающий список тем</li>
                            <li>Текстовая область для сообщения</li>
                            <li>Checkbox для подписки</li>
                        </ul>
                    </router-link>

                    <router-link to="/registration" class="demo-card demo-card--registration">
                        <div class="demo-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>card-account-details-outline</title>
                                <path
                                    d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14"
                                />
                            </svg>
                        </div>
                        <h3 class="demo-card__title">Форма регистрации</h3>
                        <p class="demo-card__description">Форма регистрации пользователя с различными типами полей</p>
                        <ul class="demo-card__features">
                            <li>Валидация пароля</li>
                            <li>Выбор страны</li>
                            <li>Согласие с условиями</li>
                        </ul>
                    </router-link>

                    <router-link to="/survey" class="demo-card demo-card--survey">
                        <div class="demo-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>chart-bar</title>
                                <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
                            </svg>
                        </div>
                        <h3 class="demo-card__title">Форма опроса</h3>
                        <p class="demo-card__description">Анкета с разными типами вопросов и вариантами ответов</p>
                        <ul class="demo-card__features">
                            <li>Селекты</li>
                            <li>Множественный выбор</li>
                            <li>Открытые вопросы</li>
                        </ul>
                    </router-link>
                </div>
            </section>

            <section class="usage">
                <h2 class="usage__title">Использование компонента</h2>
                <div class="usage__code">
                    <pre><code class="language-typescript">
                // 1. Импорт компонента
                import FormGenerator from '@/components/FormGenerator/FormGenerator.vue';

                // 2. Определение конфигурации формы (вручную) - см. @/types/form.ts. 
                const formConfig: FormConfig = {
                    id: formId,
                    name: 'Contact Form',
                    layout: 'vertical',
                    fields: [
                        {
                            id: 'name',
                            type: 'input',
                            name: 'name',
                            label: 'Имя',
                            placeholder: 'Введите ваше имя',
                            required: true,
                            validation: {
                                minLength: 2,
                                maxLength: 50,
                            },
                            errorMessage: 'Имя должно содержать от 2 до 50 символов',
                        },
                        {
                            id: 'email',
                            type: 'input',
                            name: 'email',
                            label: 'Email',
                            placeholder: 'Введите ваш email',
                            required: true,
                            validation: {
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            },
                            errorMessage: 'Введите корректный email',
                        },
                        {
                            id: 'phone',
                            type: 'input',
                            name: 'phone',
                            label: 'Телефон',
                            placeholder: '+7 (XXX) XXX-XX-XX',
                            validation: {
                                pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                            },
                            errorMessage: 'Формат: +7 (XXX) XXX-XX-XX',
                        },
                        {
                            id: 'subject',
                            type: 'select',
                            name: 'subject',
                            label: 'Тема обращения',
                            required: true,
                            placeholder: 'Выберите тему',
                            options: [
                                { value: 'general', label: 'Общий вопрос' },
                                { value: 'support', label: 'Техническая поддержка' },
                                { value: 'sales', label: 'Вопросы по продажам' },
                                { value: 'other', label: 'Другое' },
                            ],
                        },
                        {
                            id: 'message',
                            type: 'textarea',
                            name: 'message',
                            label: 'Сообщение',
                            placeholder: 'Введите ваше сообщение',
                            required: true,
                            validation: {
                                minLength: 10,
                                maxLength: 1000,
                            },
                        },
                        {
                            id: 'subscribe',
                            type: 'checkbox',
                            name: 'subscribe',
                            label: 'Подписаться на рассылку',
                        },
                        {
                            id: 'submit',
                            type: 'button',
                            name: 'submit',
                            label: 'Отправить',
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

                // 3. Значения формы
                const initialValues = computed(() => {
                    return store.getters['getFormValues'](formId) || {};
                });

                // 4. Использование в шаблоне
                &lt;FormGeneratorWrapper 
                    :form-config="formConfig" 
                    :initial-values="initialValues"
                    @update:model-value="handleFormUpdate"
                    @submit="handleSubmit" 
                    @cancel="handleCancel" />
                /&gt;
            </code></pre>
                </div>
            </section>
        </div>

        <footer class="home-view__footer">
            <div class="footer__copyright">&copy; {{ currentYear }} Генератор форм.</div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => {
    return new Date().getFullYear();
});
</script>

<style lang="scss" scoped>
.home-view {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__header {
        text-align: center;
        padding: 3rem 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        margin-bottom: 2rem;
    }

    &__title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    &__subtitle {
        font-size: 1.125rem;
        opacity: 0.9;
        max-width: 600px;
        margin: 0 auto;
    }

    &__content {
        flex: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        width: 100%;
    }

    &__footer {
        margin-top: 4rem;
        background-color: #2d3748;
        color: white;
        padding: 2rem 1rem;
    }
}

.features {
    margin-bottom: 4rem;

    &__title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        color: #2d3748;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }
}

.feature-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.2s,
        box-shadow 0.2s;
    text-align: center;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    &__icon {
        width: 30%;
        // margin-bottom: 1rem;
        margin: 0 auto 1rem;

        svg {
            fill: #718096;
        }
    }

    &__title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        color: #2d3748;
    }

    &__description {
        color: #718096;
        line-height: 1.5;
    }
}

.demos {
    margin-bottom: 4rem;

    &__title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 1rem;
        color: #2d3748;
    }

    &__subtitle {
        text-align: center;
        color: #718096;
        margin-bottom: 2rem;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }
}

.demo-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    }

    &--contact {
        border-top: 4px solid #4299e1;

        &:hover {
            border-color: #4299e1;
        }
    }

    &--registration {
        border-top: 4px solid #48bb78;

        &:hover {
            border-color: #48bb78;
        }
    }

    &--survey {
        border-top: 4px solid #ed8936;

        &:hover {
            border-color: #ed8936;
        }
    }

    &__icon {
        width: 30%;
        margin-bottom: 1rem;

        svg {
            fill: #718096;
        }
    }

    &__title {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
        color: #2d3748;
    }

    &__description {
        color: #718096;
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    &__features {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            padding: 0.25rem 0;
            padding-left: 1.5rem;
            position: relative;
            color: #4a5568;

            &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #48bb78;
                font-weight: bold;
            }
        }
    }
}

.usage {
    &__title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        color: #2d3748;
    }

    &__code {
        background: #1a202c;
        border-radius: 0.75rem;
        overflow: hidden;

        pre {
            margin: 0;
            padding: 1.5rem;
            overflow-x: auto;
        }

        code {
            color: #e2e8f0;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.875rem;
            line-height: 1.5;
        }
    }
}

.footer {
    &__copyright {
        text-align: center;
        color: #a0aec0;
        font-size: 0.875rem;
    }
}

@media (max-width: 768px) {
    .home-view__title {
        font-size: 2rem;
    }

    .home-view__subtitle {
        font-size: 1rem;
    }

    .features__grid,
    .demos__grid {
        grid-template-columns: 1fr;
    }
}
</style>
