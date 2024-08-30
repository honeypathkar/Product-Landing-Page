import React from "react";

function Product({ imageSrc, name, price }) {
  return (
    <div class="flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
        <img src={imageSrc} alt={name} />
      </div>
      <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {price}
        </p>
      </div>
      <div class="p-6 pt-0">
        <button className="btn btn-outline-dark">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
