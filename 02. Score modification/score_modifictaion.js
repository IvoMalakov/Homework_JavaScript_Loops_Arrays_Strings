"use strict";

function findValidExamScores(array, min ,max) {
    var validScorec = [];

    for (var i = 0; i < array.length; i++) {
        if ((array[i] >= min) && (array[i] <= max)) {
            validScorec.push(array[i]);
        }
    }

    return validScorec;
}

function removing20Percent(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] -= (array[i] * 0.2);
    }
    return array;
}

function reverseSort(array) {
    array.sort(function(a, b) {
        return a > b;
    });

    return array;
}

var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1],
    validExamScores = findValidExamScores(input, 0, 400),
    removedScores = removing20Percent(validExamScores),
    sortedScores = reverseSort(removedScores),
    output = "[" + sortedScores.join(", ") + "]";

document.getElementById("result").innerHTML = output;