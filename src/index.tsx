import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@govbr-ds/core/dist/core.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DatePickerPage from "./pages/DatePicker";
import SelectPage from "./pages/Select";

// Add routes to project
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/datepicker",
    element: <DatePickerPage />,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
