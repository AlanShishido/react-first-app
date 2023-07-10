# React First App

Practicing about react front end development

## Requires:
* [Install Node](https://nodejs.org/)
* [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
* [Install create-react-app](https://create-react-app.dev/docs/getting-started/)

## First Steps:

* Create Project: ``$ create-react-app [react-project-name] --template=typescript``
1. Deleting archives:
    - README.md
    - src/*.css
2. Modify Dependeces
3. On cmd: ``$ yarn start``

## Development:

### Creating Routes

1. Install Router in project:
```
$ yarn react-router-dom
$ yarn @types/react-router-dom -D
```
2. create path and archive: `src/routes/index.tsx`
3. create path: `src/pages/`

### Using Styled Components
1. Install Styled Components to project:
```
$ yarn add styled-components
$ yarn add @types/styled-components -D
```
2. create path and archive: `src/styles/global.ts`

### Styling Dashboard
1. Install Polish:
```
$ yarn add polished
```
2. Install React Icons: 
```
$ yarn add react-icons
```

### Connecting to API
1. create path and archive: `src/services/client.ts` ou `src/services/api.ts`
2. install axios:

```
$ yarn add axios
$ yarn add @types/axios -D
```

### Exceptions
1. Using conditional to html
```
{ inputError && <Error>{inputError}</Error> }
```

2. Using conditional to css
```
form {
    border-color: #fff
    ${(props) => props.hasError && css`
                border-color: #c53030;
            `}
}
```

### Local Storage
1. Import `useEffect`
2. Using localstorage
```
localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
```

### Browsing between routes
1. Import `Link`
2. Updating to React Router DOM v6

### Styling Repository
1. Creating archive to HTML and styles.ts

### Connecting to API
1. client and linking data
