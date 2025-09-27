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
const discount = isMember ? 10 : 0;
console.log(discount);

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
