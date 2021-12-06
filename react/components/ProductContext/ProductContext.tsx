import React from 'react'
import { useProduct } from "vtex.product-context"
import { useQuery } from 'react-apollo'

import producto from '../../graphql/product.graphql'

const ProductContext = () => {
    const product = useProduct()
    const {data} = useQuery(producto, {
        variables: {
            idProduct: product?.product?.productId
        }
    })

    console.log("Consulta GraphQL:", data)
    
    return (
        <div>
            <p> Id Product {product?.product?.productId}</p>
        </div>
    )
}

export default ProductContext
