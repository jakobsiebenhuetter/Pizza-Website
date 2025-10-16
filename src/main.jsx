import React from "react";
import { createRoot } from "react-dom/client";
import SearchForm from './SearchForm/SearchForm.jsx';
import './tailwind.css';


createRoot(document.querySelector("form")).render(<SearchForm/>);

