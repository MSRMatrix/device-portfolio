const Book = ({ children }) => {

    return (
        <div className="book">

            <div className="book-page">

                {children}

            </div>

        </div>
    );

};


export default Book;