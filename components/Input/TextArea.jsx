
export default function TextArea ({ id, name, rows, placeholder }) {
    return(
        <div className="add-button">
            <textarea id={id} name={name} rows={rows} placeholder={placeholder} required />
            <style jsx>{`
              textarea {
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
