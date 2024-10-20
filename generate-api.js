import path from 'path';
import { generateApi } from 'swagger-typescript-api';

generateApi({
  name: 'ApiClient.ts',
  url: 'http://localhost:8080/swagger/doc.json',
  output: path.resolve(process.cwd(), './src/apis/generated'),
  templates: path.resolve(process.cwd(), './src/api-templates'),
  httpClientType: 'axios',
  generateClient: true,
  toJS: false,
  generateResponses: true,
  typeSuffix: 'Dto',
  modular: true,
  extractEnums: true,
  singleHttpClient: true,
  extractRequestParams: true,
  generateRouteTypes: false,
  extractRequestBody: true,
  extractResponseBody: true,
  extractResponseError: true,
  unwrapResponseData: true,
  prettier: {
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxSingleQuote: false,
    printWidth: 120,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: false,
  },
  moduleNameIndex: 1,
  moduleNameFirstTag: true,
  hooks: {
    onFormatTypeName(typeName) {
      return typeName.replaceAll('Models', '');
    },
    onFormatRouteName(_, templateRouteName) {
      templateRouteName = templateRouteName.replaceAll('Create', '');
      if (templateRouteName?.includes('users')) {
        const converted = templateRouteName.replaceAll('users', 'user');
        return converted;
      }
      return templateRouteName;
    },
  },
});
