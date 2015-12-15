function sum_numbers(numbers) {
    var count = 0;
    var sum = [];
    var comparison = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == comparison) {
            count++;
        } else {
            sum.push(count+"");
            sum.push(comparison);
            count = 1;
        }

        if (i == numbers.length -1) {
            sum.push(count+"");
            sum.push(numbers[i]);
        }
        comparison = numbers[i];
    }
    return sum.join("");
}

var num = "3113322113";
for (var i = 0; i < 50; i++) {
    num = sum_numbers(num);
}
console.log(num.length);
