let form = document.querySelector('form');

// modified the submit event to handle errors
form.addEventListener('submit', e => {
    try{getResult(e)}catch(error){
        console.log('Sadly an error happened my friend');
        console.error(error);
    };
});

function getResult(e){
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
}

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// log
errorBtns[0].addEventListener('click', ()=>{
    console.log('Console Log Demo');
})
// error
errorBtns[1].addEventListener('click', ()=>{
    console.error('Console Log Demo');
})
// count
errorBtns[2].addEventListener('click', ()=>{
    console.count('count button');
})
// warn
errorBtns[3].addEventListener('click', ()=>{
    console.warn('Console warn button');
})
// assert
errorBtns[4].addEventListener('click', ()=>{
    let number = 2;
    let reason = 'The number does not equal to 3';
    console.assert(number == 3, {number, reason});
})
// clear
errorBtns[5].addEventListener('click', ()=>{
    console.clear();
})
// dir
errorBtns[6].addEventListener('click', ()=>{
    console.dir(errorBtns[6]);
})
// dirxml
errorBtns[7].addEventListener('click', ()=>{
    console.dirxml(errorBtns[7]);
})
// group
errorBtns[8].addEventListener('click', ()=>{
    console.group('console.group');
})
// groupEnd
errorBtns[9].addEventListener('click', ()=>{
    console.groupEnd('console.group');
})
// table
errorBtns[10].addEventListener('click', ()=>{
    let cseClasses = [
        {
          name: 'Software Engineering',
          num: '110',
        },
        {
          name: 'Programming Languages: Principles and Paradigms',
          num: '130',        
        },
        {
          name: 'Advanced Software Engineering',
          num: '112',
        }
    ];
    console.table(cseClasses);
})
// time
errorBtns[11].addEventListener('click', ()=>{
    console.time();
})
// time end
errorBtns[12].addEventListener('click', ()=>{
    console.timeEnd();
})
// trace
errorBtns[13].addEventListener('click', handleBtnClick);
function handleBtnClick(){
    deep();
}
function deep(){
    deeper();
}
function deeper(){
    deepest();
}
function deepest(){
    console.trace();
}

// globale error
errorBtns[14].addEventListener('click', ()=>{
    // unhandled global error
    console.log(myError);
})


// step 3: Trying Try/Catch
function countBtnNum(num) {
    return new Promise((resolve, reject) => {
      if (num == 16) {
        resolve('Button count is correct');
      } else {
        reject(new Error('The number of buttons is incorrect'));
      }
    });
}
  
countBtnNum(errorBtns.length)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log('Error handling completed');
});

// step 4: Throw and Custom Errors
class myCustomError extends Error {
    constructor(message) {
      super(`Custom error - ${message}`); // (1)
      this.name = "myCustomError"; // (2)
    }
}
  
function test() {
    throw new myCustomError("test my error");
}
try {
    test();
} catch(err) {
    console.error(err);
}

// Step 5: The Global Error handler and 3rd Party Tracking
window.onerror = function(message, url, lineNumber) {
    console.error('An unhandled global error occurred:', message, url, lineNumber);
};
//TrackJS.track('Testing TrackJS!');
                        