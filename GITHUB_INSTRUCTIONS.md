# Инструкция по загрузке сайта на GitHub

## Шаг 1: Инициализация Git репозитория

Откройте командную строку или PowerShell в папке проекта и выполните:

```bash
git init
```

## Шаг 2: Добавление файлов

```bash
git add .
```

## Шаг 3: Создание первого коммита

```bash
git commit -m "Initial commit: MIRCLUB website"
```

## Шаг 4: Создание репозитория на GitHub

1. Перейдите на [GitHub.com](https://github.com)
2. Войдите в свой аккаунт (или создайте новый)
3. Нажмите кнопку "+" в правом верхнем углу
4. Выберите "New repository"
5. Введите название репозитория (например: `mirclub-website`)
6. Выберите "Public" или "Private"
7. **НЕ** отмечайте "Initialize this repository with a README" (мы уже создали README.md)
8. Нажмите "Create repository"

## Шаг 5: Подключение к удаленному репозиторию

Скопируйте URL вашего репозитория с GitHub (например: `https://github.com/ваш-username/mirclub-website.git`) и выполните:

```bash
git remote add origin https://github.com/ВАШ-USERNAME/НАЗВАНИЕ-РЕПОЗИТОРИЯ.git
```

## Шаг 6: Переименование ветки в main

```bash
git branch -M main
```

## Шаг 7: Загрузка на GitHub

```bash
git push -u origin main
```

Вас попросят ввести логин и пароль (или токен доступа) GitHub.

## Альтернативный способ: Использование GitHub Desktop

1. Скачайте и установите [GitHub Desktop](https://desktop.github.com/)
2. Откройте GitHub Desktop
3. File → Add Local Repository
4. Выберите папку с вашим проектом
5. Нажмите "Publish repository" в правом верхнем углу
6. Введите название и описание
7. Нажмите "Publish Repository"

## Включение GitHub Pages (для публикации сайта)

После загрузки на GitHub:

1. Перейдите в Settings вашего репозитория
2. Прокрутите до раздела "Pages"
3. В "Source" выберите "main" branch
4. Нажмите "Save"
5. Ваш сайт будет доступен по адресу: `https://ваш-username.github.io/название-репозитория/`

