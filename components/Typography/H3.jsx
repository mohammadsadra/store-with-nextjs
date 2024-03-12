
export default function H3 ({children}) {
    return(
        <h3>
            {children}
            <style jsx>{`
              h3{
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.6;
                font-size:  2.074rem;
              }
            `}</style>
        </h3>
    );
}
