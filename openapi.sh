openapi-generator generate -i ../fai_server/docs/swagger.yaml -g typescript-fetch -o ./src/api --skip-validate-spec --additional-properties=modelPropertyNaming=original
openapi-generator generate -i ../fai_server/docs/swagger.yaml -g markdown -o ./src/api --skip-validate-spec
