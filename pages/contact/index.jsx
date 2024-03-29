import Header from "@/components/Header/Header";
import Head from "next/head";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Input/TextArea";

export default function Contact (){
    const storeInfo = {
        name: "Fashion Forward",
        address: "123 Fashion Ave, New York, NY 10001, USA",
        telephone: "+1 234-567-8900",
        email: "contact@fashionforward.com",
        operatingHours: "Mon - Fri, 9:00 AM - 5:00 PM",
    };
    return(
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <div className="main">
                <div className="image-container">
                    <img className="image" src="../../contact.jpg" alt="Descriptive Alt Text"/>
                    <div className="text-overlay">Contact</div>
                </div>
                <div className="contact-us-container">
                    <h2>Contact Us</h2>
                    <div className="store-info">
                        <p><strong>Address:</strong> {storeInfo.address}</p>
                        <p><strong>Telephone:</strong> {storeInfo.telephone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${storeInfo.email}`}>{storeInfo.email}</a></p>
                        <p><strong>Operating Hours:</strong> {storeInfo.operatingHours}</p>
                    </div>
                    <div className="contact-form">
                        <h3>Send us a message</h3>
                        <form className="w-full">
                            <label htmlFor="name">Name:</label>
                            <Input type={"text"} id={"name"} name={"name"}></Input>

                            <label htmlFor="email">Email:</label>
                            <Input type={"email"} id={"email"} name={"email"}></Input>

                            <label htmlFor="message">Message:</label>
                            <TextArea id={"message"} name={"message"} rows={4}></TextArea>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .image-container {
                    position: relative;
                    text-align: center;
                    color: white;
                    width: 80%;
                }

                .image-container::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 5px;
                    border-radius: 20px;
                }

                /* Style the image (optional) */
                .image-container img {
                    width: 90%; /* or any specific dimensions */
                    border-radius: 20px;
                }

                .text-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    /* Additional styling for the text */
                    font-size: 3rem; /* Example size */
                    color: white; /* Text color */
                    z-index: 999;
                    opacity: 0.7;
                }
                .w-full{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                }

                .main {
                    font-family: "Josefin Sans", sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .contact-us-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                    
                    color: rgba(0, 0, 0, 0.6);
                }
                .contact-form{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .store-info, .contact-form {
                    margin-bottom: 20px;
                    color: rgba(0, 0, 0, 0.6);
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                }
                button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                }
                button:hover {
                    opacity: 0.8;
                }
                a{
                    color: rgba(0, 0, 0, 0.8);
                }

                @media (min-width: 1000px) {
                    .image-container img {
                        width: 50%; /* or any specific dimensions */
                        border-radius: 20px;
                    }
                }

            `}</style>
        </>
    );
}
