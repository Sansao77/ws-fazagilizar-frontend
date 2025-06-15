import { IDefaultTag } from '../../../modules/interfaces/default-button';
import { IonChip } from "@ionic/react";

interface Props extends IDefaultTag{};

const DefaultTag:React.FC<Props> = ({text, backgroundColor}:Props) =>{
    return (
        <IonChip mode='md' style={{'backgroundColor': backgroundColor, 'textTransform':'uppercase', 'cursor':'auto'}}>
            {text}
        </IonChip>
    )
}

export default DefaultTag;