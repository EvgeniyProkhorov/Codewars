function century(year) {
    let cent = 100;
    let time = year / cent;
    if (year <= cent) {
        return 1;
    } else if (time > Math.round(time)) {
        return Math.round(time) + 1;
    } else if (year > cent) {
        return Math.round(time);
    }
}