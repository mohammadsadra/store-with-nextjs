
export default function AddToCartButton () {
    return(
        <div className="add-button">
            Add to Cart
            <style jsx>{`
              .add-button{
                font-family: "Josefin Sans", sans-serif;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 16px 54px;
                gap: 12px;
                color: white;
                background: #000000;
                border-radius: 62px;
              }
            `}</style>
        </div>
    );
}
