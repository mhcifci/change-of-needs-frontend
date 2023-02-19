import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
    return (
        <div className="container">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
}