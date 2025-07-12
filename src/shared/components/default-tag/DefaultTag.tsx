import { IDefaultTag } from '../../../modules/interfaces/default-button';
import { IonChip } from "@ionic/react";

interface Props extends IDefaultTag{};

const DefaultTag:React.FC<Props> = ({text, backgroundColor, ...rest}:Props) =>{
    return (
        <IonChip 
        mode='md' 
        style={{'backgroundColor': backgroundColor, 'textTransform':'uppercase', 'cursor':'auto'}}
        {...rest}
        >
            {text}
        </IonChip>
    )
}

export default DefaultTag;