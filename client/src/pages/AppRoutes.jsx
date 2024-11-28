import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home";

import {CreateForm as CreateMonkey} from "./Monkey/CreateForm";
import {UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm";
import {View as ViewMonkey} from "./Monkey/View"
import {ViewAll as ViewAllMonkeys} from "./Monkey/ViewAll";
import {Created as CreatedMonkey} from "./Monkey/Created";

import {CreateForm as CreateAlbum} from "./Album/CreateForm";
import {UpdateForm as UpdateAlbum} from "./Album/UpdateForm";
import {View as ViewAlbum} from "./Album/View"
import {ViewAll as ViewAllAlbums} from "./Album/ViewAll";
import {Created as CreatedAlbum} from "./Album/Created";

import {CreateForm as CreateBook} from "./Book/CreateForm";
import {UpdateForm as UpdateBook} from "./Book/UpdateForm";
import {View as ViewBook} from "./Book/View"
import {ViewAll as ViewAllBooks} from "./Book/ViewAll";
import {Created as CreatedBook} from "./Book/Created";

import {CreateForm as CreateEvent} from "./Event/CreateForm";
import {UpdateForm as UpdateEvent} from "./Event/UpdateForm";
import {View as ViewEvent} from "./Event/View"
import {ViewAll as ViewAllEvents} from "./Event/ViewAll";
import {Created as CreatedEvent} from "./Event/Created";

import {CreateForm as CreateProduct} from "./Product/CreateForm";
import {UpdateForm as UpdateProduct} from "./Product/UpdateForm";
import {View as ViewProduct} from "./Product/View"
import {ViewAll as ViewAllProducts} from "./Product/ViewAll";
import {Created as CreatedProduct} from "./Product/Created";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                /* Monkey */
                <Route path="/monkey-create" element={<CreateMonkey />} />
                <Route path="/monkey-edit/:id" element={<UpdateMonkey />} />
                <Route path="/monkey-view/:id" element={<ViewMonkey />} />
                <Route path="/monkey-viewall" element={<ViewAllMonkeys />} />
                <Route path="/created-monkey/:id" element={<CreatedMonkey />} />

                /* Album */
                <Route path="/album-create" element={<CreateAlbum />} />
                <Route path="/album-edit/:id" element={<UpdateAlbum />} />
                <Route path="/album-view/:id" element={<ViewAlbum />} />
                <Route path="/album-viewall" element={<ViewAllAlbums />} />
                <Route path="/created-album/:id" element={<CreatedAlbum />} />

                /* Book */
                <Route path="/book-create" element={<CreateBook />} />
                <Route path="/book-edit/:id" element={<UpdateBook />} />
                <Route path="/book-view/:id" element={<ViewBook />} />
                <Route path="/book-viewall" element={<ViewAllBooks />} />
                <Route path="/created-book/:id" element={<CreatedBook />} />

                /* Event */
                <Route path="/event-create" element={<CreateEvent />} />
                <Route path="/event-edit/:id" element={<UpdateEvent />} />
                <Route path="/event-view/:id" element={<ViewEvent />} />
                <Route path="/event-viewall" element={<ViewAllEvents />} />
                <Route path="/created-event/:id" element={<CreatedEvent />} />

                /* Procuct */
                <Route path="/product-create" element={<CreateProduct />} />
                <Route path="/product-edit/:id" element={<UpdateProduct />} />
                <Route path="/product-view/:id" element={<ViewProduct />} />
                <Route path="/product-viewall" element={<ViewAllProducts />} />
                <Route path="/created-product/:id" element={<CreatedProduct />} />
            </Routes>
        </BrowserRouter>
    );
}