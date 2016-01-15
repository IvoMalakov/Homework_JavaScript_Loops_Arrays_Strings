'use strict';

function array_manipulator(array) {
    var numbers = [];
    for (var i = 0; i < array.length; i++) {
        var element = Number(array[i]);

        if (!isNaN(element)) {
            numbers.push(array[i]);
        }
    }
    return numbers;
}

function reverseSort(array) {
    array.sort(function(a, b) {
        return a < b;
    });
    return array;
}

function findMostFrequentNumber(array) {
    var mostFreqNumb = array[0],
        currentSection = 1,
        longestSection = 1,
        size = array.length;

    for (var i = 0; i < size - 1; i++) {
        if (array[i] === array[i + 1]) {
            currentSection++;

            if (longestSection < currentSection) {
                longestSection = currentSection;
                mostFreqNumb = array[i];
            }
        } else {
            currentSection = 1;
        }
    }

    return mostFreqNumb;
}


var inputArray = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

var numberArray = array_manipulator(inputArray);


var reversedArray = reverseSort(numberArray);
var number_array_size = reversedArray.length;
var minNumber = reversedArray[number_array_size - 1];
var maxNumber = reversedArray[0];

document.getElementById("min-number").innerHTML = "Min number: " + minNumber;
document.getElementById("max-number").innerHTML = "Max number: " + maxNumber;

var mostFreqNumber = findMostFrequentNumber(reversedArray);

document.getElementById("most-frequent-number").innerHTML = "Most frequent number: " + mostFreqNumber;

var output = "[" + reversedArray.join(", ") + "]";

document.getElementById("reversed-array").innerHTML = output;