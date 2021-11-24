function solution(a, b)  {
    return a.length < b.length ? a + b + a : b + a + b
}
solution("1", "22")