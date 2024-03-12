
export default function Input ({type, id, name, placeholder}) {
    return(
        <div className="add-button">
            <input type={type} id={id} name={name} placeholder={placeholder} required />
            <style jsx>{`
              input {
                font-family: "Josefin Sans", sans-serif;
                width: 100%;
                margin-bottom: 20px;
                padding: 10px;
                border: 1px solid #e0e0e0;
                border-radius: 15px;
              }
            `}</style>
        </div>
    );
}
