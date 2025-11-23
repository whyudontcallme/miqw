// Language selector dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.querySelector('.header__language');

    if (languageSelector) {
        languageSelector.addEventListener('click', function () {
            console.log('Language selector clicked');
        });
    }

    // Login button functionality
    const loginBtn = document.querySelector('.header__login-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            console.log('Login button clicked');
        });
    }

    // Navigation links smooth scroll (if needed)
    const navLinks = document.querySelectorAll('.header__nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Add navigation functionality here
            console.log('Navigation link clicked:', this.textContent);
        });
    });

    // Фон движется вниз при прокрутке страницы вниз и плавно переходит от первого ко второму
    const backgroundVectors = document.querySelector('.main__background-vectors');
    const firstLayer = document.querySelector('.main__background-layer--first');
    const secondLayer = document.querySelector('.main__background-layer--second');

    if (backgroundVectors && firstLayer && secondLayer) {
        let ticking = false;

        function updateBackground() {
            // Получаем позицию прокрутки
            const scrolled = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

            // Получаем общую высоту документа
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );

            // Вычисляем прогресс прокрутки (от 0 до 1)
            const scrollProgress = Math.min(scrolled / (documentHeight - window.innerHeight), 1);

            // Фон движется ВВЕРХ при прокрутке ВНИЗ (эффект параллакса)
            const moveUp = -scrolled * 0.5; // Отрицательное значение двигает фон вверх

            // Применяем движение к обоим слоям
            firstLayer.style.backgroundPosition = `center ${moveUp}px`;
            secondLayer.style.backgroundPosition = `center ${moveUp}px`;

            // Плавный переход от первого фона ко второму
            // При прокрутке первый фон становится прозрачным, второй появляется
            firstLayer.style.opacity = 1 - scrollProgress;
            secondLayer.style.opacity = scrollProgress;

            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                window.requestAnimationFrame(updateBackground);
                ticking = true;
            }
        }

        // Устанавливаем начальную позицию
        updateBackground();

        // Слушаем событие прокрутки
        window.addEventListener('scroll', requestTick, { passive: true });

        // Обновляем при изменении размера окна
        window.addEventListener('resize', function () {
            updateBackground();
        }, { passive: true });
    }

    // Инициализация анимации прокрутки отзывов через JavaScript
    function initReviewsAnimation() {
        const reviewsTrack = document.querySelector('.reviews__track');
        const reviewsWrapper = document.querySelector('.reviews__wrapper');
        
        if (reviewsTrack && reviewsWrapper) {
            // Убеждаемся, что элементы видны
            const rect = reviewsWrapper.getBoundingClientRect();
            
            // Получаем ширину одного wrapper'а
            let wrapperWidth = reviewsWrapper.offsetWidth || reviewsWrapper.scrollWidth;
            
            // Если ширина еще не определена, пробуем получить через offsetWidth после небольшой задержки
            if (wrapperWidth === 0) {
                setTimeout(function() {
                    wrapperWidth = reviewsWrapper.offsetWidth || reviewsWrapper.scrollWidth;
                    if (wrapperWidth > 0) {
                        startScrolling(reviewsTrack, wrapperWidth);
                    }
                }, 200);
                return;
            }
            
            startScrolling(reviewsTrack, wrapperWidth);
        }
    }
    
    function startScrolling(track, wrapperWidth) {
        let position = 0;
        const speed = 1; // пикселей за кадр (можно настроить скорость)
        let animationId = null;
        
        function animate() {
            position -= speed;
            
            // Когда прокрутили на ширину одного wrapper'а, сбрасываем позицию
            if (Math.abs(position) >= wrapperWidth) {
                position = 0;
            }
            
            track.style.transform = `translateX(${position}px)`;
            animationId = requestAnimationFrame(animate);
        }
        
        // Останавливаем предыдущую анимацию, если она была
        if (track._animationId) {
            cancelAnimationFrame(track._animationId);
        }
        
        // Запускаем анимацию
        track._animationId = requestAnimationFrame(animate);
        console.log('Reviews animation started, wrapper width:', wrapperWidth);
    }
    
    // Запускаем анимацию после загрузки страницы
    function startAnimation() {
        setTimeout(function() {
            initReviewsAnimation();
            // Пробуем еще раз через 500мс на случай, если элементы еще не готовы
            setTimeout(initReviewsAnimation, 500);
        }, 200);
    }
    
    // Пробуем запустить сразу
    initReviewsAnimation();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startAnimation);
    } else {
        startAnimation();
    }
    
    // Также запускаем после полной загрузки всех ресурсов
    window.addEventListener('load', function() {
        setTimeout(initReviewsAnimation, 500);
        setTimeout(initReviewsAnimation, 1000);
    });

    // Custom Cursor Implementation - Точная реализация по дизайну Figma
    const customCursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (customCursor && cursorDot && cursorOutline) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorDotX = 0;
        let cursorDotY = 0;
        let cursorOutlineX = 0;
        let cursorOutlineY = 0;
        let isHovering = false;
        let isClicking = false;

        // Скорость следования контура (меньше = плавнее, но медленнее)
        const outlineSpeed = 0.12;

        // Отслеживание позиции мыши
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Плавная анимация курсора
        function animateCursor() {
            // Точка следует за мышью напрямую
            cursorDotX = mouseX;
            cursorDotY = mouseY;
            cursorDot.style.left = `${cursorDotX}px`;
            cursorDot.style.top = `${cursorDotY}px`;

            // Контур следует плавно с задержкой
            cursorOutlineX += (mouseX - cursorOutlineX) * outlineSpeed;
            cursorOutlineY += (mouseY - cursorOutlineY) * outlineSpeed;
            cursorOutline.style.left = `${cursorOutlineX}px`;
            cursorOutline.style.top = `${cursorOutlineY}px`;

            requestAnimationFrame(animateCursor);
        }

        // Запуск анимации
        animateCursor();

        // Обработка состояний наведения на интерактивные элементы
        const interactiveElements = document.querySelectorAll(
            'a, button, .btn, .header__nav-link, .header__language, ' +
            '.services__game-btn, .services__arrow, .reviews__card, ' +
            '.header__login-btn, .game-logos__item, .footer__link, ' +
            '.footer__social-link, input, textarea, select, [role="button"]'
        );

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                isHovering = true;
                customCursor.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                isHovering = false;
                customCursor.classList.remove('hover');
            });
        });

        // Обработка клика
        document.addEventListener('mousedown', () => {
            isClicking = true;
            customCursor.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            isClicking = false;
            customCursor.classList.remove('click');
        });

        // Скрытие курсора при выходе мыши за пределы окна
        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
        });

        // Инициализация - скрыть стандартный курсор
        document.body.style.cursor = 'none';
    }

    // Параллакс эффект для страницы услуг - фон движется при прокрутке
    if (document.body.classList.contains('services-page')) {
        let ticking = false;

        function updateServicesBackground() {
            // Получаем позицию прокрутки
            const scrolled = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

            // Фон движется ВВЕРХ при прокрутке ВНИЗ (эффект параллакса)
            // Используем меньший коэффициент для более плавного движения
            const moveUp = -scrolled * 0.3; // Коэффициент можно настроить (0.3 = медленнее, 0.5 = быстрее)

            // Применяем движение к фону body
            document.body.style.backgroundPosition = `center ${moveUp}px`;

            ticking = false;
        }

        function requestServicesTick() {
            if (!ticking) {
                window.requestAnimationFrame(updateServicesBackground);
                ticking = true;
            }
        }

        // Устанавливаем начальную позицию
        updateServicesBackground();

        // Слушаем событие прокрутки
        window.addEventListener('scroll', requestServicesTick, { passive: true });

        // Обновляем при изменении размера окна
        window.addEventListener('resize', function () {
            updateServicesBackground();
        }, { passive: true });
    }
});
