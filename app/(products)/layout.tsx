import { ReactNode } from "react";
import Navbar from "../components/Layouts/Navbar";

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <main>
        <Navbar navabarFor="products"/>
        {children}
    </main>
  )
}
