
export default function Cover() {
    return (
        <div className="main">
            <div className="children text-container">
                <div className="title">
                    FIND CLOTHES<br/>THAT MATCHES<br/>YOUR STYLE
                </div>

                <div className="text-wrapper">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </div>

            </div>
            <div className="children image-container">
                <img className="cover-image" src="../../cover.png" alt={'cover'}></img>
            </div>
            <style jsx>{`
                .main {
                    font-family: "Josefin Sans", sans-serif;
                    max-width: 100%;
                    display: flex;
                    flex-direction: row;
                    color: black;
                    background-color: white;
                    justify-content: space-between;
                }
                .children{
                    flex: 1;
                    width: 100%;
                    min-height: 100%;
                    background-color: #F2F0F1;
                }
                .title{
                    font-style: normal;
                    font-weight: bolder;
                    font-size: 50px;
                    color: #000000;
                    min-width: 100%;
                }
                .text-container{
                    padding-left: 40px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
                .text-wrapper{
                    margin-top: 20px;
                    width: 85%;
                    text-align: justify;
                    text-justify: inter-word;

                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;;

                    color: rgba(0, 0, 0, 0.6);


                }
                .image-container{
                    
                    min-height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;
                }
                .cover-image{
                    height: 250px;
                }
                .buttons-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 150px;
                    cursor: pointer;
                }
                @media (max-width: 580px) {
                    .main {
                        flex-direction: column;
                    }
                    .text-container{
                        padding: 10px!important;
                        align-items: center;
                        justify-content: center;
                    }
                    .image-container{
                        min-width: 100%;
                    }
                }
            `}</style>

        </div>
    )
}