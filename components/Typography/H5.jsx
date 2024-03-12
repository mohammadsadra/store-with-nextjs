export default function H5 ({children}) {
    return(
        <h5>
            {children}
            <style jsx>{`
              h5{
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.6;
                font-size:  1.44rem;
              }
            `}</style>
        </h5>
    );
}
