# Скрипт для загрузки сайта на GitHub
# Кодировка UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

# Переход в директорию скрипта
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Инициализация Git репозитория..." -ForegroundColor Yellow

# Инициализация Git
if (Test-Path .git) {
    Write-Host "Git репозиторий уже инициализирован" -ForegroundColor Green
} else {
    git init
    Write-Host "Git репозиторий инициализирован" -ForegroundColor Green
}

Write-Host "`nДобавление файлов..." -ForegroundColor Yellow
git add .

Write-Host "`nСоздание первого коммита..." -ForegroundColor Yellow
git commit -m "Initial commit: MIRCLUB website"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Git репозиторий готов!" -ForegroundColor Green
Write-Host "`nТеперь выполните следующие шаги:" -ForegroundColor Yellow
Write-Host "`n1. Создайте новый репозиторий на GitHub.com" -ForegroundColor White
Write-Host "2. Скопируйте URL вашего репозитория" -ForegroundColor White
Write-Host "3. Выполните следующие команды:" -ForegroundColor White
Write-Host "`n   git remote add origin https://github.com/ВАШ-USERNAME/НАЗВАНИЕ-РЕПОЗИТОРИЯ.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "`nНажмите любую клавишу для выхода..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

