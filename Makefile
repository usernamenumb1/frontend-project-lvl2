gendiff: # запускает гендиф утилиту 
	node bin/gendiff.js
lint: # запускает линтер
	npx eslint .
install: # ботва для создания воспроизводимой сборки 
	npm ci
test: # запускает тесты
	npx jest .