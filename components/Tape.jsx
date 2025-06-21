import { useDrag } from "react-dnd";
import "../src/styles/tape.css";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export default function Tape({data}){
    const [{isDragging},drag,preview]=useDrag(()=>({
        type:'TAPE',
        item:data,
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        })        
    }));

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);


    return(
        <div className="tape" ref={drag} style={isDragging ? {opacity:0}:undefined}>
            <p>{data.title}</p>
        </div>
    );
}