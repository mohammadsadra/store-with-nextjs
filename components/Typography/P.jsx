export default function P ({children}) {
    return(
        <p>
            {children}
            <style jsx>{`
              p{
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.6;
                font-size:  1rem;
              }
            `}</style>
        </p>
    );
}
