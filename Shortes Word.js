function findShort(s) {
    let str = s.split(' '),
        arr = [],
        sWord = 0;
    for (var i = 0; i < str.length; ++i) {
        arr = str[i];
        if (sWord == 0 || arr.length < sWord) {
            sWord = arr.length;
        };
    };
    return sWord;
};