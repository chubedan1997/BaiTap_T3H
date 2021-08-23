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
  let x = inPut13.value
  let del_x = x.replace(/\s+/g, '')
  outPut13.innerHTML=`${del_x}`
});

// chuỗi đảo ngược
const inPut14 = document.querySelector(".btn-number14");
const subMit14 = document.querySelector(".subMit14");
const outPut14 = document.querySelector(".btn-prime14");

subMit14.addEventListener("click", () => {
  let x = inPut14.value
  let dao= ""
  for(let i = x.length -1 ; i >= 0 ; i--) {
     dao += x[i]
  }
  outPut14.innerHTML=`${dao}`
});

// tìm thứ tự trong chuỗi
const inPut15 = document.querySelector(".btn-number15");
const subMit15 = document.querySelector(".subMit15");
const outPut15 = document.querySelector(".btn-prime15");
const inPutX = document.querySelector(".btn-numberX");

subMit15.addEventListener("click", () => {
  let x = inPut15.value
  let y = inPutX.value
  let arr = x.split(" ")
  // let arr2 = y.split(" ")

        const z = arr.indexOf(y)
        console.log(z);
        outPut15.innerHTML = `vị trí thứ ${z + 1 }`

  // for (let i = 0 ; i < arr.length  ; i++) {
  //   for(let j = 0 ; j < arr2.length ; j++) {
  //     console.log("arr :",arr[i] , "arr2 :",arr2[j]);

  //     if ( arr[i] == arr2[j] ) {
        
  //      }
  //      // else {
  //     //   outPut15.innerHTML= " không tìm thấy " 
  //     //  }

  //   }
   
  // }
 
})


// chuẩn hóa họ tên
const inPut16 = document.querySelector(".btn-number16");
const subMit16 = document.querySelector(".subMit16");
const outPut16 = document.querySelector(".btn-prime16");

subMit16.addEventListener("click", () => {
  let x = inPut16.value
  let str = x.toLowerCase().replace(/(^|\s)\S/g, function(uppercase) { return uppercase.toUpperCase() }); 
  outPut16.innerHTML = `${str}`
})

// lấy ID
// const inPut17 = document.querySelector(".btn-number17");
// const subMit17 = document.querySelector(".subMit17");
// const outPut17 = document.querySelector(".btn-prime17");

// subMit17.addEventListener("click", () => {
//   let x = inPut17.value
//   const pram = new URLSearchParams()
//   console.log(pram);
//   console.log(x);
// })

// tìm min max của 3 số 
const inPut18 = document.querySelector(".btn-number18");
const subMit18 = document.querySelector(".subMit18");
const outPut18 = document.querySelector(".btn-prime18");

subMit18.addEventListener("click", () => {
  let x = inPut18.value
  let arr = x.split(" ")
  let max = Math.max.apply(Math, arr); 
  let min = Math.min.apply(Math, arr);

 outPut18.innerHTML =`max của 3 số là ${max} min của 3 số là ${min}`
})

//  xóa khoảng trăng đầu và cuối chuỗi
const inPut21 = document.querySelector(".btn-number21");
const subMit21 = document.querySelector(".subMit21");
const outPut21 = document.querySelector(".btn-prime21");

subMit21.addEventListener("click", () => {
 let x = inPut21.value
 let newStr = x.trim()
 outPut18.innerHTML =`${newStr}`
})