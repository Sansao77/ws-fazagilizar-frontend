import { IonButton } from "@ionic/react";
import { buttonColors } from "../../shared/enums";
import type {ComponentProps} from 'react';

export interface IDefaultButton extends ComponentProps<typeof IonButton>{
    id?: string
    text?: string,
    icon: string,
    iconOnly?: boolean,
    backgroundColor: buttonColors,
    route?: string,
}

export interface IDefaultTag{
    text: string,
    backgroundColor: buttonColors;
}