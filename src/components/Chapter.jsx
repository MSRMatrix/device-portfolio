const Chapter = ({title, children}) => {

    return (

        <section className="chapter">

            <h1>
                {title}
            </h1>


            <div>
                {children}
            </div>

        </section>

    );

};


export default Chapter;