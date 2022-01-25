import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../HttpRequests';

function Product() {
    const { id } = useParams()
    const url = `https://61785c80bb979200171ff6ce.mockapi.io/products/${id}`

    let product = useAxiosGet(url)

    let content = null

    if (product.error) {
        content = <p>
            There was an error please refresh or try  again
        </p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                    />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default Product;