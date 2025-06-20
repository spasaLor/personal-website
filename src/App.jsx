import { DndContext } from '@dnd-kit/core';
import Shelf from '../components/Shelf'
import Tv from '../components/Tv'
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Mobile from '../components/Mobile.jsx';
import Footer from '../components/Footer.jsx';
import './App.css'
import {tapes} from "./tapes.jsx";
import { useEffect, useRef, useState } from 'react';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';

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

  const handleDragEnd = (e)=>{
    if(e.over && e.over.id == 'droppable'){
      setSelectedTape(e.active.data.current);
    }
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
          <DndProvider backend={TouchBackend} options={{enableMouseEvents: true}}>
              <DndContext onDragEnd={handleDragEnd}> 
              {mobile ? <Mobile tape={selectedTape} resetTape={resetTape}/> :<Tv tape={selectedTape} resetTape={resetTape}/>}
                <div className="shelves">
                    <Shelf tapes={projectTapes} active={selectedTape}/>
                    <Shelf tapes={infoTapes} active={selectedTape}/>
                </div>            
            </DndContext>
          </DndProvider>
          
        </div>
        <Skills/>
        <Footer/>
      </> 
    )
}

export default App
