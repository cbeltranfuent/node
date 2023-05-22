# estudios
# estudios

.
# BABEL
La primera línea instala el comando Babel, la API principal y el preset de transpilación que usarás. Hoy en día, env es el preset principal de babel y contiene instrucciones para transpilar todas las funcionalidades presentes en el lenguaje. Mientras que @babel/polyfill y core-js, instala una colección de polyfills para ser incorporados al código publicado a los navegadores. Un polyfill es un código escrito en ES5 que rellena partes de la API que han sido modificadas como parte de ES6, pero que aún no han sido implementadas por todos los navegadores.

`
npm init -y
`

`
    npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill
    npm i core-js
`

`
    npx babel src/ -d dist/  

`

`
    Crear le archivo babel.config.json en la Raiz
    {
        "presets": [
        [
            "@babel/env",
            {
                "targets": {
                "edge": "17",
                "firefox": "60",
                "chrome": "67",
                "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.4",
                "forceAllTransforms": true
    } ]
    ] }
`

`
    npx babel src/ -d dist/ --config-file ./babel.config.json
.
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.5",
                "forceAllTransforms": true
            }
        ]
    ]
}