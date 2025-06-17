import "../src/styles/mobile.css";
import { useDroppable } from "@dnd-kit/core";

export default function Mobile({tape,resetTape}){
    const {isOver,setNodeRef} = useDroppable({id:'droppable'});
        const style = {color: isOver ? "green" : undefined};
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
                <div className="enter" ref={setNodeRef} style={style}>
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