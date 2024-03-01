# ToDo list

## Directory Structure

```
src
├── index.tsx
├── App.tsx
├── components
│   ├── Item
│   ├── ItemForm
│   ├── List
│   └── Toggle
├── hooks
│   └── useToggle.ts
└── store
    ├── index.ts
    └── todoSlice.ts
```

## Build Dependency

node.js v20.11.1

## 빌드 & 실행 방법

```shell
npm install

npm run build
or
npm run start
```

## 주요 스펙

- react v18
- typeScript
- redux-toolkit
- redux-persist
- styled-components
- eslint & prettier

## 주요 기능

- ToDo 작성
- ToDo 완료 토글
- ToDo 제거
- ToDo 리스트 데이터 유지 (redux-persist, 로컬 스토리지)
