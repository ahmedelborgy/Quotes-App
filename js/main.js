var index=document.getElementById('index');
var current,num;
var quoteOutput=document.getElementById('quoteOutput');
var authorOutput=document.getElementById('authorOutput');
var listQoute=[

  {
    author:'-- Marilyn Monroe', qoute:`
  “I'm selfish, impatient and a little insecure. I make
   mistakes, I am out of control and at times hard to handle.
    But if you can't handle me at my worst, then you sure as hell don'
    t deserve me at my best.” `},
    
  {
    author:'-- Albert Einstein', qoute:`
    Albert Einstein
    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`},


    
  {
    author:'-- Frank Zappa', qoute:`
    “So many books, so little time.”`},
    
  {
    author:'-- Marcus Tullius Cicero', qoute:`
    “A room without books is like a body without a soul.” `},
    
  {
    author:'-- Bernard M. Baruch', qoute:`
    “Be who you are and say what you feel, because 
    those who mind don't matter, and those who matter don't mind.”`},
]


function generateQuote(){
  current=index.innerHTML;
  console.log('-----------------');
num= Math.floor(  Math.random()*listQoute.length);
console.log('n     '+num)
index.innerHTML=num
quoteOutput.innerHTML=listQoute[num].qoute;
authorOutput.innerHTML=listQoute[num].author;

console.log('cu     '+current)
if(current==num){
  num++;
  if(num>listQoute.length-1){
    num=0;
  }
quoteOutput.innerHTML=listQoute[num].qoute;
authorOutput.innerHTML=listQoute[num].author;

}

console.log('-----------------')
}


