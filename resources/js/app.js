const axios=require('axios');
const Noty=require('noty');
let addToCart= document.querySelectorAll('.addto-cart')
let cartCounter=document.querySelector('#cartCounter')

function updateCart(brownie){
    //post request
    axios.post('/update-cart',brownie).then(res=>{
        new Noty({
            type:'success',
            timeout:1000,
            progressBar:false,
            text:'item added to cart',
        }).show();
        cartCounter.innerText = res.data.totalQty
    }).catch(err=>{
        new Noty({
            type:'error',
            timeout:1000,
            progressBar:false,
            text:'something went wrong',
        }).show();
    })
}


addToCart.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let brownie =JSON.parse(btn.dataset.brownie)
        updateCart(brownie)
        console.log(brownie)
    })
})