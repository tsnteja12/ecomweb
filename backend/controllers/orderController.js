import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';

//Placing Order using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()//current timestamp
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save();//saved in the db

        await userModel.findByIdAndUpdate(userId, { cartData: {} }) //clear the cartData after order is placed

        res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }


}

//Placing Order using Stripe Method
const placeOrderStripe = async (req, res) => {


}

//Placing Order using razorPay Method
const placeOrderRazorPay = async (req, res) => {


}

//All Orders data for ADmin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,orders});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//All Orders data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

//update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const {orderId,status}=req.body;
        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success:true,message:'Status Updated'})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

// track order status for user
const trackOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, status: order.status });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



export { placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus,trackOrder };