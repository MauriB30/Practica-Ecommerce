import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';


export default function ListProducts({products}) {
    const [product, setProduct] = useState(null);
    return (
        <>
            <div className='grid grid-cols-4 justify-items-center gap-32 p-4 w-full h-fit ml-20 mt-10'>
                {
                    products.length === 0 ? (
                    <p>Loading</p>
                    ) : (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} showProduct={setProduct} ></ProductCard>
                    ))
                    )
                }
            </div>
            <ProductDetail product={product} showProduct={setProduct}></ProductDetail>
        </>
    )
}
