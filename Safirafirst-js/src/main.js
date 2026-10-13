//JavaScript --> Programming Language
/*
Programming Language
1. Input & Output
2. Variable and data type
3. Condition (if, else)
4. looping (perulangan)
5. function (fungsi)
*/

//Output
//1. using console.log()
console.log("Hello World");
console.log("My name is Safaa");
console.log(4+5);

//2. using alert()
//alert("Welcome to my Website");

//3. using document.write()

//4. using innerHTML
//document.getElementById("id_name").innerHTML="type";
//document.getElementById("first").innerHTML="My name is safa";

//variable --> to store data

//let
let name= "Safaa";
name="Safira Eka"
console.log(name);
let a = 4;
let b = 3;
let c = a+b;
let d = a*b
console.log(a+b);
console.log(c);
console.log(c+d);
let address= "Sukoharjo";
console.log("My Name is " + name + " Iam from " + address)

let oke = 8;
let OKE = 7;
console.log(oke);
console.log(OKE);

const school="SMA ABBS Surakarta"
console.log(school);

/*Operator Aritmatika
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagian (/)
modulo(%)
perpangkatan (**)
*/

let number1 = 100;
let number2 = 250;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** 2);

//calculate BMI
let berat = 38;
let tinggi = 150;
let BMI = (berat/(tinggi*tinggi))*10000;
console.log(BMI); 

//variable = let, var, const
let angka = 5;
angka = 6;
console.log(angka);

var angka1 = 5;
var angka1 = 6;
console.log(angka1);

/*Data Type
1. String = Character (huruf, angka) --> using ""/''
2. number (integer, float)
    -integer = Bilangan Bulat
    -float = Bilangan Pecahan
    -Boolean = true, false
*/

let data = "SMA ABBS Surakarta"; // string
let data1= "100"; //string
let data3= 50; //integer
let data4= 25.25; //float
let data5= false; //boolean

/*Comparison Operator --> the output of comparison operatir are true or false.
-Equal (==)
-Not equal (!=)
-Greater than (>)
-Greater than or equal (>=)
-Less than (<)
-Less than or equal (<=)
*/

let x =5;
console.log(x == 5); //false
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x > 10); //false
console.log (x < 10); //true
console.log (x < 18); //true

/*
logical operators
- and (&&) --> semua kondisi harus dipenuhi
    1 = true
    0 = false
- or (||) --> jika ada yg true maka semua yang ada true jawabannya true
- not (!) --> kebalikan
*/

//Condition

/*1. if (1 condition)
    if (condition){
        action;
}
*/

let time = 6;
if (time <= 6){
    console.log("Good Morning");
}

else {
    console.log("Good Bye");
}

/*
1. Jika hari ini hujan, maka membawa payung
2. Jika hari ini tidak hujan, maka tidak membawa payung
*/
let cuaca = "hujan";
if (cuaca == "hujan"){
    console.log("Bawa Payung");
}
else{
    console.log("Tidak Bawa Payung")
}

//Jika nilai lebih dari 75, maka lulus
//Jika nilai kurang dari 75, maka tidak lulus
let nilai = "90";
console.log("nilai = ", nilai);
if (nilai >= "75"){
    console.log("lulus");
}
else{
    console.log("tidak lulus");
}

//jika bilangannya itu genap, maka genap
//jika bilangannya ganjil, maka ganjil

//(ganjil)
let bilangan = "7";
if (bilangan % 2 === 0){
    console.log(bilangan, "adalah bilangan genap");
}
else{
    console.log(bilangan, "adalah bilangan ganjil");
}

/*3. More than 2 conditions
    if(condition 1){
        action 1;    
}
    else if (condition 2){
        action 2;    
}
    else{
        action 3;
}
*/
//(kalkulator BMI)
let BB = 45;
let TB = 155;
let bmi = (BB/(TB*TB))*10000;
console.log("Tinggi Badan =", TB, "cm");
console.log("Berat Badan = ", BB, "Kg");
console.log("bmi =", bmi);
//jika bmi < 18.5 , maka underweight (if)
//jika bmi 18.5 - 24.9 , maka normalweight (else, if)
//jika bmi 25.0 - 29.9 , maka overweight (else, if)
//jika bmi >= 30.0 , maka obesitas (if)

if (bmi < 18.5){
    console.log("underweight")
}
else if (bmi >=18.5 && bmi <=24.9){
    console.log("normal weight")
}
else if (bmi >=25.0 && bmi <=29.9){
    console.log("over weight")
}
if (bmi >= 30.0){
    console.log("obesitas")
}
