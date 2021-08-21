const Order = require('../../../models/order')

function statusController() {
    return {
        update(req, res) {

            // order id with its details are recieved
            Order.updateOne({_id: req.body.orderId}, { status: req.body.status }, (err, data)=> {
                if(err) {
                    return res.redirect('/admin/orders')
                }
                
                //
                //emitevent
               
                //Updates the changes made in order status to socket
                const eventEmitter = req.app.get('eventEmitter')
                eventEmitter.emit('orderUpdated', { id: req.body.orderId, status: req.body.status })
                return res.redirect('/admin/orders')
            })
        }
    }
}

module.exports = statusController