$('document').ready(function () {
    for (var i = 0; i <= 100; i++) {
        var divisibleByThree = i % 3 == 0,
            divisibleByfive = i % 5 == 0
        console.log(divisibleByThree ? divisibleByfive ? "FizzBuzz" : "Fizz" : divisibleByfive ? "Buzz" : i);
    }
});
