# Messanger
Простой мессенджер, созданный для отработки навыков.

# Технологии
- JavaScript
- React
- CSS modules
- Vite
- React Router

# Установка

1. Локально сохраните проект с помощью команды в терминале  
`git clone https://github.com/CondoR-R/messanger`  
либо через страницу GitHub кнопка в верхней части данной страницы  
<> Code -> Download ZIP  
2. Установите NPM пакеты внутри папки с проектом с помощью команд  
в терминале  
`npm i`  
`npm i react-router-dom`  
3. Запустите проект с помощью команды  
`npm run dev`  
4. В другом окне терминала установите npm пакет для запуска  
локального сервера  
`npm install json-server`  
5. Запустите в этом же терминале сервер с помощью команды  
`npm run start:api`  

# Ход разработки

## Version 0.1

- Созданы header и статический вариант главной страницы приложения  
без списка чатов и интерфейса самого чата.  

## Version 0.2

- Создана страница авторизации/регистрации без отправки формы, проверки заполнения полей и проверки совпадения паролей.  
- Имеется возможность смены режима регистрация/авторизация, рабочие кнопки показать/скрыть пароль.  

## Version 0.3

- Добавлены проверки заполнения полей и совпадения паролей.  
- Добавлено визуальное отображение и предупреждение о пустых  
полях/несовпадении паролей.  
- Формы регистрации и авторизации вынесены в отдельные компоненты  
для уменьшения кода и проверок в функции отправки формы.  

## Version 0.4

- Добавлена маршрутизация для главной страницы, страницы регистрации  
и авторизации с помощью React Router.  

## Version 0.5

- Добавлен компонент сообщения.  
- Настроен компонент Chat для правильного позиционирования и отображения  
дочерних элементов.  

## Version 0.5.1

- Рефакторинг CSS стилей, создан отдельный файл с переменными с основными  
цветами, импортированы и использованы переменные в файлах.  

## Version 0.5.2

- Создание компонента чата (ChatCard) в списке чатов (ChatList).  
Стилизация компонента при активном и не активном состоянии,  
настройка скролла в ChatList.  

## Version 0.6

- Добавление авторизации и выхода из аккаунта. Настроены роутеры так,  
чтобы не было возможности попасть на MainPage без авторизации.
- Добавлена симуляция работы сервера с помощью файла data.json  
и Setting up JSON Server  
