import { 
    person,
    cartOutline,
    cashOutline,
    documentOutline,
    reloadOutline,
    lockClosedOutline,
    cloudUploadOutline,
    addOutline
} from "ionicons/icons"

import { buttonColors } from "../../../../shared/enums"
import { IDefaultButton } from "../../../interfaces/default-button"

export const buttonsContent:IDefaultButton[] = [
    {
        text: "Autenticar ERP",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: person,
        route: "/home/product-manager/authenticate",
    },
    {
        text: "Vender na Feira",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: cartOutline,
        route: "",
    },
    {
        text: "Venda Balcão (PDV)",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: cashOutline,
        route: "",
    },
    {
        text: "Gerar Catálogo",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: documentOutline,
        route: "",
    },
    {
        text: "Ver Catálogos",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: documentOutline,
        route: "",
    },
    {
        text: "Status por Categoria",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: reloadOutline,
        route: "",
    },
    {
        text: "Bloquear Todos",
        backgroundColor: buttonColors.VERMELHO,
        icon: lockClosedOutline,
        route: "",
    },
    {
        text: "Bloquear Tamanhos Sem Estoque",
        backgroundColor: buttonColors.VERMELHO,
        icon: lockClosedOutline,
        route: "",
    },
    {
        text: "Exportação ERP",
        backgroundColor: buttonColors.VERDE_ESCURO,
        icon: cloudUploadOutline,
        route: "",
    },
    {
        text: "Ativar todos",
        backgroundColor: buttonColors.AZUL,
        icon: lockClosedOutline,
        route: "",
    },
    {
        text: "Novo",
        backgroundColor: buttonColors.VERDE_CLARO,
        icon: addOutline,
        route: "",
    },
]