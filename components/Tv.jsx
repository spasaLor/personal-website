import { useDrop } from "react-dnd";
import "../src/styles/tv.css";

export default function Tv({tape,resetTape,setTape}){
    const[{canDrop,isOver}, drop]=useDrop(()=>({
        accept:'TAPE',
        drop:(item)=>{
            setTape(item);
        },
        collect: (monitor)=>({
            isOver:monitor.isOver(),
            canDrop:monitor.canDrop(),
        }),
    }))

    const style = {color: canDrop && isOver ? "green" : undefined};
    const handleTvClick = ()=>{
        if(tape)
            window.open(tape.link,"_blank");
    }

    return(
        <div className="container">
            <div className="vcr-container">
                <div className="screen" onClick={handleTvClick}>
                    <div className="vcr"></div>
                    <div className="scanlines"></div>
                    <div className="snow"></div>
                    <div className="vignette"></div>
                    <div className="wobble"></div>
                    <div className="content">
                    { tape ?( tape.type === 'img' ? <img src={tape.img} alt="tape content"/> : <tape.content/>) : <div id="default"> <p >NO SIGNAL</p> </div>}
                    </div>
                </div>
            </div>
            <div className="vcr-reader">
                <div className="enter" ref={drop} style={style}>
                     <p id="vhs" >VHS</p> 
                     <p>Enter Tape</p>
                </div>
                <div id="left">
                    <div id="power">
                        <p>Power</p>
                        <div className="button"></div>
                    </div>
                    <div id="bottom">
                        <div id="eject" onClick={resetTape}>
                            <p>Stop/Eject</p>
                            <div className="button"></div>
                        </div>
                        <div id="play">
                            <p>Play</p>
                            <div className="button"></div>
                        </div>
                    </div>
                    
                </div>
                <div className="vcr-jacks">
                    <div className="jack red"></div>
                    <div className="jack white"></div>
                    <div className="jack yellow"></div>
                </div>
            </div>
        </div>
    );
}