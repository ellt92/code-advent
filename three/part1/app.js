var directions = [];
var sum = 1;
var coord = (0, 0);
//TODO should coord be deep copied?
var visited = [coord];

for(var direction in directions) {

    switch (direction) {
        case '^':
            coord[1]++;
            break;
        case 'v':
            coord[1]--;
            break;
        case '>':
            coord[0]++;
            break;
        case '<':
            coord[0]--;
            break;
    }

    var should_count = true;
    for (var v in visited) {
        if (coord == visited)
            should_count = false;
    }
    if (should_count)
        sum++;
    else
        visited.push(coord);
}

console.log(sum);
