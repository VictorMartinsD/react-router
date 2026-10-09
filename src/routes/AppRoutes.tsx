import { Route, Routes } from "react-router";
import { Home } from "@/pages/Home";
import { Details } from "@/pages/Details";
import { Products } from "@/pages/Product";
import { NotFound } from "@/pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
