import './EraButton.css';

interface EraButtonProps {
    name: string;
    color: string;
}

function EraButton({ name, color }: EraButtonProps) {

    return (
        <button className="button">
            <span className="button_lg" style={{color: color, borderColor: color, border: '2px solid'}}>
                <span className="button_sl" style={{ backgroundColor: color }}></span>
                <span className="button_text">{name}</span>
            </span>
        </button>
    )

}

export default EraButton;