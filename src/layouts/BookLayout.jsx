import { Outlet } from "react-router-dom";

import Book from "@/components/Book";
import Navigation from "@/components/Navigation";


const BookLayout = () => {

    return (
        <div className="book-layout">

            <Book>

                <Navigation />

                <Outlet />

            </Book>

        </div>
    );
};


export default BookLayout;