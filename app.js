$('document').ready(function () {
    $('#btn').on('click', function () {
        var itemValue = $('.itemValue').val();
        $('#displayResults').empty();
        for (var i = 1; i <= itemValue; i++) {
            var divisibleByThree = i % 3 == 0,
                divisibleByfive = i % 5 == 0;
            //            console.log(divisibleByThree ? divisibleByfive ? "FizzBuzz" : "Fizz" : divisibleByfive ? "Buzz" : i);
            var output = divisibleByThree ? divisibleByfive ? "FizzBuzz" : "Fizz" : divisibleByfive ? "Buzz" : i;
            $('#displayResults').append('<li>' + output + '</li>');

        }
    });
});
