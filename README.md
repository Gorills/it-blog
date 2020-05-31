Разворачиваем проект из Git

В папке проекта вводим команды в терминале:

composer install

cp .env.example .env

npm install && npm run dev


Запускаем XAMPP 

заходим localhost/phpmyadmin

Создаем новую базу данных, называем как угодно.

В папке проетка открываем файл .env 

В строчке 

DB_DATABASE=laravel 

вместо laravel пишем свою бд(название)

Для запуска проекта в одном терминале:

php artisan serve

во втором:

npm run watch


