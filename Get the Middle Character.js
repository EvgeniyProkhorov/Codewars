function getMiddle(s) {
    let middleChar = ''
    if (s.length % 2 === 0) {
        let b = s.length / 2 -1
        middleChar += s.charAt(b)
        middleChar += s.charAt(b + 1)

    } else if (s.length % 2 !== 0) {
        let c = Math.round(s.length / 2 -1)
        middleChar += s.charAt(c)
    }
    return middleChar
}