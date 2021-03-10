- [Looping an array analysis](#looping-an-array-analysis)
  - [Objetivo](#objetivo)
  - [Resultados](#resultados)
  - [Conclusiones](#conclusiones)
# Looping an array analysis
## Objetivo
El objetivo de esta investigación es analizar los tiempos que tardan las distintas formas de recorrer un vector (`Array`) en JavaScript. Se ha utilizado para ello cuatro maneras distintas:
- for clásico
``` js
for (let i = 0; i < array.length; i++) {
  ...
}
```
- forEach()
``` js
array.forEach(...);
```
- every()
``` js
array.every(...);
```
- for of
``` js
for (const element of array) {
  ...
}
```
Es importante destacar que el [método `every`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every) solo se utiliza para comprobar que cada elemento de un vector cumple una condición determinada.
## Resultados
Tras hacer el análisis utilizando el método <i>[performance.now()](https://developer.mozilla.org/es/docs/Web/API/Performance/now)</i>, se obtuvieron los siguientes resultados ejecutando en NodeJS, Google Chrome, Firefox y Microsoft Edge el código disponible en el [directorio `src`](/src/for-loops-analysis.js) (resultados en milisegundos):
|   | for clásico | forEach()  | every()  | for of  |
|---|---|---|---|---|
| NodeJS  | 587.02  | 1822.13  | 0.23  | 1917.05  |
| Chrome  | 90.76  | 704.4  | 0.05  | 704.4  |
| Edge  | 86.17  | 667.18  | 0.04  | 667.18  |
| Firefox  | 170  | 787  | 0  | 787  |

Cabe destacar que Firefox devuelve los resultados redondeados, y que los tests se hicieron con un array de tamaño 100.000.000, a los cuales se les realizaba una operación por cada elemento (en concreto elevar el número a la potencia 4). En el caso del `every` simplemente se comprobaba si la potencia 4 de cada elemento era no negativa (`powFour(array[i]) >= 0`) 

Los números se generaban de manera aleatoria del 0 al 1.000.000 y se realizaron las pruebas numerosas veces para comprobar que eran resultados consistentes. Se puede probar el código libremente en el [repositorio correspondiente](https://github.com/alu0101230948/for-loops-analysis-js).

## Conclusiones
Si bien había variaciones entre los tiempos de ejecución (sobre todo porque estamos trabajando sobre un vector que se llena aleatoriamente), se ve de manera consistente que el método `every()` es el que mejor rendimiento ofrece a la hora de iterar sobre un vector, pero está muy limitado por la característica de que devuelve un valor booleano, por lo que es útil únicamente si se quiere comprobar que cada elemento del vector cumple una condición.

El segundo mejor bucle es el for clásico, que en todas las pruebas siempre quedaba segundo de manera consistente. Por último, forEach() y for of ofrecen prácticamente los mismos resultados, sobre todo en navegador, y en NodeJS la diferencia es de ~95 milisegundos, lo cual podría ser significativo en tamaños mayores, pero en estas pruebas no podemos apreciarlo. 

En cuanto a los entornos de ejecución, los navegadores ofrecen mejores resultados que NodeJS, con diferencias significativas en los tiempos. Esto puede deberse a múltiples factores, y uno de ellos puede ser que NodeJS tiene (problemas de rendimiento)[https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/] cuando se realizan operaciones matemáticas complejas. 
