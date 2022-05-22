import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";

const Tool = ({ tool }) => {

    const { image, name, description, min_order_quantity, available_quanity, price } = tool;
    return (
        <div>
            <div class="card h-full bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="" class="rounded-xl h-[200px]"></img>
                </figure>
                <div class="card-body items-left text-left">
                    <h2 class="card-title">{name}</h2>
                    <ReactReadMoreReadLess
                        charLimit={150}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                    {description}
                    </ReactReadMoreReadLess>
                    
                    <p>Minimum order: {min_order_quantity}</p>
                    <p>Avialable: {available_quanity}</p>
                    <p>Price: {price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;