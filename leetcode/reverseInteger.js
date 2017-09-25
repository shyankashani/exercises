var reverse = function(x) {

  if (x > 9 || x < -9) {
    let i;
    let j;

    if (x < -9) { i = 1; } else { i = 0; }
    x = x.toString().split('');
    j = x.length - 1;



    while (i < j) {
      console.log(x[i], x[j])
      let temp = x[i];
      x[i] = x[j];
      x[j] = temp;
      console.log(x[i], x[j])
      i++;
      j--;
    }

    x = Number(x.join(''));
  }

  if (x > 2147483647 || x < -2147483647) { return 0; }

  return x;

};


reverse(123);
