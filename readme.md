# **Установка, настройка и запуск тестов проекта**

1. Проверьте, что у вас установлен node.js:

   `node -v`

2. Инициализируйте проект:

   `npm init`

3. Установите jest:

   `npm install - -save-dev jest`

4. Отредактируйте package.json для запуска тестов из командной строки:

```
"scripts": {
"test": "jest"
}
```