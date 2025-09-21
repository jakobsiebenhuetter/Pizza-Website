import React from "react";
import { createRoot } from "react-dom/client";
import SearchForm from './SearchForm/SearchForm.jsx';

createRoot(document.querySelector("form")).render(<SearchForm/>);

