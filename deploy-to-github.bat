@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Инициализация Git репозитория...
git init

echo Добавление файлов...
git add .

echo Создание первого коммита...
git commit -m "Initial commit: MIRCLUB website"

echo.
echo ========================================
echo Git репозиторий готов!
echo.
echo Теперь выполните следующие шаги:
echo.
echo 1. Создайте новый репозиторий на GitHub.com
echo 2. Скопируйте URL вашего репозитория
echo 3. Выполните следующие команды:
echo.
echo    git remote add origin https://github.com/ВАШ-USERNAME/НАЗВАНИЕ-РЕПОЗИТОРИЯ.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo ========================================
pause

