import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useToolsDetails from '../Shared/Hook/useToolsDetails';

const Purchase = () => {
    const { id } = useParams()
    const [tools] = useToolsDetails(id);
    const [price, setPrice] = useState('')

    // Increase
    const [minOrder, setMinOrder] = useState()
    const increaseRef = useRef();

    useEffect(() => {
        setMinOrder(tools.min_order_quantity)
        setPrice(tools.price * tools.min_order_quantity)
    }, [tools])



    const handleIncrease = (e) => {
        const inputNum = parseInt(increaseRef.current.value);

        e.preventDefault();
        const updatedQuantity = minOrder + inputNum ;
        setMinOrder(updatedQuantity)

        const updatedPrice = inputNum * tools.price;
        const newPrice = price + updatedPrice;
        setPrice(newPrice)
        // const url = `http://localhost:5000/increase/${id}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(increasedQuantity)


        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('success', data)
        //         alert('Quantity updated')
        //     })





    }
    
    const handleDecrease = (e) => {
        const inputNum = parseInt(increaseRef.current.value);

        e.preventDefault()
        const updatedQuantity = minOrder - inputNum;
        setMinOrder(updatedQuantity)
        const updatedPrice = inputNum * tools.price;
        const newPrice = price - updatedPrice;
        setPrice(newPrice)
        // const url = `http://localhost:5000/decrease/${id}`;
        // fetch(url,{
        //     method: 'PUT',
        //     headers: {
        //             'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(decreasedQuanitty)

        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log('sucess', data);
        //     alert('Quantity Decreased')
        // })

    }

    return (
        <div>
            <div className='flex  justify-evenly items-center'>
                <div class="leading-loose">
                    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                        <p class="text-gray-800 font-medium">Customer information</p>
                        <div class="">
                            <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                            <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                        </div>
                        <div class="mt-2">
                            <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                            <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                        </div>
                        <div class="mt-2">
                            <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                        </div>
                        <div class="mt-2">
                            <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                        </div>
                        <div class="inline-block mt-2 w-1/2 pr-1">
                            <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                        </div>
                        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
                        </div>
                        <p class="mt-4 text-gray-800 font-medium">Payment information</p>
                        <div class="">
                            <label class="block text-sm text-gray-600" for="cus_name">Card</label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                        </div>
                        <div class="mt-4">
                            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
                        </div>
                    </form>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='' src={tools.image} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {tools.name}
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div>
                                <p> Price:{price}</p>
                                <p>Min Order: {minOrder}</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center mb-6'>
                            <form>
                                <input type="number" ref={increaseRef} placeholder='Increase Quantity' className='border-2 border-solid' />
                                <button onClick={(e) => handleIncrease(e, id)} type="submit">Increase</button>
                                <button onClick={(e) => handleDecrease(e,id)} type="submit">Decrease</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Purchase;