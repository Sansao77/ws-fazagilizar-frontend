import { buttonColors } from "../../shared/enums";

export interface IDefaultButton{
    text: string,
    icon: string,
    iconOnly?: boolean,
    backgroundColor: buttonColors,
    route?: string,
}