import { useDragLayer } from 'react-dnd';

export default function CustomDragLayer() {
        const { isDragging,item, currentOffset } = useDragLayer((monitor) => ({
            isDragging:!!monitor.isDragging(),
            item: monitor.getItem(),
            currentOffset: monitor.getSourceClientOffset(),
        }));

        if (!isDragging || !currentOffset) {
            return null;
        }

        const style = {
            position: 'fixed',
            pointerEvents: 'none',
            left: currentOffset.x,
            top: currentOffset.y,
            transform: 'rotate(-90deg)',
            zIndex: 3,
        };

        return (
            <div className="tape" style={style}>
                <p>{item.title}</p>
            </div>
        );
    }