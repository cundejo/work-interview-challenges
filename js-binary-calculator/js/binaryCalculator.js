const res = document.getElementById("res");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");

const writableItems = Object.values(document.getElementsByClassName('btnItem'));

writableItems.forEach(item => {
  item.addEventListener("click", event => {
    res.innerHTML = res.innerHTML + event.currentTarget.innerHTML;
  });
});

btnClr.addEventListener("click", event => {
  res.innerHTML = '';
});

const decToBin = (number) => (number >>> 0).toString(2);

const binToDec = (number) => parseInt(number, 2);

btnEql.addEventListener("click", event => {
  const text = res.innerHTML;

  let resultDec;

  if(text.includes('+')){
    const [bin1, bin2] = text.split('+');
    resultDec = binToDec(bin1) + binToDec(bin2);
  }

  if(text.includes('-')){
    const [bin1, bin2] = text.split('-');
    resultDec = binToDec(bin1) - binToDec(bin2);
  }

  if(text.includes('*')){
    const [bin1, bin2] = text.split('*');
    resultDec = binToDec(bin1) * binToDec(bin2);
  }

  if(text.includes('/')){
    const [bin1, bin2] = text.split('/');
    resultDec = binToDec(bin1) / binToDec(bin2);
  }

  res.innerHTML = decToBin(resultDec);
});
