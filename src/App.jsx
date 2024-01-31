import { useState, useEffect } from 'react';
import About from "./Components/About";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Vortex } from "react-loader-spinner";

const App = () => {
const [loading,setLoading] = useState(false);
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  },2000)
},[])
  return (
    <>
     {
       loading ?
       <div className="bg-slate-900 h-[100vh] flex justify-center items-center">           
            <Vortex
              visible={true}
              height="80"
              color="#ebe5e9"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              
            />
        </div>
         :
     
          <div className="bg-slate-900" >
            <Nav />
            <Banner />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </div>

     }     
    </>
     
  );
};

export default App
