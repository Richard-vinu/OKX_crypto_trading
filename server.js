import  express  from "express";
import CryptoJS from 'crypto';

const app = express()
const PORT = 3000

app.get('/test',(req,res)=>res.send('runnig api'))

const SecretKey = "D2BF35CD4DCB1C0070CF1D75BDF2B2B0"
var time = new Date();
var timestamp = time.toISOString();
let method = 'GET'
let endpoint = 'api/v5/trade/order'
let sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + method + endpoint, SecretKey))
const ROOT_URL = 'https://www.okex.com'


const KEY = "98bfae6f-cbf6-41d0-9326-b7d42572acd7"
// const SIGN = sign
// const TIMESTAMP = timesta
const PASSPHRASE = 'Richard@1'

    header['CONTENT-TYPE'] = 'application/json'
    header['OK-ACCESS-KEY'] = KEY
    header['OK-ACCESS-SIGN'] = sign
    header['OK-ACCESS-TIMESTAMP'] = timestamp
    header['OK-ACCESS-PASSPHRASE'] = PASSPHRASE


app.listen(PORT,()=>console.log(`server listing on ${PORT} `))


// tslint:disable:variable-name

// import axios, { AxiosInstance } from 'axios';
// import * as crypto from 'crypto';
// import * as querystring from 'querystring';

// export function AuthenticatedClient(
//   key: string,
//   secret: string,
//   passphrase: string,
//   apiUri = 'https://www.okex.com',
//   timeout = 3000,
//   axiosConfig = {}
// ): any {
//   const axiosInstance: AxiosInstance = axios.create({
//     baseURL: apiUri,
//     timeout,
//     ...axiosConfig
//   });

//   const signRequest = (
//     method: string,
//     path: string,
//     options: { readonly qs?: string; readonly body?: string } = {}
//   ) => {
//     // tslint:disable:no-if-statement
//     // tslint:disable:no-let
//     // tslint:disable:no-expression-statement
//     const timestamp = Date.now() / 1000;
//     const what = timestamp + method.toUpperCase() + path + (options.body || '');
//     const hmac = crypto.createHmac('sha256', secret);
//     const signature = hmac.update(what).digest('base64');
//     return {
//       key,
//       passphrase,
//       signature,
//       timestamp
//     };
//   };
//   const getSignature = (
//     method: GET,
//     relativeURI: string,
//     opts: { readonly body?: string } = {}
//   ) => {
//     const sig = signRequest(method, relativeURI, opts);

//     return {
//       'OK-ACCESS-KEY': sig.key,
//       'OK-ACCESS-PASSPHRASE': sig.passphrase,
//       'OK-ACCESS-SIGN': sig.signature,
//       'OK-ACCESS-TIMESTAMP': sig.timestamp
//     };
//   };

//   async function get(url: string, params?: object): Promise<any> {
//     return axiosInstance
//       .get(url, { params, headers: { ...getSignature('get', url) } })
//       .then(res => res.data)
//       .catch(error => {
//         console.log(
//           error.response && error.response !== undefined && error.response.data
//             ? JSON.stringify(error.response.data)
//             : error
//         );
//         console.log(error.message ? error.message : `${url} error`);
//         throw error;
//       });
//   }

//   async function post(
//     url: String,
//     body?: object,
//     params?: object
//   ): Promise<any> {
//     const bodyJson = JSON.stringify(body);
//     return axiosInstance
//       .post(url, body, {
//         headers: {
//           'content-type': 'application/json; charset=utf-8',
//           ...getSignature('post', url, { body: bodyJson })
//         },
//         params
//       })
//       .then(res => res.data)
//       .catch(error => {
//         console.log(
//           error.response && error.response !== undefined && error.response.data
//             ? JSON.stringify(error.response.data)
//             : error
//         );
//         console.log(error.message ? error.message : `${url} error`);
//         throw error;
//       });
//   }

// }