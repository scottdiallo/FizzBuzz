$('document').ready(function () {
    for (var i = 0; i <= 100; i++) {
        var f = i % 3 == 0,
            b = i % 5 == 0;
        console.log(f ? b ? 'fizzBuzz' : 'Fizz' : b ? 'buzz' : i);
    }
});
