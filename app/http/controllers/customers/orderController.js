const Order = require('../../../models/order')
const moment = require('moment')


function orderController () {
    return {
        store(req, res) {

            /* Check weather the needed details are valid, if not - a message appears all field are required*/
            
            // Validate request
            const { phone, address} = req.body
            if(!phone || !address) {
                return res.status(422).json({ message : 'All fields are required' });
            }

            //stores order details in object
            const order = new Order({
                customerId: req.user._id,
                items: req.session.cart.items,
                phone,
                address
            })

            //message appears if order is placed successfully
            order.save().then(result => {
                Order.populate(result, {path:'customerId'}, (err, placedOrder) => {
                    req.flash('success', 'Order placed successfully')
                    delete req.session.cart
                    
                    
                    //emit event
                    //after order placed it redirects to /customers/orders where user can see generated id
                    const eventEmitter = req.app.get('eventEmitter')
                    eventEmitter.emit('orderPlaced', placedOrder)
                    
                    return res.redirect('/customers/orders')  
                })
                
        }).catch(err => {
            req.flash('error', 'something went wrong')
            return res.redirect('/cart')
        })
   
        },

        /* customer can view generated order_id with the time of order made (use of moment for time) */

        async index(req, res) {
            const orders = await Order.find({ customerId: req.user._id },
                null,
                { sort: { 'createdAt': -1 } } )
            res.header('Cache-Control', 'no-store')
            res.render('customers/orders', { orders: orders, moment: moment })
        },
        async show(req, res) {
            const order = await Order.findById(req.params.id)
            

            // Authorize user
            //only the authorized user can access this page (customers/signleOrder)
            if(req.user._id.toString() === order.customerId.toString()) {
                return res.render('customers/singleOrder', { order })
            }
            return  res.redirect('/')
        }
    }
}

module.exports = orderController