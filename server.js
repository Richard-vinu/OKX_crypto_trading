import  express  from "express";
import CryptoJS from 'crypto-js';
import route from "./route.js";
const app = express()
const PORT = 3000
 app.use(express.json())
app.use('/',route)
app.get('/test',(req,res)=>{


const secret_key = "D2BF35CD4DCB1C0070CF1D75BDF2B2B0"
const ROOT_URL = 'https://www.okex.com'
var time = new Date();
var timestamp = time.toISOString();
let method = 'GET'
let endpoint = 'api/v5/trade/order'
let sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + method + endpoint, secret_key))
 }
)
https://www.okex.com/api/v5/rfq/public-trades

app.get('/api/public-trades')
// let sign = timestamp + 'GET' + endpoint
// total_params = bytes(sign, encoding= 'utf-8')
// signature = hmac.new(bytes(secret_key, encoding= 'utf-8'), total_params, digestmod=hashlib.sha256).digest()
// signature = base64.b64encode(signature)
// console.log("signature = {0}".format(signature))

app.get('/encrypt',(req,res)=>{

    function encodeBase64(value) {

let SecretKey = '74F6E565D423A93AADDFCF729F434E32'
let timestamp=new Date().toISOString()
console.log(timestamp);
console.log(new Date().getTime()/1000);

   let op = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'POST' + '/api/v5/trade/order', SecretKey))
        return op
    
    }

    console.log(encodeBase64('hello'));
    res.send('ok')
})
//sign=CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'GET' + '/api/v5/account/balance?ccy=BTC', SecretKey))

// var words  = CryptoJS.enc.Base64.parse('SGVsbG8sIFdvcmxkIQ==');
// var base64 = CryptoJS.enc.Base64.stringify(words); // 'Hello, World!'
// return CryptoJS.enc.Base64.parse(value.toString());


 app.listen(PORT,()=>console.log(`server listing on ${PORT} `))
