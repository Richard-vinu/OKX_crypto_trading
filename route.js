import express from 'express'
const route = express.Router()
import { createOrder } from './controller/orderController.js'

import {public_trades} from './controller/tradeController.js'

route.get('/test-me',(req,res)=>{res.send('APi fired 🎇🎇')})

//!orderApis
route.post('/api/create-order',createOrder)


route.get('/api/public-trades',public_trades)



export default route