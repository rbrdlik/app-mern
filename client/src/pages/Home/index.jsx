import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <h1>Home</h1>

            <h3>Monkey</h3>
            <Link to={"/monkey-create"}>
                <p>Add new monkey</p>
            </Link>
            <Link to={"/monkey-viewall"}>
                <p>Monkey list</p>
            </Link>

            <h3>Album</h3>
            <Link to={"/album-create"}>
                <p>Add new album</p>
            </Link>
            <Link to={"/album-viewall"}>
                <p>Album list</p>
            </Link>

            <h3>Book</h3>
            <Link to={"/book-create"}>
                <p>Add new book</p>
            </Link>
            <Link to={"/book-viewall"}>
                <p>Book list</p>
            </Link>

            <h3>Event</h3>
            <Link to={"/event-create"}>
                <p>Add new event</p>
            </Link>
            <Link to={"/event-viewall"}>
                <p>Event list</p>
            </Link>

            <h3>Product</h3>
            <Link to={"/product-create"}>
                <p>Add new product</p>
            </Link>
            <Link to={"/product-viewall"}>
                <p>Product list</p>
            </Link>
        </>
    );
}