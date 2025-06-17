import "../src/styles/tape.css";
import { useDraggable } from "@dnd-kit/core";

export default function Tape({data}){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: data.id,
        data:data,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(-90deg)`,
        zIndex:3,
    } : undefined;

    return(
        <div className="tape" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <p>{data.title}</p>
        </div>
    );
}