## Запуск проекта

# frontend

Установка - **npm install**
Запуск - **npm run dev**

# backend

Установка - **npm install**
Запуск - **npm run start**

ВАЖНО
Для корректной работы backend и frontend вместе в файле **main.ts** (папки backend) должен быть указан корректный ресурс на котором запущен frontend:

```
origin: 'http://localhost:5173'
```