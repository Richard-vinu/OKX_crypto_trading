import axios from 'axios'
import express from 'express'
const route = express.Router()
import {public_trades} from './controller/tradeController.js'

route.get('/test-me',(req,res)=>{res.send('APi fired 🎇🎇')})

route.get('/api/public-trades',public_trades)

export default route