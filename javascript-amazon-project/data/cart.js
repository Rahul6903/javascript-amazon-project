export const cart=[]

export function addToCart(productId){
    if (cart.some(item=>item.productId===productId)) {
        cart.find(item=>item.productId===productId).quantity++;
    }
    else{
        cart.push({
            productId:productId,
                quantity:1
            });
        }
        
    
}