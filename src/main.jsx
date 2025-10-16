import React from "react";
import { StrictMode } from "react";
import ReactDOM  from "react-dom/client";
import SearchForm from './SearchForm/SearchForm.jsx';


ReactDOM.createRoot(document.querySelector("form")).render(
    <StrictMode><SearchForm/></StrictMode>
);
