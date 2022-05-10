# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @markjust1/lotide`

**Require it:**

`const _ = require('@markjust1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns first element in the array
* `tail()`: returns all the elements in the array except the first one
* `middle()`: returns middle element in the array (one element if array length is odd, two - if length is even)
* `map()`: returns first letter of each element in the array
* `without()`: checks two arrays and returns any difference in elements
* `takeUntil()`: loops through the array and returns the value up to the stop parameter
* `letterPositions()`: returns the object  with number of occurences of each letter in a given string
* `flatten()`: removes any sub-arrays in the array and returns value
* `findKeyByValue)`: checks the values in the object by given value and returns corresponding key
* `findKey()`: checks the values in the object by given key and returns corresponding value
* `eqObjects()`: checks if two objects are equal
* `eqArrays()`: checks if two arrays are equal
* `countOnly()`: counts the number of item occurences in an array
* `countLetters()`: counts how many times each letter appers in a array