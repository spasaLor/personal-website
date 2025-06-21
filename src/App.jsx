import Shelf from '../components/Shelf'
import Tv from '../components/Tv'
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Mobile from '../components/Mobile.jsx';
import Footer from '../components/Footer.jsx';
import CustomDrag from '../components/CustomDrag.jsx';
import './App.css'
import {tapes} from "./tapes.jsx";
import { useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [selectedTape,setSelectedTape] = useState();
  const infoTapes = tapes.filter(item=>item.id>=7);
  const projectTapes = tapes.filter(item=>item.id<7);
  const mainRef = useRef();

  function useMediaQuery(query) {
    const [isMobile,setIsMobile] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setIsMobile(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [query]);

    return isMobile;
  }

  const resetTape = ()=>{
    setSelectedTape();
  }

  const handleClick = ()=>{
    if(mainRef.current)
      mainRef.current.scrollIntoView({behavior:'smooth'})
  }

  const mobile = useMediaQuery("(max-width:1000px)");
  return (
      <>
        <Hero handleClick={handleClick}/>
        <div id='main-container' ref={mainRef}>
          <DndProvider backend={mobile ? TouchBackend : HTML5Backend} options={{enableMouseEvents: true}}>
              {mobile ? <Mobile tape={selectedTape} resetTape={resetTape} setTape={setSelectedTape}/> :<Tv tape={selectedTape} resetTape={resetTape} setTape={setSelectedTape}/>}
                <div className="shelves">
                    <Shelf tapes={projectTapes} active={selectedTape}/>
                    <Shelf tapes={infoTapes} active={selectedTape}/>
                </div>        
            <CustomDrag/>    
          </DndProvider>
        </div>
        <Skills/>
        <Footer/>
      </> 
    )
}

export default App
