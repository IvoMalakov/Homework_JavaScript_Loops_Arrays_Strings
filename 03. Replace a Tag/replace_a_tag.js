"use strict";

function replaceATag(str) {
    var re = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
    return str.replace(re, '[URL $1]$2[/URL]');
}

var input = '<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>',
    output = replaceATag(input);

document.getElementById("input").innerHTML = "Input: " + input;
document.getElementById("result").innerHTML ="Output: " + output;