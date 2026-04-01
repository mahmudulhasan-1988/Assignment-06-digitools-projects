import { Trash2 } from 'lucide';
import React from 'react';
import { toast } from 'react-toastify';


const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([]);
        toast.success(`Payment successful! Total: $${totalPrice}`, {
            position: "top-right",
            autoClose: 3000,
        });
    };
    const handleRemove = (index) => {
        const newCarts = [...carts];
        newCarts.splice(index, 1);
        setCarts(newCarts);
        toast.error(`${carts[index].name} removed from cart!`, {
            position: "top-right",
            autoClose: 3000,
        });
        
 

    }
    return (
        <div>
            <h2 className='text-3xl font-bold mx-auto max-w-7xl'>Your Cart</h2>
            {
                carts.length === 0 ? <p className='text-gray-400 text-center font-bold mt-4'>Your cart is empty. Please add some products.</p> :

                    <>
                        <div>
                            {
                                carts.map((cart, index) => (
                                    <div key={index} className='flex items-center gap-8 border p-4 rounded-lg mt-4 shadow-lg border-gray-200 mx-auto max-w-7xl'>
                                        <div className='w-20 h-20 flex items-center justify-center rounded-full bg-base-200'>
                                            <img src={cart.icon} />
                                        </div>
                                        <div>
                                            <h3 className='text-2xl font-bold'>{cart.name}</h3>
                                            <p className='text-lg text-gray-400 mt-2'>{cart.description}</p>
                                            <p className='text-2xl font-bold mt-2'>${cart.price}</p>
                                        </div>
                                        <div className="ml-auto">
                                            <button onClick={() => handleRemove(index)} className='btn btn-error text-white'>Remove</button>
                                        </div>
                                    </div>

                                ))};


                        </div>
                        <div className='flex items-center justify-between gap-8 border p-8 rounded-lg mt-4 shadow-lg border-gray-200 mx-auto max-w-7xl bg-amber-50'>
                            <div className='text-3xl font-bold'>
                                <h2>Total :</h2>
                            </div>
                            <div>
                                <h2 className='text-4xl font-bold'>${totalPrice}</h2>
                            </div>
                        </div>
                        <div className='mx-auto max-w-7xl mt-10'>
                            <button onClick={handlePayment} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg w-full'>Proceed To Checkout</button>
                        </div>


                    </>
            }


        </div>
    );
};

export default Cart;