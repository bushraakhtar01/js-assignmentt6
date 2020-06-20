// chapter 21-25--task 1

// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var fullName=firstName+lastName;
// alert("Welcome "+ fullName)

// chapter 21-25--task 2
// var favMobile=prompt("Enter your Favourite mobile model");
// var len=favMobile.length;
// document.write("<h1>My favorite phone is "+ favMobile + "<br>");
// document.write("Length of String is "+ len);

// chapter 21-25--task 3
// var pak="Pakistan";
// var ind=pak.indexOf("n");
// document.write("<h1>String: "+ pak+ "<br>");
// document.write("Index of 'n': "+ ind);


// chapter 21-25--task 4

// var str="Hello World";
// var ind=str.lastIndexOf('l')
// document.write("<h1>String: "+ str+ "<br>");
// document.write("Last Index of l: "+ ind);

// chapter 21-25--task 5
//  var str="Pakistan";
// var ind=str.charAt(3);
// document.write("<h1>String: "+ str+ "<br>");
// document.write("Character at Index 3: "+ ind);

// chapter 21-25--task 6
// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var fullName=firstName.concat(lastName)
// alert("Welcome "+ fullName)


// chapter 21-25--task 7
//  var str="Hyderabad";
//  var str1=str.replace("Hyder","Islam")
// document.write("<h1>City: "+ str+ "<br>");
// document.write("After replacement: "+ str1);

// chapter 21-25--task 8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var res=message.split("and").join("&")
// document.write("<h1>String: "+ message+ "<br>");
// document.write("After replacement: "+ res);

// chapter 21-25--task 9
//var val="472";
// document.write("<h1>Value: "+val+"<br>");
// document.write("Type: "+ typeof(val))
// var val1=Number(val)
// document.write("<h1>Value: "+val1+"<br>");
// document.write("Type: "+ typeof(val1))

// chapter 21-25--task 10
// var msg=prompt("Enter letter in lowercase");
// document.write("<h1>User Input: "+msg+"<br>");
// document.write("Uppercase: "+ msg.toUpperCase());

// chapter 21-25--task 11

// var msg=prompt("Enter letter in lowercase");
// var ch=(msg.charAt(0).toUpperCase()+msg.slice(1));
// document.write("<h1>User Input: "+msg+"<br>");
// document.write("Title Case: "+ch);


// chapter 21-25--task 12
// var num=prompt("Enter Number");
// var res=num.replace('.','')
// document.write("<h1>Number: "+num);
// document.write("<h1>Result: "+res);

// chapter 21-25--task 13
// var name=prompt("Enter Username");
// for(i=0;i<=name.length;i++){

//    if(name.charCodeAt(i)==33||name.charCodeAt(i)==44||name.charCodeAt(i)==46||name.charCodeAt(i)==64)
//     alert("Please Enter Valid User Name")
    
// }

// chapter 21-25--task 14
// var arr = ["cake", "applepie", "cookie", "chips", "patties"]
// var name=prompt("Welcome to ABC Bakey, What do you want to order sir/ma'am?");
// var chg=name.toLowerCase();

// if(arr.includes(chg)){
//     alert(chg+" is available at index "+ arr.indexOf(chg) + " in our bakery")
// }
// else{
//     alert(chg+" is not available at index in our bakery")
    
// }

// chapter 21-25--task 15


// var password=prompt("Enter password");

// document.write("<h1>Entered Password: "+password+"<br>")
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;

// if(password.length<6){
//     alert("Password length should not be less than 6, Please enter a valid password")
// }
// if(password.match(numbers)&&(password.match(upperCaseLetters)||password.match(lowerCaseLetters))){
    
// if(password[0]>=0||password[0]<=9){
//     alert("Password should not begin with number")
// }
// }
// else{
//     alert("Password must contain letters and number")
    
// }



// chapter 21-25---task 16
// var uni="University of karachi";
// var a=uni.split("")

// for(i=0;i<a.length;i++){
//     document.write(a[i]+"<br>")
// }



// chapter 21-25---task 17
// var inp=prompt("Enter something");
// var ind=inp.length;
// var ch=inp.charAt(ind-1);
// document.write("<h1>User Input: "+inp+"<br>")
// document.write("Last Character Of Input: "+ch+"<br>")


