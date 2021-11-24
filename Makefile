gendiff: # запускает гендиф утилиту 
	node bin/gendiff.js
lint: # запускает линтер
	npx eslint .
install: # ботва для создания воспроизводимой сборки 
	npm ci
test: # запускает тесты
	npx jest .
test-coverage: # покрытие тестами
	npm test -- --coverage --coverageProvider=v8