export default function ProductCard ({image, name, price}) {
    return(
        <div className="main">
            <div className="image-container">
                <img className="image" src={image} alt={'product'}/>
            </div>
            <div className="card-title">{name}</div>
            <div className="price">${price}</div>
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