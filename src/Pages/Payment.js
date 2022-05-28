import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4QQsERDLJxAF3AaZsoioKuyniPLmR29W52lc19dOkQj3heo4K3I1CYy7795PEMT7QQmc9puOYzUW2I7xu1BCrE0050ryWVpT')

const Payment = () => {
    const { id } = useParams();
    
    const url = `http://localhost:5000/order/${id}`
    const { data, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",

    }).then(res => res.json()))

    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <div className="ml-10">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 className="text-success text-2xl">Hello {data.name},</h3>
                        <h2 className="text-2xl font-semibold">Your Product Name :</h2>
                        <h2 class="card-title">{data.toolsName}</h2>

                        <div class="card-actions justify-start">
                            <p>Your Product Quantity : {data.minQuantity}</p>
                            <p>Pleasae Pay : {data.price} $</p>


                        </div>
                        <div className='mt-5'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm data={data} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;