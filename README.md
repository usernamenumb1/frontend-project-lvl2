### Hexlet tests and linter status:
[![Actions Status](https://github.com/usernamenumb1/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/usernamenumb1/frontend-project-lvl2/actions)
![LinterCheck](https://github.com/usernamenumb1/frontend-project-lvl2/actions/workflows/github-actions.yml/badge.svg)
### Codeclimate:
[![Maintainability](https://api.codeclimate.com/v1/badges/51af18d88b0b1051acc1/maintainability)](https://codeclimate.com/github/usernamenumb1/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/51af18d88b0b1051acc1/test_coverage)](https://codeclimate.com/github/usernamenumb1/frontend-project-lvl2/test_coverage)

### Вычислитель отличий
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

### Возможности утилиты:
Поддержка разных входных форматов: yaml, json Генерация отчета в виде plain text, stylish и json

### Установка
1. Установите Node.js последней версии в систему глобально (Установка JavaScript).
2. Склонируйте созданный репозиторий проекта локально.
3. Выполнить установку зависимостей (make install)
4. Запустить сравнение файлов (команды в описании)

### Описание
Вычислить различия можно с помощью команды

gendiff [options] pathToFile1 pathToFile2

Options: -V, --version output the version number -f, --format [type] Output format -h, --help output usage information

[type] - plain, json, stylish - путь к json или yaml файлам

### Примеры работы:
[![asciicast](https://asciinema.org/a/r3pY0ScVXwsYFnFii1Ld6F8BP.svg)](https://asciinema.org/a/r3pY0ScVXwsYFnFii1Ld6F8BP)
[![asciicast](https://asciinema.org/a/p91GlHBIrGh2PeczJ1MW33UHT.svg)](https://asciinema.org/a/p91GlHBIrGh2PeczJ1MW33UHT)
[![asciicast](https://asciinema.org/a/wtt3HZzXNzL15orsoJdwy56p9.svg)](https://asciinema.org/a/wtt3HZzXNzL15orsoJdwy56p9)
[![asciicast](https://asciinema.org/a/onRxLZXNvO2zMiVjgCyGjLwSH.svg)](https://asciinema.org/a/onRxLZXNvO2zMiVjgCyGjLwSH)