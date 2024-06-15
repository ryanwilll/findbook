import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { BookDetails } from "../pages/BookDetails";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book-details/:id' element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
