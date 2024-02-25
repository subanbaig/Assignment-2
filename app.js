alert("Chapter-4")
// Q-1
var x = 10 , y = 50 , z = 60
var num = x + y + z
alert(num)

// Q-2
// Legal Variable
my_variable = ("First Name")
count = ("Contact Number")
num_items = ("Age")
_value = ("Price")
totalAmount = ("Total Value")
FinalResult=(my_variable+"\n"+count+"\n"+num_items+"\n"+_value+"\n"+totalAmount)
console.log(FinalResult)

// Illegal Variable
// 123abc 
// my-var 
// @abc
// !error 
// class

// Q-3
document.write("<h1>Rules for naming JS variables</h1>")

var abc= "$" , abd= "number" , abe= "_"
document.write("Variable names can only contain "+" "+abc +" "+abd +" ' and "+" "+ abe+". <br> For example <b>$my_1stVariable</b> <br><br>")

var sec ="letter" , soc= "$name" , xro= "_name"
document.write("Variable must begin with a"+" "+sec+" "+ soc+" or"+xro+"For Example <b>$name , _name or name</b> <br><br>")

var abh="sensitive"
document.write("Variable names are case"+" "+abh+"<br><br>")

var abz="keywords"
document.write("Variable names should not be JS"+" "+abz+"<br><br>")

alert("Chapter-5")

// Q-1
var a = 5 , b = 3
var num = a+b
document.write("Sum of"+" "+a+" "+"and"+" "+b+" is "+" "+num+"<br>")

// Q-2
var a = 5 , b = 3
var num = a-b
document.write("Subtraction of"+" "+a+" "+"and"+" "+b+" is "+" "+num+"<br>")

var a = 5 , b = 3
var num = a*b
document.write("Multiplication of"+" "+a+" "+"and"+" "+b+" is "+" "+num+"<br>")

var a = 5 , b = 3
var num = a/b
document.write("Division of"+" "+a+" "+"and"+" "+b+" is "+" "+num+"<br><br>")

// Q-3
var b=600 , z= 6
var num = b*z 
document.write("Total cost of"+" "+z+" "+"tickets is"+" "+num+"<br></br>")

// Q-4
var num= 10
document.write(num +" X 1 = "+num*1+"<br>"+num +" X 2 = "+num*2+"<br>"+num +" X 3 = "+num*3+"<br>"+num +" X 4 = "+num*4
+"<br>"+num +" X 5 = "+num*5+"<br>"+num +" X 6 = "+num*6+"<br>"+num +" X 7 = "+num*7+"<br>"+num +" X 8 = "+num*8+"<br>"+num +" X 9 = "+num*9
+"<br>"+num +" X 10 = "+num*10+"<br><br>")   

// Q-5
var C=25 ,F=70
document.write(F+"<sup>0</sup>F is"+"  "+((F-32)*5/9)+"<sup>0</sup>C <br>"+
C+"<sup>0</sup>C is"+" "+((C*9/5)+32)+"<sup>0</sup>F<br><br>")

// Q-6
var a="price of item 1 is" , b="price of item 2 is" , c="Ordered quantity of item 1 is" , d="Ordered quantity of item 2 is" , e="Shipping charges"
, f=350 , g=250 , h=3 , i=5 , j=150 , num= f*h+g*i+j
document.write(a+" "+f+"<br>"+b+" "+g+"<br>"+c+" "+h+"<br>"+d+" "+i+"<br>"+e+" "+j+"<br><br>"+"Total Cost of Ordered is"+" "+num+"<br><br>")

// Q-7
var x=1000 , y=850 
var per=(y/x)*100
document.write("Total Marks:"+" "+x+"<br>"+"Marks Obtained:"+" "+y+"<br>"+"Percentage:"+" "+per+"<br><br>")

// Q-8
var z=2024 , y=2001
var age=z-y
document.write("<br><br> Current Year:"+" "+z+"<br>"+"Birth Year:"+" "+y+"<br> Your Age:"+" "+age+"<br><br>")

alert("Chapter-6/9")
// Q-1
var a=10

document.write("Result <br>"+" The value of a is="+ a+"<br> ---------------------------"+
"<br>"+" The value of ++a is="+ ++a+"<br> ---------------------------"+"<br>"+" The value of a++ is="+ a++ +"<br> ---------------------------"
+"<br>"+" The value of --a is="+ --a+"<br> ---------------------------"+"<br>"+" The value of a-- is="+ a++ +"<br> ---------------------------"
+"<br>"+" The value of a is="+ a+"<br><br>")

// Q-2
var a=2 , b=1
var Result= --a - --b + ++b + b--

document.write("The value of a is= 2"+"<br> The value of b is= 1"+"<br>"+"--a = 1 <br> --a - --b = -1 <br> --a - --b + ++b =2 <br> --a - --b + ++b +b-- ="+ Result+"<br><br>")

// Q-3
var name= prompt("Enter Your name")
document.write("Hello Mr/Mrs"+"  "+name +"  "+"Wlecome To our Resort..<br><br>")

// Q-4
var num=+prompt("Enter Your Number"), a=5
document.write(num +" X 1 = "+num*1+"<br>"+num +" X 2 = "+num*2+"<br>"+num +" X 3 = "+num*3+"<br>"+num +" X 4 = "+num*4
+"<br>"+num +" X 5 = "+num*5+"<br>"+num +" X 6 = "+num*6+"<br>"+num +" X 7 = "+num*7+"<br>"+num +" X 8 = "+num*8+"<br>"+num +" X 9 = "+num*9
+"<br>"+num +" X 10 = "+num*10+"<br><br>")  

// Q-5
var x=50
y=x++
console.log(y)

// Q-6
var y=50 , z=--y
console.log(z)

// Q--7
var num = 10
var newNum = --num 
console.log(newNum)

// Q-8
var x=100 , y="Subtract it by 1"
console.log("the fastest way to reduce 100 to 99 is to "+y)

// Q-9
var x=5 , y= ++x + x-- + x + ++x
alert(y) 

// Q-10
var calculatedNum = 2 + (2 * 6)
document.write("The Value of Calculated number is"+" "+calculatedNum+"<br><br>")

// Q-11
var
calculatedNum = (2 + 2) * 6
document.write("The Value of Calculated number is"+" "+calculatedNum+"<br><br>")

// Q-12
var calculatedNum = (2 + 2) * (4 + 2)
document.write("The Value of Calculated number is"+" "+calculatedNum+"<br><br>")

// Q-13
var calculatedNum = ((2 + 2) * 4) + 2
document.write("The Value of Calculated number is"+" "+calculatedNum+"<br><br>")

// Q-14
var calculatedNum = (2+2)*(4+10)
document.write("The Value of Calculated number is"+" "+calculatedNum+"<br><br>")
 
// Q-15
var calculatedNum = 2 + (2*4) +10
document.write("The Value of Calculated number is"+" "+calculatedNum+"<br><br>")

// Q-16
var num = "2"+ "2";
alert(num)

// Q-17
var message = ("Hello," + "Dolly");
alert(message)

// Q-18
alert("33" + 3);

// Q-19
var abc= "Pakistan"+ " " + "Zindabad"
alert(abc)

// Q-20
var string= "Hello'"
var string1="World!"
alert(string+string1)

// Q-21
var name= prompt("Enter First Name")
document.write(name+"<br><br>") 

// Q-22
var Counrty= prompt("Country")
document.write(Counrty+"<br><br>")