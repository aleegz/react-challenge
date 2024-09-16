# React Code Challenge

## Iniciar

Forkea este proyecto e instalá sus dependencias con `npm install`

Realizá todos los cambios que consideres y cuando lo tengas listo realizá un Pull Request al proyecto original.

Al finalizar escribinos un email con tus datos a pbotta@antsolutions.com.ar  y te contactaremos a la brevedad con nuestros comentarios. 

## Consignas

1- Implementar en services/movies.js llamada a la API de peliculas para buscar por título utilizando fetch. Se espera que sea un modulo que exporte un objeto con funciones que llamen a la API.

2- Desarrollar 3 componentes:

- A- SearchMovies: Permitirá el ingreso de un posible título en un input[text] (parámetro para la API) y un año en un campo input[number] en dónde se usará para filtrar las películas (post query) que sean anteriores a ese año. Ejemplo: "Matrix" y "2020" debería mostrar las 3 primeras películas de Matrix unicamente. El componente tendrá un botón que dispare la búsqueda.
   
- B- MovieList: Mostrará en una lista los resultados de la búsqueda realizada en SearchMovies y por cada item mostrará un botón "Agregar a mi lista" o "Quitar de mi lista" según corresponda. Utilizará el context para saber si la película está en la lista y el método "setMovies" del reducer del context para agregarlas.

- C- WatchList: Este componente mostrará un listado de las películas que están en la lista del usuario.

Diseño orientativo (utilizar flexbox):

![diseño orientativo](https://github.com/movilizame/movilizame-react-code-challenge/blob/main/design.png?raw=true)


BONUS:

1- Migrar de contex de React a react-redux

2- Utilizar TailwindCSS para darle estilos


## Consideraciones

Todo el código debe escribirse usando React Hooks y código funcional.

Se valorará el código limpio y ordenado. Utilización de buenas prácticas.

Los bonus son opcionales.

## Bibliografía sugerida

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://beta.reactjs.org/learn/describing-the-ui

https://beta.reactjs.org/learn/updating-objects-in-state

https://beta.reactjs.org/learn/updating-arrays-in-state

https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context

Bonus: 

https://react-redux.js.org/introduction/getting-started

https://tailwindcss.com/docs/guides/create-react-app