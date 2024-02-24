import { useRouter } from 'next/router';
import {useProduct} from "@/ProductProvider";

export default function ProductCard ({product}) {
    const { setProduct } = useProduct();
    const router = useRouter();

    const handleClick = (p) => {
        setProduct(p); // Set the current product in the global state
        router.push('/productDetail'); // Navigate to the detail page
    };
    return(
        <div className="main" onClick={()=>{handleClick(product)}}>
            <div className="image-container">
                <img className="image" src={product.image} alt={'product'}/>
            </div>
            <div className="card-title">{product.name}</div>
            <div className="price">${product.price}</div>
            <style jsx>{`
                .image-container{
                    
                }
                .image{
                    width: 200px;
                }
                .main {
                    font-family: "Josefin Sans", sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                }
                .card-title{
                    margin-top: 10px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #000000;
                }
                .price{
                    margin-top: 5px;
                    font-weight: 700;
                    color: #000000;
                    font-size: 16px;
                }
                
            `}</style>
        </div>
    );
}