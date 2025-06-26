import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <>
      <RouterProvider>
        <Header />
        <Router />
      </RouterProvider>
    </>
  );
}

export default App;
