angular.module('myfilters', [])
.filter("brackets", function () {
    return function (input) {
        return "[" + input + "]";
    }
}
).filter("mytime", function () {
    return function (input) {
        return input.getHours() + ":" + input.getMinutes() + ":" + input.getSeconds();

    }
})
.filter("mydate", function () {
    // takes input and optional separator 
    return function (input, sep) {
        if (!sep)
            sep = "-"; // default separator
        return input.getDay() + sep + (input.getMonth() + 1) + sep + input.getFullYear();
    }
}
);
