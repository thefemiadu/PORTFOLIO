import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import Aos from 'aos';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  return (
    <div id = "Projects" className="p-20 flex flex-col items-center justify-center ">
      <h1 data-aos= "fade-right" className="text-[35px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <img data-aos = "fade-up" height= {300} width= {250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36  border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
        <img data-aos = "fade-down" height= {300} width= {250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36  border-2 border-fuchsia-800 b_glow" src={img2} alt="" />
        <img data-aos = "fade-up" height= {300} width= {250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36  border-2 border-fuchsia-800 b_glow" src={img3} alt="" />
        <img data-aos = "fade-down" height= {300} width= {250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl border-2 border-fuchsia-800 b_glow" src={img4} alt="" />
      </div>
    </div>
  )
}

export default Projects
