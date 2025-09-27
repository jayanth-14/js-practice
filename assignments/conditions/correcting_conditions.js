// if (temperature > 30) {
//   weather = "hot";
// } else {
//   weather = "cool";
// }

const temperature = 43;
const weather = temperature > 30 ? 'hot' : 'cool';
console.log(weather);

// if (isMember) {
//   discount = 10;
// } else {
//   discount = 0;
// }

const isMember = true;
// const discount = isMember ? 10 : 0;
// console.log(discount);

// if (day === "Saturday" || day === "Sunday") {
//   isWeekend = true;
// } else {
//   isWeekend = false;
// }
const day = "Sunday";
const isWeekend = day === "Saturday" || day === "Sunday";
console.log(isWeekend);

// if (cartItems.length === 0) {
//   status = "empty";
// } else {
//   status = "ready";
// }

const cartItems = "hello";
const cartStatus = cartItems.length ? "ready" : "empty";
console.log(cartStatus);

// if (userType === "admin") {
//   baseAccess = "all";
//   canDelete = true;
// } else {
//   baseAccess = "limited";
//   canDelete = false;
// }

// const userType = "admin";
// const canDelete = userType === "admin";
// const baseAccess = canDelete ? "all" : "limited";

const userType = "admin";
const isAdmin = userType === "admin";
const canDelete = isAdmin;
const baseAccess = isAdmin ? "all" : "limited";
console.log("user type :", userType);
console.log("can delete :", canDelete);
console.log("base access :", baseAccess);

// if (isPremiumUser) {
//   discount = basePrice * 0.2;
//   finalPrice = basePrice - discount;
// } else {
//   discount = basePrice * 0.05;
//   finalPrice = basePrice - discount;
// }
const isPremiumUser = true;
const basePrice = 500;
const discountPercentage = isPremiumUser ? 0.2 : 0.05;
const discount = basePrice * discountPercentage;
const finalPrice = basePrice - discount;
console.log(finalPrice);

// if (speed > 100) {
//   message = "Too fast";
//   penalty = 200;
// } else {
//   message = "OK";
//   penalty = 0;
// }

const speed = 120;
let message = "OK";
let penalty = 0;
if (speed > 100) {
  message = "Too fast";
  penalty = 200;
}
