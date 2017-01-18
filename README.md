# async-await-transpilation-example
Un pequeño ejemplo de cómo transpilar async/await a ES5 usando webpack y babel, con algunos ejemplos de cómo funciona async/await.

##setup
`yarn`

Entonces:

`npm run bundle`


##contenidos
Cuatro javascripts se generarán a `js/bin/` desde `js/src/`: contienen ejemplos sobre el funcionamiento de los callbacks,
las promesas y async/await. Además, hay cuatro páginas html en `/html/` que demuestran como diferentes formas de consumir
funciones síncronas o asíncronas interactúan con las animaciones de javascript: aunque el código precedido por `await` se
comporte como si fuera código bloqueante, se puede ver cómo no bloquea las animaciones.


