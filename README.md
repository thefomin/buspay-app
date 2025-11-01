# Telegram Bus Payment App

Копия оригинального приложения для **оплаты проезда в общественном транспорте через Telegram**.

В проекте реальная оплата заменена на **автоматическую оплату с редиректом на квитанцию билета**, а купленный билет отправляется пользователю прямо в чат.
 

Проект создан **исключительно в учебных целях**.

 ([Перейти в бота](https://t.me/buspaymentbot))
   

## 🚀 О проекте

Приложение повторяет функционал оригинального сервиса ([Городской Транспорт Бот](https://t.me/buspaybot)):

- Ввод кода билета, идентифицирующего перевозчика

- Сканирование билета по QR

- Выбор количества билетов и расчёт стоимости

- Оформление оплаты с автоматическим редиректом на квитанцию

- Отправка купленного билета в Telegram-чат пользователя

Проект **работает полностью в Telegram** и использует API мессенджера для взаимодействия с пользователем.

  

## Технологии

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![Shadcn](https://camo.githubusercontent.com/fec464f064b78abf13719d8fb0450ea14277a027e61643d7252d1ef4a4e1a72b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73686164636e2f75692d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d73686164636e2f7569266c6f676f436f6c6f723d7768697465)![Typescipt](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
  

##  Функционал

- Просмотр информации о перевозчике и рейсе

- Выбор количества билетов с динамическим расчётом стоимости

- Автоматическая оплата и редирект на квитанцию

- Получение купленного билета в Telegram-чат

- Поддержка мобильного интерфейса через Telegram WebApp


## Установка и запуск

```bash
# Установка зависимостей
npm  install  

# Локальный запуск
npm  run  dev
```