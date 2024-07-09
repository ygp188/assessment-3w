# LootBox - это сервис случайных подарков. Открой ящик и получи приз.

Твое задание - это сервис лутбоксов. В нем можно будет закинуть деньжат и потратить все свои накопления на креативные сюрпризы :)

## Release 0

Перейди в папку `server` и подготовь его к запуску. Тебе потребуется установить зависимости, заполнить переменные окружения `.env`, накатить базу данных и запустить сервер на 3000 порту. После запуска перейди на http://localhost:3000/api-docs и ознакомься с API документацией по спецификации OpenAPI 3.1.0 в формате `Swagger`.

## Release 1

На главной странице должен выводиться список всех лутбоксов из базы данных.
Реализуй их покупку. При нажатии на "Купить":

- В базе данных свойство "available" у лутбокса меняется с true на false.
- Вместо знака вопроса отображается содержимое лутбокса.
- С баланса списывается стоимость лутбокса.
- Кнопка "Купить" меняется на "Не доступно" и блокируется.

## Release 2

На странице профиля должен отображаться список всех купленных лутбоксов.
У каждого лутбокса есть кнопка "Удалить". Реализуй функционал удаления (лутбокс должен удаляться не только на стороне клиента, но и из базы данных)

# Release 3

В правой части навбара указан твой баланс. Именно с него списываются денежки при покупке лутбокса. Рядом с ним есть значок, при нажатии на который открывается модалка с формочкой. Реализуй пополнение баланса с помощью этой формочки (баланс существует только на клиентской стороне).

## Release 4

На странице админа реализуй добавление нового лутбокса. Он должен записаться в базу данных и отобразиться на главной странице.
