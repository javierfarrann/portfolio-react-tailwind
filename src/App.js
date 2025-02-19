import Header from "./components/header"
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {
    useEffect(() => {
        Aos.init()
    },[

    ])
    return (
    <div>
    <Header/>
    <Navigation />
    <Banner />
    <Profile />
    <Portfolio />
    <Footer />
    </div>
    )
}

export default App
