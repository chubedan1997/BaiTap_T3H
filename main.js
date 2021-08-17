// số nguyên tố
const inPut = document.querySelector(".btn-number");
const subMit = document.querySelector(".submit");
const outPut = document.querySelector(".btn-prime");

subMit.addEventListener("click", () => {
  console.log(inPut.value);
  if (inPut.value < 2) {
    outPut.innerHTML = `${inPut.value} không phải số nguyên tố`;
  } else {
    let countPrime = 0;
    for (let i = 1; i <= inPut.value; i++) {
      if (inPut.value % i == 0) {
        countPrime++;
      }
    }
    if (countPrime === 2) {
      outPut.innerHTML = `${inPut.value} is PRIME`;
    } else {
      outPut.innerHTML = `${inPut.value} Not Prime`;
    }
  }
});

// số nguyên N và in n Số
const inPut2 = document.querySelector(".btn-number2");
const subMit2 = document.querySelector(".subMit2");
const outPut2 = document.querySelector(".btn-prime2");

subMit2.addEventListener("click", () => {
  for (let i = 1; i <= inPut2.value; i++) {
    // outPut2.innerHTML += "<li>" + i + "</li>"
    let node = document.createElement("li");
    let textnode = document.createTextNode(i);
    node.appendChild(textnode);
    outPut2.appendChild(node);
  }
});

// nhập n và in ra số lẻ của n
const inPut3 = document.querySelector(".btn-number3");
const subMit3 = document.querySelector(".subMit3");
const outPut3 = document.querySelector(".btn-prime3");

subMit3.addEventListener("click", () => {
  for (let i = 1; i <= inPut3.value; i++) {
    if (i % 2 == 1) {
      let e = document.createElement("li");
      let text = document.createTextNode(i);
      e.appendChild(text);
      outPut3.appendChild(e);
    }
  }
});
// nhập n và in ra số chẵn của n
const inPut4 = document.querySelector(".btn-number4");
const subMit4 = document.querySelector(".subMit4");
const outPut4 = document.querySelector(".btn-prime4");

subMit4.addEventListener("click", () => {
  for (let i = 1; i <= inPut4.value; i++) {
    if (i % 2 == 0) {
      let e = document.createElement("li");
      let text = document.createTextNode(i);
      e.appendChild(text);
      outPut4.appendChild(e);
    }
  }
});

// nhập n và in ra số nguyên tố từ 1-n
const inPut5 = document.querySelector(".btn-number5");
const subMit5 = document.querySelector(".subMit5");
const outPut5 = document.querySelector(".btn-prime5");

subMit5.addEventListener("click", () => {
  if (inPut5.value < 2) {
    outPut5.innerHTML = `không phải số nguyên tố nào `;
  } else {
    for (let i = 0; i <= inPut5.value; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count === 2) {
        let elm = document.createElement("li");
        let child = document.createTextNode(i);
        elm.appendChild(child);
        outPut5.appendChild(elm);
      }
    }
  }
});

// nhập n và in ra tổng từ 1-n
const inPut6 = document.querySelector(".btn-number6");
const subMit6 = document.querySelector(".subMit6");
const outPut6 = document.querySelector(".btn-prime6");

subMit6.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i <= inPut6.value; i++) {
    sum += i;
  }
  outPut6.innerHTML = `${sum}`;
});

// nhập n và in ra tổng bình phương từ 1-n
const inPut7 = document.querySelector(".btn-number7");
const subMit7 = document.querySelector(".subMit7");
const outPut7 = document.querySelector(".btn-prime7");

subMit7.addEventListener("click", () => {
  let sumSpuare = 0;
  for (let i = 1; i <= inPut7.value; i++) {
    sumSpuare += i * i;
  }
  outPut7.innerHTML = `${sumSpuare}`;
});
// nhập n và in ra tổng lẻ từ 1-n
const inPut8 = document.querySelector(".btn-number8");
const subMit8 = document.querySelector(".subMit8");
const outPut8 = document.querySelector(".btn-prime8");
subMit8.addEventListener("click", () => {
  let sumOdd = 0;
  for (let i = 1; i <= inPut8.value; i++) {
    if (i % 2 != 0) {
      sumOdd += i;
    }
  }
  outPut8.innerHTML = `${sumOdd}`;
});

// nhập n và in n có phải toàn số lẻ k
const inPut9 = document.querySelector(".btn-number9");
const subMit9 = document.querySelector(".subMit9");
const outPut9 = document.querySelector(".btn-prime9");

subMit9.addEventListener("click", () => {
  let a = String(inPut9.value);
  console.log("typeof :", typeof a);
  let odd = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    if (a.charAt(i) % 2 == 0) {
      odd++;
      console.log("odd :", odd);
    }
  }
  if (odd === 0) {
    outPut9.innerHTML = `${inPut9.value} là số toàn lẻ `;
  } else {
    outPut9.innerHTML = `${inPut9.value} không phải số toàn lẻ`;
  }
});

// nhập n và in n có phải số đối xứng k
const inPut10 = document.querySelector(".btn-number10");
const subMit10 = document.querySelector(".subMit10");
const outPut10 = document.querySelector(".btn-prime10");

subMit10.addEventListener("click", () => {
  let number = Number(inPut10.value);
  let x = number;
  let soDao = 0;
  while (number != 0) {
    let rem = number % 10;
    soDao = soDao * 10 + rem;
    number = Math.floor(number / 10);
  }
  if (soDao === x) {
    outPut10.innerHTML = `${inPut10.value} là số đối xứng`;
  } else {
    outPut10.innerHTML = `${inPut10.value} không là số đối xứng`;
  }
});

// bảng cửu chương
// const inPut5 = document.querySelector(".btn-number5");
const subMit11 = document.querySelector(".subMit11");
const outPut11 = document.querySelector(".btn-prime11");

subMit11.addEventListener("click", () => {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      let elm = document.createElement("p");
      let child = document.createTextNode(`${i} x ${j} = ${i * j}`);
      elm.appendChild(child);
      outPut11.appendChild(elm);
    }
  }
});

// làm việc với chuỗi

// tìm có bao nhiêu khoảng cách
const inPut12 = document.querySelector(".btn-number12");
const subMit12 = document.querySelector(".subMit12");
const outPut12 = document.querySelector(".btn-prime12");

subMit12.addEventListener("click", () => {
  const x = inPut12.value;
  let count = 0;
  for(let k = 0 ; k <= x.length-1 ; k++){
    if(x.charAt(k) == " "){
      count++
    }
  }
  outPut12.innerHTML = `có ${count} khoảng cách`;
});

// xóa khoảng cách
const inPut13 = document.querySelector(".btn-number13");
const subMit13 = document.querySelector(".subMit13");
const outPut13 = document.querySelector(".btn-prime13");

subMit13.addEventListener("click", () => {
  console.log(typeof (inPut13.value));
  let x = inPut13.value
  // for(let i = 0 ; i <= x.length -1 ;i++)
  let del_x = Str.replace(/\s+/g, '')
  console.log("del :" ,del_x);
  // outPut13.innerHTML=del_x
  // const x = inPut12.value;
  // const y = String(x);
  // let count = 0;
  // for(let k = 0 ; k <= y.length-1 ; k++){
  //   if(y.charAt(k) == " "){
  //     count++
  //   }
  // }
  // outPut12.innerHTML = `có ${count} khoảng cách`;
});
