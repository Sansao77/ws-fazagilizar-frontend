import './store-component.scss'

interface Props{
    name: string,
    value: number,
    color: string
}

const StoreComponent: React.FC<Props> = ({name, value, color}) =>{
    return (
        <div className="store-component">
            <div className="color-bar" style={{'backgroundColor': color}}/>

            <div className="store-data">
                <span className="name">{name}</span>
                <span>R$ {value}</span>
            </div>
        </div>
    )
};

export default StoreComponent;