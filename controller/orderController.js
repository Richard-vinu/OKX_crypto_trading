import axios from "axios";
import CryptoJS from "crypto-js";

const createOrder = async (req,res)=>{

try {

    let timestamp=new Date().toISOString()
    let sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'POST' + '/api/v5/trade/order', SecretKey))
   
    var options = {
        'method': 'POST',

        'url': 'https://www.okx.com/api/v5/trade/order',

        'data':req.body,

        'headers': {
        'X-API-KEY': 'bc541dd7-d800-4e15-a98b-d84a2183b7a2',
        'OK-ACCESS-SIGN':timestamp,
        'OK-ACCESS-TIMESTAMP': sign,
        'OK-ACCESS-PASSPHRASE':"Richard@123",
        'Content-Type': 'application/json'
        }
      };

      const result = await axios(options);


      res.status(500).send(result.data);
} 

catch (error) 
{res.status(500).send(error.message);
    
}
   
}

//api/v5/trade/order

export {createOrder}