
export default function H4 ({children}) {
    return(
        <h4>
            {children}
            <style jsx>{`
              h4{
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.6;
                font-size:  1.728rem;
              }
            `}</style>
        </h4>
    );
}
