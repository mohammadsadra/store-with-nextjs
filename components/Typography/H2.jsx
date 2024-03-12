
export default function H2 ({children}) {
    return(
        <h2>
            {children}
            <style jsx>{`
              h2{
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.6;
                font-size:  2.488rem;
              }
            `}</style>
        </h2>
    );
}
