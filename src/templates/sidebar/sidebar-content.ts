import { IMenuItem } from "../../interfaces/sidebar";
import {addOutline, briefcaseOutline, cogOutline, fileTrayFullOutline, homeOutline, layersOutline, people, pricetagOutline, shieldCheckmarkOutline} from 'ionicons/icons'

export const allMenu:IMenuItem[] = [
    {
        title: 'Dashboard',
        route: '/tab2',
        icon: homeOutline
    },
    {
        title: 'Minha Loja',
        icon: briefcaseOutline,
        children: [
            {
                title: 'Autenticar ERP'
            },
            {
                title: 'Venda Balcão (PDV)'
            },
            {
                title: 'Configurações',
                children: [
                    {
                        title: 'Usuários'
                    },
                    {
                        title: 'Grupos de e-mails'
                    },
                    {
                        title: 'Dispositivos de Notificações'
                    },
                    {
                        title: 'Vender na Feira'
                    },
                ]
            },
            {
                title: 'Gestor de Filial'
            }
        ]
    },
    {
        title: 'Gestor de Pedidos',
        icon: pricetagOutline,
        children: [
            {
                title: 'Pedidos'
            },
            {
                title: 'Cupons'
            },
        ]
    },
    {
        title: 'Gestor de Produtos',
        icon: fileTrayFullOutline,
        children: [
            {
                title: 'Novo',
                icon: addOutline
            },
            {
                title: 'Ativos'
            },
            {
                title: 'Bloqueados'
            },
            {
                title: 'Inativos/Ocultos'
            },
            {
                title: 'Sem Estoque'
            },
            {
                title: 'Ações em Massa'
            },
            {
                title: 'Vitrine de Produtos'
            },
            {
                title: 'Tabela de Produtos',
                children: [
                    {
                        title: 'Criar'
                    },
                    {
                        title: 'Histórico'
                    },
                ]
            },
            {
                title: 'Gerenciar PDF/Catálogo'
            },
        ]
    },
    {
        title: 'Gestor de Pessoas',
        icon: people,
        children: [
            {
                title: 'Meus Clientes'
            },
            {
                title: 'Meus Vendedores'
            },
            {
                title: 'Meus Gerentes'
            },
            {
                title: 'Gestor de Usuários',
                children: [
                    {
                        title: 'Master'
                    },
                    {
                        title: 'Desenvolvedores'
                    },
                    {
                        title: 'Clientes'
                    },
                    {
                        title: 'Parceiros'
                    },
                    {
                        title: 'Vendedores'
                    },
                    {
                        title: 'Suporte'
                    },
                    {
                        title: 'Gerentes'
                    },
                    {
                        title: 'Site Suporte'
                    },
                ]
            },
        ]
    },
    {
        title: 'Administrativo',
        icon: briefcaseOutline,
        children: [
            {
                title: 'Gestor de Filial'
            },
            {
                title: 'Prospecção de Vendas'
            },
            {
                title: 'Gestir Financeiro',
                children: [
                    {
                        title: 'Gestor'
                    },
                    {
                        title: 'Gestor Admin'
                    },
                ]
            },
            {
                title: 'Relatórios',
                children: [
                    {
                        title: 'Vendas'
                    },
                    {
                        title: 'Vendas por Período'
                    },
                    {
                        title: 'Gestor Admin'
                    },
                    {
                        title: 'Curva ABC por Produto'
                    },
                    {
                        title: 'Curva ABC por Cliente'
                    },
                    {
                        title: 'Estoque Atual'
                    },
                    {
                        title: 'Acesso do Site'
                    },
                    {
                        title: 'Gerenciar Códigos de Barra'
                    },
                    {
                        title: 'Relatório Lucro/Período'
                    },
                    {
                        title: 'Marketing'
                    },
                    {
                        title: 'Aniversariantes'
                    },
                ]
            },
        ]
    },
    {
        title: 'Plataformas',
        icon: layersOutline,
        children: [
            {
                title: 'Integrações'
            },
            {
                title: 'Gestor de Site'
            },
            {
                title: 'Marketing'
            },
            {
                title: 'Gestor de Notícias'
            },
        ]
    },
    {
        title: 'Configurações',
        icon: cogOutline,
        children: [
            {
                title: 'Pagamento'
            },
            {
                title: 'Estoque'
            },
            {
                title: 'Frete'
            },
        ]
    },
    {
        title: 'Ajuda e Suporte',
        icon: shieldCheckmarkOutline,
        children: [
            {
                title: 'Videoaulas'
            },
            {
                title: 'Perguntas Frequentes'
            },
            {
                title: 'Suporte'
            },
        ]
    }
]