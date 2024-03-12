
export default function H1 ({children}) {
    return(
        <h1>
            {children}
            <style jsx>{`
              h1{
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.6;
                font-size: 2.986rem;
              }
            `}</style>
        </h1>
    );
}