// chapter 21-25---task 18

// var str="The quick brown fox jumps over the lazy dog";
// var mat=str.toLowerCase();
// var a=mat.match(/the/g);
// document.write("<h1>Text: " +str+"<br>")
// document.write("There are " +a.length+" occurences of word the")








// chapter 26-30--task 1

// var num=+prompt("Enter a number");
// if(Math.sign(num)===1){
//     var round=Math.round(num);
//     var floor=Math.floor(num);
//     var ceil=Math.ceil(num);
    
//     document.write("<h1>Number: "+num+"<br>" );
    
//     document.write("<h1>Round off value: "+round+"<br>" )
    
//     document.write("<h1>Floor value: "+floor+"<br>" )
    
//     document.write("<h1>Ceil value: "+ceil+"<br>" )
// }
// else{
//     alert("Enter Positive Number")
// }


// chapter 26-30--task 2

// var num=+prompt("Enter a number");

// if(Math.sign(num)===-1 &&){
//     var round=Math.round(num);
//     var floor=Math.floor(num);
//     var ceil=Math.ceil(num);
    
//     document.write("<h1>Number: "+num+"<br>" );
    
//     document.write("<h1>Round off value: "+round+"<br>" )
    
//     document.write("<h1>Floor value: "+floor+"<br>" )
    
//     document.write("<h1>Ceil value: "+ceil+"<br>" )
// }
// else{
//     alert("Enter Negative FLoat Number")
// }



// chapter 26-30--task 3

// var num=+prompt("Enter negative number");
// var num1=Math.abs(num)
// document.write("<h1>The absolute value of "+num+" is " +num1)



// chapter 26-30--task 4

// var dice=Math.floor(Math.random() * 6) + 1;
// document.write("<h1>Random dice value is : "+dice)





// chapter 26-30--task 5

// var coin=Math.floor(Math.random() * 2) + 1;
// if(coin==2){
// document.write("<h1>"+coin+"<br>Random coin value is : Head")
// }
// else{
//     document.write("<h1>"+coin+"<br>Random coin value is : Tail")
//     }
    



// chapter 26-30--task 6

// var number=Math.floor(Math.random() * 100) + 1;
// document.write("<h1>Random Number Between 1 to 100 : "+number)


// chapter 26-30--task 7

//var regex = /[+-]?\d+(\.\d+)?/g;
//var str2 = prompt("Enter your weight in kg");
//var floats2 = str2.match(regex).map(function(v) { return parseFloat(v); });
//document.write("The weigh of user is "+floats2+" kilograms");


// chapter 26-30--task 8


// var snumber=Math.floor(Math.random() * 10) + 1;
// var num=+prompt("Enter your guess between 1 to 10")
// if(snumber==num){
//     document.write("<h1> Congratulations, You guessed it right!")
    
// }
// else{
//     document.write("<h1>Try Again mate!")
// }


// chapter 31 to 34--task 1

// var date=new Date();
// document.write("<h1>"+date)



// chapter 31 to 34--task 2

// var months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
// var date=new Date();
// var month=date.getMonth()
// document.write("<h1>Current Month : "+months[month])

// chapter 31 to 34--task 3

// Method 1

// var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// var date=new Date();
// var day=date.getDay()
// var dayWords=days[day]
// alert("Today is : "+dayWords.slice(0,3))

// Method 2

// var date=new Date();
// var day=date.toString().slice(0,3)
// alert(day)


// chapter 31 to 34--task 4


// var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// var date=new Date();
// var day=date.getDay()
// var dayWords=days[day]
// if(dayWords=="Saturday"||dayWords=="Sunday"){
//     alert("Ïts Fun Day")
// }




// chapter 31 to 34--task 5

// var date=new Date();
// var day=date.getDay()
// if(day<16){
//     alert("First fifteen Days of the month")
// }
// else{
//     alert("Last Days of the month")
// }


// chapter 31 to 34--task 6

// var date=new Date();
// var milisec=date.getTime();
// var min=milisec/(1000*60)
// document.write("<h1>Elapsed miliseconds since January 1,1970: "+milisec)
// document.write("<h1>Elapsed miliseconds since January 1,1970: "+min)



// chapter 31 to 34--task 7

// var date=new Date();
// var hr=date.getHours()

