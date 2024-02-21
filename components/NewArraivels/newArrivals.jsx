import ProductCard from "@/components/productCard/productCard";

export default function NewArrivals() {

    return (
        <>
            <div className="main">
                <div className="title">
                    NEW ARRIVALS
                </div>
                <div className="card-container">
                    <ProductCard image={'../../1.png'} name={'SLEEVE STRIPED T-SHIRT'} price={10.99} />

                    <ProductCard image={'../../2.png'} name={'T-SHIRT WITH TAPE DETAILS'} price={10.99} />

                    <ProductCard image={'../../3.png'} name={'SKINNY FIT JEANS'} price={10.99} />

                    <ProductCard image={'../../4.png'} name={'CHECKERED SHIRT'} price={10.99} />
                </div>
            </div>
            <style jsx>{`
                .main {
                    font-family: "Josefin Sans", sans-serif;
                    padding: 20px 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .title {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 48px;
                    line-height: 58px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #000000;
                }
                .card-container{
                    max-width: 100%;
                    overflow-x: auto;
                    display: flex;
                    flex-direction: row;
                    align-items: start;
                    
                    gap: 15px;
                }
                @media (max-width: 580px) {
                    .title{
                        font-size: 32px;
                    }
                }
            `}</style>
        </>
    )
}