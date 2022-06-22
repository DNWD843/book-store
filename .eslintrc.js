const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'compat',
    'sonarjs',
    'optimize-regex',
  ],

  rules: {
    // для текущего проекта
    '@typescript-eslint/camelcase': OFF,
    'react/prop-types': OFF,
    'react/jsx-sort-default-props': OFF,
    'no-underscore-dangle': [ERROR, { 'allowAfterThis': true }],
    'func-names': [ERROR, 'as-needed', { 'generators': 'never' }],

    // экспорт по дефолту, отдаём преимущество именованному экспорту
    'import/prefer-default-export': OFF,
    // оператор всегда впереди при переносе выражений на новую строку
    'operator-linebreak': [ERROR, 'before'],
    // отключена обязательная привязка label к полю ввода
    'jsx-a11y/label-has-associated-control': OFF,
    // перенос строки, отключен т.к. в windows и unix системах различное поведение
    'linebreak-style': OFF,
    // return в функции, отключен из-за конфликтов в switch/case
    'consistent-return': OFF,
    // объявление state в конструкторе, в разработке не всегда нужен конструктор
    'react/state-in-constructor': OFF,
    // проверка href в ссылке, не корректно работает с компонентами поверх html-ссылок
    'jsx-a11y/anchor-is-valid': OFF,
    // отключено правило для читалок и людей с ограниченными способностями
    'jsx-a11y/click-events-have-key-events': OFF,
    // разрешаем интерактивные события на статических и не интерактивных элементах (div, span)
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    // не всегда методы класса должны использовать логику с this
    'class-methods-use-this': OFF,
    //запрет на спред пропс {...props} в компоненте (отключено по результам голосования)
    'react/jsx-props-no-spreading': OFF,
    // обязательное использование defaultProps в компоненте (отключено по результам голосования)
    'react/require-default-props': OFF,
    // сортировка дефолтных пропсов в компоненте
    // 'react/jsx-sort-default-props': [ ERROR, { ignoreCase: false } ],
    // Переопределение входящих параметров
    'no-param-reassign': [ERROR, { props: false }],
    // минимальная длина имен (по-умолчанию от 2 символов)
    'id-length': [ERROR, { exceptions: ['_', 'i', 'j', 'x', 'y', 'z', 'a', 'b', 'e', 'k', 'v'] }],
    // базовый отступ 2 пробела, у case 2 пробела от switch
    'indent': [ERROR, 2, {
      SwitchCase: 1,
      MemberExpression: 1,
      ignoredNodes: ['JSXElement'],
    }],
    // базовый отступ для jsx
    'react/jsx-indent': [ERROR, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    // базовый отступ для props
    'react/jsx-indent-props': [ERROR, 2],
    // многострочная jsx разметка, кроме единственного вложенного элемента
    'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
    // длина строки
    'max-len': [WARN, { code: 150, 'ignoreStrings': true }],
    // импорт зависимостей
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
    // в каких файлах может содержаться jsx
    'react/jsx-filename-extension': [ERROR, { extensions: ['.ts', '.tsx'] }],
    // кавычки вокруг ключей объектов, единообразно с остальными ключами объекта
    'quote-props': [ERROR, 'consistent'],
    // запрет на использование alert
    'no-alert': ERROR,
    // обязательное использование расширений при импорте файлов (кроме js)
    'import/extensions': [ERROR, {
      'ts': 'never',
      'tsx': 'never',
      'svg': 'always',
      'png': 'always',
      'json': 'always'
    }],
    // ++ только для for-цикла
    'no-plusplus': [ERROR, { 'allowForLoopAfterthoughts': true }],
    // наименования переменных, функций и тд только в camelСase
    'camelcase': [ERROR, {
      allow: [
        'UNSAFE_componentDidMount',
        'UNSAFE_componentWillReceiveProps',
        'UNSAFE_componentWillUpdate',
      ],
    }],
    // можно писать с большой буквы только имена классов (конструкторов)
    'new-cap': [ERROR, {
      'capIsNewExceptions': [
        'SortableContainer',
        'SortableElement',
        'List',
        'Map',
        'Set',
      ],
    }],
    // сортировка пропсов в компонентах
    'react/jsx-sort-props': [
      ERROR,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    // порядок методов в компоненте
    'react/sort-comp': [
      ERROR,
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^(get|set).+$/',
          '/^handle.+$/',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'constructor',
            'statics',
            'contextTypes',
            'childContextTypes',
            'state',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    // сортировка объявлений пропсов в компоненте
    'react/sort-prop-types': [
      ERROR,
      {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    // расположение скобок у объектов
    'object-curly-newline': [ERROR, {
      'ObjectPattern': { 'consistent': true },
      'ObjectExpression': { 'consistent': true },
    }],
    // порядок импортов
    'import/order': [
      ERROR,
      {
        alphabetize: { order: 'asc', caseInsensitive: false },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'unknown'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: [''],
        pathGroups: [
          {
            pattern: '+(react|react-dom|react-router-dom|react-redux|@reduxjs/toolkit|react-custom-scrollbars|styled-components|react-tooltip|react-hook-form)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'styled-components/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '+(common|constants|hooks|helpers)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '+(pages|layouts)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '+(api|store|models|modules)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './*.+(less|css|svg)',
            group: 'sibling',
            position: 'after',
          },
        ],
      },
    ],
  },

  overrides: []
};