// if(hr>=12){
// alert("Its PM")
// }
// else{
//     alert("Its AM")
// }

// chapter 31 to 34--task 8

// var date=new Date(new Date().getFullYear(), 11, 31)
// document.write("<h1> Later Date: "+date)



// chapter 31 to 34--task 9


    // var currDate=new Date();
    // var militoday=currDate.getTime()
    // var preDate=new Date('25 Apr,2020')
    // var miliPre=preDate.getTime()
    // var diff=militoday-miliPre;
    // var final=diff/(1000*60*60*24)
    // var days=Math.floor(final)

 
    // document.write("<h1> "+days+" days have passed since 1st Ramzan,2020")



// chapter 31 to 34--task 10


//     var currDate=new Date('Dec 5 2015');
//     var militoday=currDate.getTime()
//     var preDate=new Date('1 Jan,2015')
//     var miliPre=preDate.getTime()
//     var diff=militoday-miliPre;
//     var final=(diff/1000)
    

//     document.write("<h1>On refernce date "+currDate)
//     document.write("<h1> "+final+" seconds had passed since begining of 2015")






// chapter 31 to 34--task 11


//     var currDate=new Date();
//     var date=new Date();
//     var year=date.getFullYear();
//     var month=date.getMonth();
//     var day=date.getDay();  
//     var hr=date.getHours();
//     var m=date.getMinutes();
//     var s=date.getSeconds();
//     var date1=new Date(date.setHours(hr+1))

//     document.write("<h1>Current date "+currDate)
//     document.write("<h1>1 hour ago, it was "+date1)




// chapter 31 to 34--task 12

//     var currDate=new Date();
//     var date=new Date();
//     var year=date.getFullYear();
//     var month=date.getMonth();
//     var day=date.getDay();  
//     var hr=date.getHours();
//     var m=date.getMinutes();
//     var s=date.getSeconds();
//     var date1=new Date(date.setFullYear(year-100))

//     document.write("<h1>Current date "+currDate)
//     document.write("<h1>Hundred years back, it was "+date1)





// chapter 31 to 34--task 13

// function dob(age){

//     var date=new Date();
//     var year=date.getFullYear();
//     var dob=year-age;


//     document.write("<h1>Your age is "+age)
//     document.write("<h1>Your birth year is "+dob)

// }

// var a=prompt("Enter your age")
// dob(a)


// chapter 31 to 34--task 14

// var name=prompt("Enter Customer")
// var date=new Date();
// var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// var date=new Date();
// var day=date.getDay()
// var dayWords=days[day]
// var units=+prompt("Enter units")
// var charges=+prompt("Enter charges")
// var late=+prompt("Enter Late Charges")
// var net=units*charges;
// var gross=net+late;

// net=Math.round(net).toFixed(2);
// gross=Math.round(gross).toFixed(2);

// document.write("<h1>K-Electric Bill </h1>"+"<br>")
// document.write("Customer Name : "+"<b>"+name+"</b>"+"<br>")
// document.write("Month : "+"<b>"+dayWords+"</b>"+"<br>")
// document.write("Number of units : "+"<b>"+units+"</b>"+"<br>")
// document.write("Charges per units : "+"<b>"+charges+"</b>"+"<br><br><br>")
// document.write("Net Amount Payable (within Due Date) : "+"<b>"+net+"</b>"+"<br>")
// document.write("Late Payment Surcharges : "+"<b>"+late+"</b>"+"<br>")
// document.write("Gross Amount Payable (after Due Date) : "+"<b>"+gross+"</b>"+"<br>")




























//chapter 35-38----task 1

// function date(){
    
//     var date= new Date()
//     document.write("<h1>"+date)
// }

// date()

//chapter 35-38----task 2

// function greet(){
//     var firstName=prompt("Enter your Firstname")
//     var lastName=prompt("Enter your Lastname")
//     document.write("<h1>Welcome to "+firstName+lastName)
// }
// greet()



//chapter 35-38----task 3

// function add(){
//     var firstNumber=+prompt("Enter your FirstNumber")
//     var lastNumber=+prompt("Enter your LastNumber")
//     var sum=firstNumber+lastNumber;
//     return sum;
// }
// var x=add()
// document.write("<h1>Sum is:  "+x)

