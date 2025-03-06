function flip(array, n) {
    var tmp;
    if (array.length == 1 || array.length == 0) {return array;}
    if (n <= 0) {return array;}
    if (n > array.length) {n = array.length;}
    for (var i = 0; i < (n/2); i++) {
        tmp = array[i];
        array[i] = array[Math.floor(n-1-i)]
        array[Math.floor(n-1-i)] = tmp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (var j = 0; j < array.length; j++) {
        var tmpI = 0
        var tmpV = array[0];
        for (var i = 0; i < array.length-j; i ++) {
            if (array[tmpI] < array[i]) {
                tmpI = i;
                tmpV = array[i];
            }
        }
        flip(array, tmpI+1);
        flip(array, arr.length-j);
    }
    return array;
}
