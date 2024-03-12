
export default function SizeButton ({children}) {
    return(
        <div className="size-button">
            {children}
            <style jsx>{`
              .size-button{
                font-family: "Josefin Sans", sans-serif;
                padding: 10px 15px;
                border-radius: 20px;
                background-color: #F0F0F0;
                text-align: center;
              }
            `}</style>
        </div>
    );
}
