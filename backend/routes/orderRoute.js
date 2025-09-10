import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorPay,allOrders,userOrders,updateStatus,trackOrder} from '../controllers/orderController.js';
import adminAuth from './../middleware/adminAuth.js';
import authUser from './../middleware/auth.js';

const orderRouter = express.Router();

//Admin Features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//Payment Features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorPay);

// User Features
orderRouter.post('/userorders',authUser,userOrders);
orderRouter.post('/track',authUser,trackOrder);

export default orderRouter;