import './buttonDefault.scss'

export type ButtonDefaultProps = {
    label?: string;
    onclick?: any;
    color?: string;
    icon?: any;
    strongColor?: string;
}

export function ButtonDefault({ label, onclick, color, icon, strongColor }: ButtonDefaultProps) {
    return (
        <button
            onClick={onclick}
            className="buttonAction"
            style={{ backgroundColor: `${color}` }}
        >
            {icon && <span className="icon-container" style={{ backgroundColor: `${strongColor}` }}>{icon}</span>}
            {label}
        </button>
    );
}
