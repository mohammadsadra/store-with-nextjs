import Link from "next/link";

export default function Header() {
    return (
        <div className="main">
            <div  style={{fontWeight: "bold", fontSize: "20px"}}>OurShop</div>
            <div className="buttons-container">
                <Link href={'/about'}>
                    <div className="button">
                        About
                    </div>
                </Link>
                <div>
                    Contact
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
                .button{
                    color: black;
                    text-decoration: none!important;
                }
                a {
                    text-decoration: none; /* Removes underline */
                    color: black; /* Sets color to black, or use 'inherit' to inherit from parent */
                }
            `}</style>

        </div>
    )
}