//chapter 35-38----task 4

// function calculator(num1,operator,num2){

//     if(operator==='+'){
//         return num1+num2;
//     }
//     else if(operator==='-'){
//         return num1-num2;
//     }
//     else if(operator==='*'){
//         return num1*num2;
//     }
//     else if(operator==='/'){
//         return num1/num2;
//     }

// }
// var res=calculator(2,'/',4)
//  document.write("<h1>Output is:  "+res)


//chapter 35-38----task 5

// function square(num){
//     return num*num
// }
// var x =square(9)
//  document.write("<h1>Square is:  "+x)


//chapter 35-38----task 6

// function fac(num){
//     var a=num
//     for(i=1;i<num;i++){
//         a=a*i;
//     }
//     return a;
// }
// var x =fac(5)
//  document.write("<h1>Factorial is:  "+x)

//chapter 35-38----task 7

// function count(){
//     var num1=+prompt("Enter first number")
//     var num2=+prompt("Enter second number")
//     var count=0;

//     for(i=1;i<=num2&&i>=num1;i++){
//         count++
//         document.write(count+"<br>")
//     }

// }
// count()


//chapter 35-38----task 8

// function calculateHypotenuse(){
//         var num1=+prompt("Enter perpendicular number")
//     var num2=+prompt("Enter base number")
//     var p=calculateSquare(num1)
//     var b=calculateSquare(num2)
//     var h;
//     h=p+b;
//     var hyp=calculateSquare(h)
//     document.write("<h1>Perpendicular : "+num1+"<br>")
//     document.write("<h1>Base : "+num2+"<br>")
//     document.write("<h1>Hypotenuse : "+hyp+"<br>")


//     function calculateSquare(n){
//     return n*n;
//     }
// }

// calculateHypotenuse()


//chapter 35-38----task 9

// function area(w,h){
//     var area=w*h;
//     return area
// }
// var w=4;
// var h=9;
// var a=area(w,h) //argument as varaible
// var a=area(3,4) //argument as value
//  document.write("<h1>Area : "+a+"<br>")


//chapter 35-38----task 10

// function palindrome(str){
    
//     var a='';
//     for(i=str.length-1;i>=0;i--)
//     { 
//        a+=str[i]

//     }

//   if(a=== str){
//     alert('Palindrome')
//     }

//     else{
//     alert('Not Palindrome')

//     }
// }

// var name=prompt("Enter word")
// palindrome(name)

//chapter 35-38----task 11

// function titleCase(str){


// var a=str.split(' ')
// var arr=[];
// for(i=0;i<a.length;i++){
//   arr.push(a[i].charAt(0).toUpperCase()+a[i].slice(1))
 
// }
// return arr.join(" ");
// }

// var a=titleCase('the quick brown fox')
// document.write("<h1>EXAMPLE STRING : "+"the quick brown fox"+"<br>")
// document.write("<h1>EXPECTED STRING : "+a+"<br>")

//chapter 35-38----task 12

// function titleCase(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var arr1 = arr[0];

//   for(i = 1 ; i < arr.length ; i++)
//   {
//     if(arr1.length < arr[i].length)
//     {
//     arr1 = arr[i];
//     } 
//   }
//   return arr1;
// }
// var x=titleCase('Web Development Tutorial')
// document.write("<h1>EXAMPLE STRING : "+"Web Development"+"<br>")
// document.write("<h1>EXPECTED STRING : "+x+"<br>")


//chapter 35-38----task 13

// function count(s,l){
// var count=0;
//     for(i=0;i<s.length;i++){
//         if(s.charAt(i)===l){
//             count+=1;
//         }

//     }
//     document.write("<h1>EXAMPLE STRING : "+s+"<br>")
// document.write("<h1>LETTER : "+l+"<br>")
// document.write("<h1>Number Of Occurences : "+count+"<br>")

// }
// count('bushra','a')

//chapter 35-38----task 14

// function calcCircumference(r){

//     var cir=2*Math.PI*r;
//  document.write("<h1>The Circumference is : "+cir+"<br>")

// }


// function calcArea(r){
//     var area=Math.PI*r*r;
//  document.write("<h1>The Area is : "+area+"<br>")

// }
// calcCircumference(12)
// calcArea(12)
    

