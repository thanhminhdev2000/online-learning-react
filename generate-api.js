import dotenv from 'dotenv';
import path from 'path';
import { generateApi } from 'swagger-typescript-api';
dotenv.config();

generateApi({
  name: 'ApiClient.ts',
  url: `${process.env.VITE_API_URL}/swagger/doc.json`,
  output: path.resolve(process.cwd(), './src/api-swagger'),
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
      return typeName.replace('Models', '');
    },
    onFormatRouteName(routeInfo, templateRouteName) {
      if (routeInfo.route.includes('/auth')) {
        return templateRouteName.replace('Create', '').replace('Update', '');
      }

      return templateRouteName
        .replace('users', 'user')
        .replace('documents', 'document')
        .replace('contacts', 'contact')
        .replace('courses', 'course')
        .replace('lessons', 'lesson');
    },
  },
});
