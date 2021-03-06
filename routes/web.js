//ROUTES FILE: all the web related routes

const homeController=require("../app/http/controllers/homeController")
const authController=require("../app/http/controllers/authController")
const cartController=require("../app/http/controllers/customers/cartController")
const orderController=require("../app/http/controllers/customers/orderController")
const adminOrderController=require("../app/http/controllers/admin/orderController")
const statusController=require("../app/http/controllers/admin/statusController")

//middlewares
const admin = require("../app/http/middlewares/admin")
const guest = require("../app/http/middlewares/guest")
const auth = require("../app/http/middlewares/auth")


//routes
function initRoutes(app){
    app.get('/',homeController().index); 

    app.get('/login', guest, authController().login);
    app.post('/login',authController().postlogin) 

    app.get('/register', guest, authController().register);
    app.post('/register',authController().postRegister)

    app.post('/logout',authController().logout)


    app.get('/cart',cartController().cart);
    app.post('/update-cart',cartController().update)    

  
    // Customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customers/orders', auth,  orderController().index)
    app.get('/customers/orders/:id', auth,  orderController().show)  

     // admin routes
     app.get('/admin/orders', admin, adminOrderController().index)
     //admin/order/status
     app.post('/admin/order/status', admin, statusController().update)
}

module.exports=initRoutes

