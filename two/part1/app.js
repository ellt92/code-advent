var fs = require('fs');

function calculateArea(l, w, h) {
    var lowest = Number.MAX_VALUE;
    var curr_sum = 0;
    var addArea = function(area) {
        curr_sum += area;
        if (area < lowest)
            lowest = area;
    };
    addArea(2*l*w);
    addArea(2*w*h);
    addArea(2*h*l);
    curr_sum += (lowest / 2);
    return curr_sum;
}

var sum = 0;
fs.readFile('./input.txt', 'utf8',
    function(err, data) {
        var dimensions = data.split('\n');
        dimensions.pop();
        for (var i = 0; i < dimensions.length; i++) {
            var dimension = dimensions[i].split('x');
            sum += calculateArea(parseInt(dimension[0]), parseInt(dimension[1]), parseInt(dimension[2]));
        }
        console.log(sum);
    }
);
