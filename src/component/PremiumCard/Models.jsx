import React, { use } from "react";
import PricingCart from "./PricingCart";

const Models = ({ modelPromise, carts, setCarts, handleAddToCart, selectedCard, setSelectedCard }) => {
  const models = use(modelPromise);

  return (
    <div>
 
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
        {models.map((model) => (
          <PricingCart key={model.id} model={model} carts={carts} setCarts={setCarts} handleAddToCart={handleAddToCart} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
        ))}
      </div>
    </div>
  );
};

export default Models;