// "use strict";

// 1-misol

// function aniqlovchiFasl(oyRaqami) {
//     let fasl;
//     switch (oyRaqami) {
//         case 1:
//             console.log("Qish - Yanvar");
//             break;
//         case 2:
//             console.log("Qish - Fevral");
//             break;
//         case 3:
//             console.log("Bahor - Mart");
//             break;
//         case 4:
//             console.log("Bahor - Aprel");
//             break;
//         case 5:
//             console.log("Bahor - May");
//             break;
//         case 6:
//             console.log("Yoz - Iyun");
//             break;
//         case 7:
//             console.log("Yoz - Iyul");
//             break;
//         case 8:
//             console.log("Yoz - Avgust");
//             break;
//         case 9:
//             console.log("Kuz - Sentabr");
//             break;
//         case 10:
//             console.log("Kuz - Oktabr");
//             break;
//         case 11:
//             console.log("Kuz - Noyabr");
//             break;
//         case 12:
//             console.log("Qish - Dekabr");
//             break;
//         default:
//             fasl = "Noto'g'ri oy raqami";
//     }
//     return fasl;
// }

// let oyRaqami = prompt("Oy raqamini kiriting: ")*1;
// let aniqFasl = aniqlovchiFasl(oyRaqami);
// console.log(aniqFasl);

///////////////////////////////////////////////////////////////////////////////////////////////

// 2-misol

// function yoshAniqlovchi(age){
//     let year = 2024;
//     return year - age;
// }

// let age = prompt("Yoshni kiriting: ");
// let yosh = yoshAniqlovchi(age);
// console.log(yosh);

///////////////////////////////////////////////////////////////////////////////////////////////

// 3-misol

// function juftToqYigindisi(n) {
//     let juftYigindi = 0;
//     let toqYigindi = 0;
  
//     for (let i = 1; i <= n; i++) {
//       if (i % 2 === 0) {
//         juftYigindi += i;
//       } else {
//         toqYigindi += i;
//       }
//     }
  
//     let nisbat = juftYigindi / toqYigindi;
//     return nisbat;
//   }
  
//   const n = 10; 
//   const juftToqNisbat = juftToqYigindisi(n);
//   console.log(`Juft va toq sonlar yig'indisi nisbati: ${juftToqNisbat}`);
  

///////////////////////////////////////////////////////////////////////////////////////////////

// 4-misol

// function operatorTopuvchi(raqam){
//     let operator;

//     if(raqam == 90 || raqam == 91){
//         return "Beeline";
//     }
//     else if(raqam == 93 || raqam == 94){
//         return "Ucell";
//     }
//     else if(raqam == 95 || raqam == 99){
//         return "Uzmobile";
//     }
//     else if(raqam == 33){
//         return "Humans";
//     }
//     else if(raqam == 71 || raqam == 70){
//         return "Uzbektelecom";
//     }
//     else if(raqam == 78){
//         return "Sarkor Telekom";
//     }
//     else{
//         operator = "Noto'g'ri operator";
//     }
// }

// let raqam = prompt("Operatorni kiriting: ");

// let operator = operatorTopuvchi(raqam);

// console.log(operator);

///////////////////////////////////////////////////////////////////////////////////////////////