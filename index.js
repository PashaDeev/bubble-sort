
const bubbleSort = arr => {
  const length = arr.length;
  let i = 0;
  let j = 0;

  // берем каждый элемент массива
  for (i; i < length; i++) {
    // Сравниваем со всеми остальными
    for (j; j < length; j++) {
      // Если текущий больше следующего, то переставляем местами
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
