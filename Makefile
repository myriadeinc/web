up:
	npm run start:dev
build:
	npm run build
deploy-ci:
	./node_modules/.bin/firebase deploy --token ${FIREBASE_TOKEN} --only hosting
deploy:
	firebase deploy