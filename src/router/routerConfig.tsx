import {createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";
import Home from "../components/Home/Home";
import Product from "../components/Product/Product";
import Products from "../components/Products/Products";
import NotFound from "../components/NotFound/NotFound";
import React from "react";

enum Routes {
    HOME = '/',
    PRODUCTS = '/products',
    PRODUCT = '/products/:id',
    NOTFOUND = '*'
}

export const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={Routes.HOME} element={<Home />} />
            <Route path={Routes.PRODUCTS} element={<Products />} />
            <Route path={Routes.PRODUCT} element={<Product />} />
            <Route path={Routes.NOTFOUND} element={<NotFound />} />
        </Route>
    )
);
