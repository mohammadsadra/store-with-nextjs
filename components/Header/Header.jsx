export default function Header() {
    return (
        <div className="main">
            <div  style={{fontWeight: "bold", fontSize: "20px"}}>OurShop</div>
            <div className="buttons-container">
                <div>
                    Brands
                </div>
                <div>
                    OnSale
                </div>
            </div>
            <style jsx>{`
                .main {
                    font-family: "Josefin Sans", sans-serif;                    
                    padding: 30px 30px;
                    max-width: 100%;
                    display: flex;
                    flex-direction: row;
                    color: black;
                    background-color: white;
                    justify-content: space-between;
                }
                .buttons-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 150px;
                    cursor: pointer;
                }
            `}</style>

        </div>
    )
}