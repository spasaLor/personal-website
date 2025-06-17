import Tape from "./Tape";
import "../src/styles/shelf.css"

export default function Shelf({tapes,active}){
    const toRender = active ? tapes.filter(item => item.id !== active.id) : tapes;
    return(
        <div className="shelf">
            {toRender.map(item=>(
                <Tape key={item.id} data={item}/>
            ))}
        </div>
    );
}