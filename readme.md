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

5. Команда для запуска кода из терминала:

`npm run test`

В настроящем проекте для оценки покрытия кода используется babel-plugin-istanbul и измеряется line, branch & function покрытие.

# **Установка и проверка покрытия тестов**

1. Подключите покрытие, для этого используйте команду:

`npm install --save-dev babel-plugin-istanbul`

2. Для запуска проверки покрытия используйте команду:

`npx jest --coverage`

# Виды тестового покрытия

1. **Line coverage** (покрытие строк кода) - это процент строк кода, которые были выполнены тестами.

2. **Branch coverage** (покрытие ветвей) - это процент ветвей кода (if, else,switch и т.д.), которые были выполнены тестами.

3. **Function coverage** (покрытие функций) - это процент функций и методов, которые были покрыты тестами
