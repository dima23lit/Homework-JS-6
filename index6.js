// a
function a() {
    alert("Привет всем!")
  }
  a()
  

// cube
function cube(a){
    let result = Math.pow(a,3)
    return result
}
cube(5)
alert(result);
  
  
// avg2
function avg2(a,b) {
    let result = (Number(a) + Number(b))/2
    return result
}
avg2(1,2)
alert(result);
avg2(10,5)
alert(result);
  
  
// sum3
function sum3(a,b,c){
    let a = a||0;
    let b = b||0;
    let c = c||0;
    let result = Number(a) + Number(b) + Number(c)
    return result
}
sum3(1,2,3)
alert(result);
sum3(5,10,100500)
alert(result);
sum3(5,10)
alert(result);
  
  
// intRandom
function intRandom(a,b) {
    if (!b) {
      let result = Math.round(Math.random()*a)
      return  result
    } else {
      let result = Math.round(Math.random() * (a - b) + b)
    return result
}
}
intRandom(2,15)
alert(result)
intRandom(-1,-1)
alert(result)
intRandom(0,1)
alert(result)
intRandom(10)
alert(result)
  

// greetAll
function greetAll() {
    var sum = '';
    for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
}
alert( "Привет, " + sum);
}
greetAll("Superman")
greetAll("Superman",", Spiderman")
greetAll("Superman", ", SpiderMan", ", Captain Obvious")
  
  
// sum  
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    alert(sum);
}
sum(1)
sum(2)
sum(10,20,40,100)
  
  
//  union 
function aSample(){
    a("Привет!")
}
function cubeSample(){
    cube(5)
    alert(result);
}
function avg2Sample(){
    avg2(2,5)
    alert(result);
}
function sum3Sample(){
    sum3(1,2,3)
    alert(result);
} 
function intRandomSample(){
    intRandom(2,15)
    alert(result)
}
function greetAllSample(){
    greetAll("Superman")
}
function sumSample(){
    sum(10,20,30)
    alert(result);
}
var sample = prompt("Введите задание", '');
switch(sample.toLowerCase()){
    case "a":aSample()
    break;
    case "cube":cubeSample()
    break;
    case "avg2":avg2Sample()
    break;
    case "sum3":sum3Sample()
    break;
    case "intrandom":intRandomSample()
    break;
    case "greetall":greetAllSample()
    break;
    case "sum":sumSample()
    break;
    default:
    }
  

// Union declarative
var sample1 = {
    a: aSample,
    cube: cubeSample,
    avg2: avg2Sample,
    sum3: sum3Sample,
    intrandom: intRandomSample,
    greetall: greetAllSample,
    sum: sumSample
}

var sample2 = prompt("Number of Task");
var key = sample2;
obj = sample1[key];
obj(sampleA);