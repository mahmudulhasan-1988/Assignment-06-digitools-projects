import React, { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';

const PricingCart = ({ model, carts, setCarts  }) => {
  const [selectedCard, setSelectedCard] = useState(false);

  const handleCart = ()=> {
    setSelectedCard(true);
    const isAlreadyInCart = carts.some(cart => cart.id === model.id);
    if(isAlreadyInCart){
      toast.info(`${model.name} is already in the cart!`, {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    setCarts([...carts,model]);
    toast.success(`${model.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="rounded-lg shadow-lg p-6 border border-gray-200 mx-auto max-w-7xl p hover:shadow-2xl transition-shadow duration-300">

      <div className="flex justify-end mb-4 ">
        <p className="btn bg-amber-200 text-black rounded-full px-3 py-1 text-sm font-semibold ">
          {model.tag}
        </p>
      </div>

      <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-base-200">
        <img src={model.icon} alt={model.name} />
      </div>

      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
      <p className="text-gray-500">{model.description}</p>

      <h3 className="text-xl font-bold mt-3 mb-3">
        ${model.price}
        <span className="text-gray-500 text-sm">{model.period}</span>
      </h3>

      <div className="space-y-2">
        {model.features.map((feature, index) => (
          <p key={index} className="flex items-center gap-2 text-gray-500">
            <IoCheckmark className="text-green-500" />
            {feature}
          </p>
        ))}
      </div>

       <button
        onClick={handleCart}
        className= {`btn mt-4 rounded-full w-full text-white transition-all ${selectedCard ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>
        {selectedCard ? "Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default PricingCart;