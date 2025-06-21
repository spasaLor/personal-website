import { useDrop } from "react-dnd";
import "../src/styles/mobile.css";

export default function Mobile({tape,resetTape,setTape}){
    const[{canDrop,isOver},drop]=useDrop(()=>({
        accept:'TAPE',
        collect: (monitor)=>({
            canDrop:monitor.canDrop(),
            isOver:monitor.isOver()
        }),
        drop:(item)=>{
            setTape(item);
        } 
    }))

    const style = {color: canDrop && isOver ? "green" : undefined};
    
    const handleTvClick = ()=>{
        if(tape)
            window.open(tape.link,"_blank");
    }

    return(
        <>
            <div id="audiovox">
                <div id="audiovox-screen" onClick={handleTvClick}>
                    <div className="scanlines"></div>
                    <div className="content">
                        { tape ?( tape.type === 'img' ? <img src={tape.img} alt="tape content"/> : <tape.content/>) : <div id="default"> <p >NO SIGNAL</p> </div>}
                    </div>
                </div>
                <div className="enter" ref={drop} style={style}>
                    <p>CASSETTE PLAYER</p>
                </div>
                <div className="controls">
                    <div id="power">
                        <p>POWER</p>
                        <div className="button"></div>
                    </div>
                    <div id="play">
                        <p>PLAY</p>
                        <div className="button"></div>
                    </div>
                    <div id="stop">
                        <p>STOP/EJECT</p>
                        <div className="button" onClick={resetTape}></div>
                    </div>
                </div>
                <div className="speaker"></div>
            </div>
        </>
    );
}