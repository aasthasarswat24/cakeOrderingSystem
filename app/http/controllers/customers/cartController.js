function cartController() {
        return{ 
        cart(req,res) {
            res.render("customers/cart")
        },
        update(req,res){
            /* let cart={
                items:{
                    brownieId:{item:brownieObject, qty:0},
                },
                totalQty:0,
                totalPrice:0
            }*/

            
            //for the first time creating cart and adding basic object structure
            if(! req.session.cart){
                req.session.cart = {
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
            }
            let cart = req.session.cart

            //checking if items doesnot exists in the cart if not add it and if yes then icrease its quantity by 1
            if(!cart.items[req.body._id]) {
                cart.items[req.body._id] = {
                    items:req.body,
                    qty: 1
                }
            cart.totalQty = cart.totalQty + 1;
            cart.totalPrice= cart.totalPrice + req.body.price
            }else{
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice=cart.totalPrice+req.body.price
            }
            return res.json({totalQty:req.session.cart.totalQty})
        }
    }
}

module.exports= cartController