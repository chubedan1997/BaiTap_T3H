// số nguyên tố
const inPut = document.querySelector(".btn-number");
const subMit = document.querySelector(".submit");
const outPut = document.querySelector(".btn-prime");

subMit.addEventListener("click", () => {
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


// phần arr
//  tổng tất cả con số trong mảng
const inPut22 = document.querySelector(".btn-number22");
const subMit22 = document.querySelector(".subMit22");
const outPut22 = document.querySelector(".btn-prime22");

subMit22.addEventListener("click", () => {
 let x = inPut22.value
 let array = x.split(" ")
 let sum = 0
 for(let i = 0 ; i < array.length ; i++ ){ 
   let number = Number(array[i])
   sum += number
}
 outPut22.innerHTML =`tổng của tất cả các số trong mảng là : ${sum}`
})

// tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng 
const inPut23 = document.querySelector(".btn-number23");
const subMit23 = document.querySelector(".subMit23");
const outPut23 = document.querySelector(".btn-prime23");

subMit23.addEventListener("click", () => {
 let x = inPut23.value
 let array = x.split(" ")
 let sum = 0
 let TB = 0
 for(let i = 0 ; i < array.length ; i++ ){ 
  let number = Number(array[i])
  sum += number
}
  TB  = sum / array.length
  let max = Math.max.apply(Math, array); 
  let min = Math.min.apply(Math, array);

 outPut23.innerHTML =`max,min,trung bình lần lượt là :${max}, ${min} , ${TB}`
})


// tìm tần suất xuất hiện
const inPut24 = document.querySelector(".btn-number24");
const subMit24 = document.querySelector(".subMit24");
const outPut24 = document.querySelector(".btn-prime24");

subMit24.addEventListener("click", () => {
 let x = inPut24.value
 let array = x.split(" ")
 const SS = array.sort()
 let dem = 1
 let max = 0
    for(let i = 0 ; i < SS.length ; i++ ){ 
      if( SS[i] === SS[i+1] ) {
        dem++
        if(dem > max ) {
          max = dem
          outPut24.innerHTML =`Tần suất xuất hiện nhiều nhất của ${SS[i]} là : ${max} lần`
         }
      } else {dem = 1}
    }
})

// tìm số nguyên tố trong mảng
const inPut25 = document.querySelector(".btn-number25");
const subMit25 = document.querySelector(".subMit25");
const outPut25 = document.querySelector(".btn-prime25");

subMit25.addEventListener("click",() => {
 let x = inPut25.value
 let arr = x.split(" ")
function check(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

result = arr.filter((number) => {
  return check(number);
});
  
  outPut25.innerHTML=`số nguyên tố trong mảng là : ${result}`
})

// bình phương số trong mảng 
const inPut26 = document.querySelector(".btn-number26");
const subMit26 = document.querySelector(".subMit26");
const outPut26 = document.querySelector(".btn-prime26");

subMit26.addEventListener("click", () => {
  let x = inPut26.value
  let arr = x.split(" ")
  console.log(arr);

  let bp = arr.map((number) => {
    return Math.pow(number,2)
  })
  outPut26.innerHTML=bp
})

// tìm số gần vs vị trí k
const inPut27 = document.querySelector(".btn-number27");
const inPutVt = document.querySelector(".btn-vt");
const subMit27 = document.querySelector(".subMit27");
const outPut27 = document.querySelector(".btn-prime27");

subMit27.addEventListener("click", () => {
  let x = inPut27.value
  let y = Number(inPutVt.value)
  let arr = x.split(" ")
  let newArr = []
  for(let i = 0 ;i< arr.length ; i++) {
    let numBer = Number(arr[i])
    if(numBer + 1 === y || numBer - 1 === y) {
      newArr.push(numBer)
    } else outPut27.innerHTML=`không có số nào gần vị trí ${y}`
  }
  outPut27.innerHTML = `vị trí ${newArr} gần với ${y} nhất`
})

// đưa tên và họ về chuẩn tên với ký tự đầu tiên
const subMit28 = document.querySelector(".subMit28");
const outPut28 = document.querySelector(".btn-prime28");
subMit28.addEventListener("click", () => {
  let students = [
    {
      id: "T3HXX1",
      firstName: "NgAN",
      lastName: "Duong Thuy",
    },
    {
      id: "T3HXX2",
      firstName: "Ha",
      lastName: "Do Thi Thu",
    },
    {
      id: "T3HXX5",
      firstName: "Minh",
      lastName: "Nguyen Nhat",
    },
    {
      id: "T3HXX6",
      firstName: "Minh",
      lastName: "Do Nguyen Nhat",
    },
  ];
  
  for(let i = 0 ;i < students.length ; i++) {
    if( students[i].firstName.length >= 3 && students[i].firstName.includes("a") || students[i].firstName.includes("A")) {
         students[i].firstName = students[i].firstName.slice(0,1) + students[i].firstName.slice(1).toLowerCase()
        students[i].lastName = students[i].lastName
        outPut28.innerHTML = JSON.stringify(students[i])
      }
    }
 
})

console.log('123');


// tìm học sinh có họ đỗ
const subMit29 = document.querySelector(".subMit29");
const outPut29 = document.querySelector(".btn-prime29");
subMit29.addEventListener("click",() => {
  let students = [
    {
      id: "T3HXX1",
      firstName: "NgAN",
      lastName: "Duong Thuy",
    },
    {
      id: "T3HXX2",
      firstName: "Ha",
      lastName: "Do Thi Thu",
    },
    {
      id: "T3HXX5",
      firstName: "Minh",
      lastName: "Nguyen Nhat",
    },
    {
      id: "T3HXX6",
      firstName: "Minh",
      lastName: "Do Nguyen Nhat",
    },
  ];
  var result = students.filter( (person) => {
   return person.lastName.startsWith("Do") 
    
  })
  outPut29.innerHTML = JSON.stringify(result)
      
})