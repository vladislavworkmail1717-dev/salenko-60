# salenko-60 — RESTful API на Express.js

ДЗ 60.1. Розробка RESTful API з використанням Express.

## Опис

Сервер реалізує REST API з двома ресурсами — `users` та `articles`. Архітектура побудована за паттерном **MVC**: маршрути (routes) відокремлені від контролерів (controllers), які відповідають за логіку обробки запитів. Усі відповіді — текстові.

## Технології

- Node.js
- Express.js

## Структура проекту

```
salenko-60/
├── controllers/
│   ├── rootController.js      # логіка для головного маршруту "/"
│   ├── usersController.js     # логіка для маршрутів /users
│   └── articlesController.js  # логіка для маршрутів /articles
├── routes/
│   ├── index.js                # збирає всі маршрути докупи
│   ├── usersRoutes.js          # маршрути /users та /users/:userId
│   └── articlesRoutes.js       # маршрути /articles та /articles/:articleId
├── server.js                   # точка входу, налаштування Express-застосунку
├── package.json
└── README.md
```

## Встановлення та запуск

1. Встановіть залежності:

   ```bash
   npm install
   ```

   або

   ```bash
   yarn install
   ```

2. Запустіть сервер:

   ```bash
   npm start
   ```

   Сервер підніметься на `http://localhost:3000`.

3. Для розробки з автоперезапуском (Node.js 18+):

   ```bash
   npm run dev
   ```

## Опис маршрутів

| Метод  | Маршрут              | Опис                                | Відповідь                                      |
|--------|-----------------------|--------------------------------------|-------------------------------------------------|
| GET    | `/`                   | Головний маршрут                     | `Get root route`                                 |
| GET    | `/users`              | Отримати список користувачів         | `Get users route`                                |
| POST   | `/users`              | Створити користувача                 | `Post users route`                               |
| GET    | `/users/:userId`      | Отримати користувача за id           | `Get user by Id route: {userId}`                 |
| PUT    | `/users/:userId`      | Оновити користувача за id            | `Put user by Id route: {userId}`                 |
| DELETE | `/users/:userId`      | Видалити користувача за id           | `Delete user by Id route: {userId}`              |
| GET    | `/articles`           | Отримати список статей               | `Get articles route`                             |
| POST   | `/articles`           | Створити статтю                      | `Post articles route`                            |
| GET    | `/articles/:articleId`| Отримати статтю за id                | `Get article by Id route: {articleId}`           |
| PUT    | `/articles/:articleId`| Оновити статтю за id                 | `Put article by Id route: {articleId}`           |
| DELETE | `/articles/:articleId`| Видалити статтю за id                | `Delete article by Id route: {articleId}`        |

## Перевірка (приклади curl)

```bash
curl http://localhost:3000/
curl http://localhost:3000/users
curl -X POST http://localhost:3000/users
curl http://localhost:3000/users/42
curl -X PUT http://localhost:3000/users/42
curl -X DELETE http://localhost:3000/users/42
curl http://localhost:3000/articles/7
```
