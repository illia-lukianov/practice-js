//Branches
// function checkAge(age) {
// if(age >= 18) {
//     return "You are an adult";
// }
// }
// //
// console.log("checkAge(22):", checkAge(22));

// function checkStorage(available, ordered) {
//   if(available < ordered) {
//       return "Not enough goods in stock!";
//   }  else {
//       return "Order is processed, our manager will contact you";
//   }
// }
// //
// console.log("checkStorage(10, 5):", checkStorage(10, 5));
// console.log("checkStorage(5,10):", checkStorage(5, 10));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!"
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!"
//   } else {
//     return "The order is accepted, our manager will contact you"
//   }
// }
// //
// console.log("checkStorage(10, 5):", checkStorage(10, 5));
// console.log("checkStorage(5,10):", checkStorage(5, 10));
// console.log("checkStorage(10, 0):", checkStorage(10, 0));

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam"
//   return correctPassword === password ? "Access granted" : "Access denied, wrong password!";
// }
// //
// console.log("checkPassword(jqueryismyjam)", checkPassword("jqueryismyjam"));
// console.log("checkPassword(111111):", checkPassword("111111"));

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return(0);
//       break;
//     case "professional":
//       return(20);
//       break;
//     case "organization":
//       return(50);
//       break;
//     default:
//       return(`Invalid subscription type!`);
//   }
// }
// //
// console.log(getSubscriptionPrice("professional"));
// console.log( getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));

// function isNumberInRange(start, end, number) {
//   return (number >= start && number <= end);
// }
// //
// isNumberInRange(2, 6, 5)
// console.log("isNumberInRange(2, 6, 5):", isNumberInRange(2, 6, 5));

// function checkAccess(subType) {
//   return (subType === "pro" || subType === "vip");
// }
// //
// console.log("checkAccess(pro):", checkAccess("pro"))
// console.log("checkAccess(vip):", checkAccess("vip"))
// console.log("checkAccess(starter):", checkAccess("starter"))

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// //
// console.log("toggleModalVisibility(true):", toggleModalVisibility(true));
// console.log("toggleModalVisibility(false):", toggleModalVisibility(false));



// String methods
// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// //
// console.log("getSubstring Hello world, 11:", getSubstring("Hello world", 11));
// console.log("getSubstring Hello world, 8:", getSubstring("Hello world", 8));
// console.log("getSubstring Hello world, 5:", getSubstring("Hello world", 5));
// console.log("getSubstring Hello world, 3:", getSubstring("Hello world", 3));

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// //
// console.log("normalizeInput(This ISN'T SpaM, upper):", normalizeInput("This ISN'T SpaM", "upper"));
// console.log("normalizeInput(This ISN'T SpaM, lower):", normalizeInput("This ISN'T SpaM", "lower"));

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// //
// console.log("checkForName(Jason Neis, jAsOn):", checkForName("Jason Neis", "jAsOn"));
// console.log("checkForName(Jason Neis, Jason):", checkForName("Jason Neis", "Jason"));

// function checkFileExtension(fileName, ext) {
//   if(fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }
// //
// console.log("checkFileExtension(styles.css, .js):", checkFileExtension("styles.css", ".js"));
// console.log("checkFileExtension(styles.css, .css):", checkFileExtension("styles.css", ".css"));

// function getFileName(file) {
//   const temp = file.indexOf(".");
//   if (temp > 0) {
//     return file.slice(0, temp);
//   } else {
//     return file.slice(0);
//   }
// }
// //
// console.log("getFileName(app.js):", getFileName("app.js"));
// console.log("getFileName(styles.css):", getFileName("styles.css"));

// function createFileName(name, ext) {
//   temp = name.trim();
//   return `${temp}.${ext}`
// }
// //
// console.log("createFileName( presentation, xml):", createFileName(" presentation", "xml"));
// console.log("createFileName( order , txt):", createFileName(" order ", "txt"));



//Cycle
// function calculateTotal(number) {
//   counter = 0;
//   n = 0;
//   temp = 0;
// if (number > 0) {
//   while (counter < number) {
//     res = temp + (n + 1);
//     temp = res;
//     counter++;
//     n++;
//   }
// }  else {
//   res = 0;
// }
//   return res;
// }
// //
// console.log("calculateTotal(24):", calculateTotal(24));
// console.log("calculateTotal(3):", calculateTotal(3));

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++){
//     total += i;
//   }
// return total;
// }
// //
// console.log("calculateTotal(7):", calculateTotal(7));
// console.log("calculateTotal(18):", calculateTotal(18));

// function calculateEvenTotal(number) {
//   let total = 0;
//   for(let i=0; i <= number; i++){
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }
// //
// console.log("calculateTotal(7):", calculateEvenTotal(7));
// console.log("calculateEvenTotal(18):", calculateTotal(18));

// let start = 6;
// let end = 17;
// let number;
// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// };

// function findNumber(start, end, divisor) {
//   for(let i = start; i < end; i++) {
//     if(i %divisor === 0) {
//       return i;
//     }
//   }
// }
// //
// console.log("findNumber(2, 6, 5):", findNumber(2, 6, 5));