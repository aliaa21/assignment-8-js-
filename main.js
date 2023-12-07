
// var x=(prompt('Please enter a number'));
// alert('Number You Have Entered Is '+x)



// var x= Number (prompt('Please enter a number'));
// if(x %3==0 && x %4==0)
// {
//     alert('Yes')
// }
// else
// {
//     alert('No')
// }



// var x= Number (prompt('Please enter first number'));
// var y=Number (prompt('Please enter seconed number'));
// if(x>y)
// {
//     alert(x+' Is maximum')
// }
// else if(y>x){
//     alert(y+' Is maximum')
// }
// else{
//     alert('equal numbers')
// }




// var x=Number (prompt('Please enter a number'));
// if(x >=0)
// {
//     alert('positive')
// }
// else
// {
//     alert('negative')
// }




// var x= Number (prompt('Please enter first number'));
// var y=Number (prompt('Please enter seconed number'));
// var z=Number (prompt('Please enter third number'));
// if(x>y && x>z)
// {
//     console.log(x+' Is maximum')
// }
// else if(y>x && y>z){
//     console.log(y+' Is maximum')
// }
// else if(z>x && z>y){
//     console.log(z+'is maximum')
// }
// else{
//     console.log('invalid')
// }

// if(x<y && x<z)
// {
//     console.log(x+' Is minimum')
// }
// else if(y<x && y<z){
//     console.log(y+' Is minimum')
// }
// else if(z<x && z<y){
//     console.log(z+'is minimum')
// }
// else{
//     console.log('invalid')
// }



// var x=Number (prompt('Please enter a number'));
// if(x %2==0)
// {
//     alert('even')
// }
// else
// {
//     alert('odd')
// }



// var x=(prompt('Please enter a char'));
// if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'||x='A'||x='E'||x='I'||x='O'||x='U') 

// {
//     alert('charcter is vowel')
// }

// else{
//     alert('char is constant')
// }




// var x=Number (prompt('Please enter a number'));

// for(var i=1; i<=x;i++)
// {
//     console.log(i)
// }



// var x=Number (prompt('Please enter a number'));

// for(var i=1; i<=12 ;i++)
// {
//     console.log(x*i)
// }



// var x=Number (prompt('Please enter a number'));
// for(var i=1; i<=x;i++)
// {
//     if(i %2==0)
//     {
//         console.log(i)
//     }
// }




// var x=Number (prompt('Please enter a number'));
// var y=Number (prompt('Please enter the power'));
// var result=1;
// for(var i=0 ; i<y ; i++)
// {
//     result*=x
// }
// console.log(result)




// var sub1=Number (prompt('enter grade of first subject'));
// var sub2=Number (prompt('enter garde of seconed subject'));
// var sub3=Number (prompt('enter grade of third subject'));
// var sub4=Number (prompt('enter grade of fourth subject'));
// var sub5=Number (prompt('enter grade of fifth subject'));

// var total;
// var percentage;
// var average;

// total = sub1+sub2+sub3+sub4+sub5;
// percentage = (total/500)*100;
// average = (total/5);
// console.log('total marks is: '+total);
// console.log('the percentage is: '+percentage);
// console.log('the average is: '+average);



// var monthNumber= Number (prompt('Please enter the month'));
// var daysInMonth;

// if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || monthNumber === 8 || monthNumber === 10 || monthNumber === 12) 
// {
//     daysInMonth = 31;
// } 
// else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) 
// {
//     daysInMonth = 30;

// } 
// else if (monthNumber === 2) 
// {
//     daysInMonth = 28; 
// }

// console.log("Days in Month: " + daysInMonth);







// var sub1=Number (prompt('enter the grade of physics'));
// var sub2=Number (prompt('enter the grade of chemistry'));
// var sub3=Number (prompt('enter the grade of biology'));
// var sub4=Number (prompt('enter the grade of mathematics'));
// var sub5=Number (prompt('enter the grade of computer '));

// var total;
// var percentage;

// total = sub1+sub2+sub3+sub4+sub5;
// percentage = (total/500)*100;
// console.log('Your percentage is: '+percentage);
// if(100>=percentage>=90)
// {
//     console.log('Your Grade is A')
// }

// else if(90>=percentage>=80)
// {
//     console.log('Your Grade is B')
// }
// else if(80>=percentage>=70)
// {
//     console.log('Your Grade is C')
// }
// else if(70>=percentage>=60)
// {
//     console.log('Your Grade is D')
// }
// else if(60>=percentage>=50)
// {
//     console.log('Your Grade is E')
// }
// else if(percentage<50)
// {
//     console.log('Your Grade is F')
// }




// var month= Number (prompt('Please enter the month'));
// var totalDays;

// switch (month) {
//     case 1: // January
//     case 3: // March
//     case 5: // May
//     case 7: // July
//     case 8: // August
//     case 10: // October
//     case 12: // December
//       totalDays = 31;
//       break;
//     case 4: // April
//     case 6: // June
//     case 9: // September
//     case 11: // November
//       totalDays = 30;
//       break;
//     case 2: // February
//       totalDays = 28;
//       break;
//   }

//   console.log('total number of days is '+totalDays)





// var x = (prompt('Please enter a character'));
// switch (x) 
// {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(x + " is a vowel");
//         break;
//     default:
//         console.log(x + " is a consonant");
// }





// var x= Number (prompt('Please enter first number'));
// var y=Number (prompt('Please enter seconed number'));
// var result;
// switch (true) 
// {
//     case x > y:
//       result = x;
//       break;
//     case y > x:
//       result = y;
//       break;
//     default:
//       result = "Numbers are equal";
//   }
//   console.log("The maximum number is: " + result);




// var x = Number(prompt('Please enter a number'));
// switch (true) 
// {
//     case x % 2 == 0:
//         console.log('Even')
//         break;

//     default:
//         console.log('odd');
// }




// var x = Number(prompt('Please enter a number'));
// switch (true) 
// {
//     case x > 0:
//         console.log('positive')
//         break;

//     case x < 0:
//         console.log('negative')
//         break;
//     default:
//         console.log('zero');
// }





var num1 = Number(prompt('Please enter first number'));
var num2 = Number(prompt('Please enter seconed number'));
var operator = (prompt('which operator you need (sum - subtract - division - multiplication)'));
switch (operator) 
{
    case 'sum':
      alert(num1+num2);
      break;
    case 'subtract':
      alert(num1 - num2);
      break;
    case 'multiplication':
      alert(num1 * num2);
      break;
    case 'division':
      alert(num1 / num2);
      break;
    default:
      alert('Invalid operator');
  }