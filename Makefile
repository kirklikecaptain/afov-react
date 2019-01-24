init: deps

deps:
	npm install

build-staging:
	npm run stage
	printf '%s\n' 'User-agent: *' 'Disallow: /' >./dist/robots.txt

deploy-staging: build-staging
	aws s3 sync \
		--delete \
		--acl public-read \
		./dist \
		s3://staging-www.aftistfulofvinyl.com
	# aws cloudfront create-invalidation --distribution-id E2I7H11XXKCBEP --paths '/*'


build-prod:
	npm run build
	printf '%s\n' 'User-agent: *' 'Disallow: /' >./dist/robots.txt
	# TODO: echo 'User-agent: *' >./dist/robots.txt -- replace with this line for live site


deploy-prod: build-prod
	aws s3 sync \
		--delete \
		--acl public-read \
		./dist \
		s3://www.aftistfulofvinyl.com
	# aws cloudfront create-invalidation --distribution-id E15A3KJH0S5RX8 --paths '/*'


# TODO: add command for s3 redirect managment