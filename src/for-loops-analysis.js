/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Viren Sajju Dhanwani Dhanwani
 * @date 2021/03/10
 * @brief Time analysis with four different 'for loops' variants for arrays:
 *  for (let i = 0; i < arr.length; ++i)
 *  arr.forEach((v, i) => { ... })
 *  arr.every((i) => { ... })
 *  for (const v of arr)
 * @see https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript
 */

'use strict';
const { performance } = require('perf_hooks'); // performance.now()
const ARRAY_LENGTH = 40000000;
let array = Array.from({ length: ARRAY_LENGTH }, () => Math.floor(Math.random() * 1000000));

/**
 * Computes the fourth power of a number
 * @param {Number} element
 * @return {Number} result of the fourth power
 */
const powFour = (element) => {
  let result = Math.pow(element, 4);
  return result;
}

/**
 * Analysis of the classic for loop
 */
console.log('Classic for:');
let t0 = performance.now();
for (let i = 0; i < ARRAY_LENGTH; i++) {
  powFour(array[i]);
}
let t1 = performance.now();
let time = t1 - t0;
console.log(time + ' milisegundos');

/**
 * Analysis of the forEach() for iterating
 */
t0 = performance.now();
console.log('For each:');
array.forEach((element) => powFour(element));
t1 = performance.now();
time = t1 - t0;
console.log(time + ' milisegundos');

/**
 * Analysis of the every() method for iterating
 */
t0 = performance.now();
console.log('Every:');
array.every((i) => powFour(array[i]) >= 0);
t1 = performance.now();
time = t1 - t0;
console.log(time + ' milisegundos');

/**
 * Analysis of the 'for ... of ...' loop
 */
t0 = performance.now();
console.log('For of:');
for (const element of array) {
  powFour(element);
}
t1 = performance.now();
time = t1 - t0;
console.log(time + ' milisegundos');

/**
 * Analysis of the 'for ... in ...' for iterating (intended for objects)
 */
 t0 = performance.now();
 console.log('For in:');
 for (const element in array) {
   powFour(element);
 }
 t1 = performance.now();
 time = t1 - t0;
 console.log(time + ' milisegundos');

