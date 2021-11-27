function descendingOrder(n){
  let order = n
  .toString() // конвертируем в строку.
  .split('') // разделяем числа отдельно в массиве
  .sort((a, b) => b - a) // сортируем
  .join('') // переводим обратно в строку 
  return parseInt(order) // строку переводим в числа
}