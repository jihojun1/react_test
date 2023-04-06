
function one() {
  console.log('-------- Start -------');
  const result = 100;
  console.log(`Result: ${result}`);
  console.log('-------- End -------');
}
// one();

let result = 0;
function two() {
  console.log('-------- Start -------');

  setTimeout(() => {
    result = 100;
    // console.log(`Result: ${result}`);
  }, 2000)
  
  console.log('-------- End -------');
}
// two();
// console.log(`Result: ${result}`);


function three(callback, x) {
  console.log('-------- Start -------');

  setTimeout(() => {
    result = 100;

    setTimeout(() => {
      const value =  result + 100;
      callback(result)
    }, 2000 + result)
  }, 2000)
  
  console.log('-------- End -------');
}

// three( (x) => console.log(x), 'ABC' );


function four(ms) {
  console.log('-------- Start -------');

  const promise = new Promise( (resolve, reject) => {
    if(ms < 1000) reject(new Error('시간이 너무 짧습니다'))    // () => { console.log('reject 함수 실행')

    setTimeout(() => {
      const result = 3000;
      resolve(result);
    }, ms)
  });

  console.log('-------- End -------');

  return promise
}
four(2000)
  // resolve에 전달되는 익명함수
  .then( (data) => { 
    console.log(data);

    // 여기서 시간걸리는 작업이나 일차 처리 결과를 return하면 다음 then이 받아 처리한다
    return four(3000);
  })
  .then( (data) => {
    console.log(data);
    return data + 5000;
  })     
  .then( (data) => {
    console.log(data)
  })
  // reject에 전달되는 익명함수
  .catch( (err) => { console.log(err) } )      


console.log('-------- 프로그램 종료 -------');