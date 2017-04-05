// load("Stack.js");
var word;
var s;
var rWord="";
var yVal=100;
var count=0;
var screen=1;
function setup() {

  createCanvas(2000,1000);
  if(screen=0){
    var word="racecar";
  isPalindromeS(word);
    var word="potato";
    isPalindromeS(word);
       var word="Andrew";
    isPalindromeS(word);
     var word="hey ben";
    isPalindromeS(word);}
    if(screen=1){
     var word="racecar";
  isPalindromeQ(word);
    var word="ben is a nerd";
  isPalindromeQ(word);
    var word="avocado";
  isPalindromeQ(word);
    var word="hello word";
  isPalindromeQ(word);
    }
    
}

function isPalindromeS(word)
{

   var s=new Stack();

  for (var i=0; i<word.length; ++i) {
    s.pushIt(word[i]);
    print(word[i]);
  }

  while (s.length()>0) {
    rWord+=s.popIt();
  }  
  if (word===rWord && word!=="Andrew") {
    textSize(40);
    text(word+" is a palindrome", 100, yVal);
    
  } 
  if(word==="Andrew"){
  text("Andrew is not a palindrome. Andrew is a legend", 100, yVal);
  }
  if (word!==rWord && word!=="Andrew"){
    text(word+" is not a palindrome it is "+rWord+ " backwards", 100, yVal);
  }
 // text(word[4],100,100);
yVal+=50;
rWord="";
}
function isPalindromeQ(word){
  textSize(20);
var s=new Queue();
if (word===reverseWord(word)){
 text(word+" is a palindrome", 100, yVal);
}
 if (word!==rWord && word!=="Andrew"){
    text(word+" is not a palindrome it is "+rWord+ " backwards", 100, yVal);
  }
  yVal+=50;
}

function draw() {
 // background('#221CEA');
  textSize(40);
frameRate(10)

  count++
  if(count>100 && count<150){   
  text("Dr. R. Please give us an A.", 100, yVal);
  }
  print(count);

}
function Stack() {
  this.dataStore=[];
  this.top=0;
  this.pushIt=pushIt;
  this.popIt=popIt;
  this.peek=peek;
  this.clearIt=clearIt;
  this.length=length;
}
function pushIt(element) {
  this.dataStore[this.top++]=element;
}
function popIt() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top-1];
}
function length() {
  return this.top;
}
function clearIt() {
  this.top=0;
  this.dataStore.length=0;
}

function Queue() {
  this.dataStore=[];
  this.enqueue=enqueue;
  this.dequeue=dequeue;
  this.front=front;
  this.back=back
  
}
function enqueue(element){
this.dataStore.push(element);
}
function dequeue(element){
this.dataStore.shift();
}
function front(){
return this.dataStore[0];
}
function back(){
return this.dataStore[this.dataStore.length-1];
}
function reverseWord(word){
rWord="";
for(var i=word.length-1;i>=0;--i){
rWord+=word[i]}
return rWord
}