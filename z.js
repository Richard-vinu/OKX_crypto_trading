var time = new Date();
var timestamp = time.toISOString();
console.log(timestamp);
let SecretKey='74F6E565D423A93AADDFCF729F434E32'
//let sign=CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'GET' + '/api/v5/trade/order', SecretKey))

// Encode String to Base64
