import { IMenuItem } from "../../../interfaces/sidebar";
import {addOutline, briefcaseOutline, cogOutline, fileTrayFullOutline, homeOutline, layersOutline, people, pricetagOutline, shieldCheckmarkOutline} from 'ionicons/icons'

export const allMenu:IMenuItem[] = [
    {
        title: 'Dashboard',
        route: '/home/dash',
        icon: homeOutline
    },
    {
        title: 'Minha Loja',
        icon: briefcaseOutline,
        children: [
            {
                title: 'Autenticar ERP',
                route: '/404',
            },
            {
                title: 'Venda Balcão (PDV)',
                route: '/home/my-store/counter-sale',
            },
            {
                title: 'Configurações',
                route: '/home/my-store/configurations'
            },
            {
                title: 'Usuários',
                route: '/home/my-store/users'
            },
            {
                title: 'Grupo de E-mails',
                route: '/home/my-store/email'
            },
            {
                title: 'Dispositivos Notificações',
                route: '/home/my-store/branch-manager/notifications'
            },
            {
                title: 'Gestor de Filial',
                route: '/home/my-store/branch-manager',
            }
        ]
    },
    {
        title: 'Gestor de Pedidos',
        icon: pricetagOutline,
        children: [
            {
                title: 'Pedidos',
                route: '/404',
            },
            {
                title: 'Cupons',
                route: '/404',
            },
        ]
    },
    {
        title: 'Gestor de Produtos',
        icon: fileTrayFullOutline,
        route: '/home/product-manager',
    },
    {
        title: 'Gestor de Pessoas',
        icon: people,
        children: [
            {
                title: 'Meus Clientes',
                route: '/404',
            },
            {
                title: 'Meus Vendedores',
                route: '/404',
            },
            {
                title: 'Meus Gerentes',
                route: '/404',
            },
            {
                title: 'Gestor de Usuários',
                children: [
                    {
                        title: 'Master',
                        route: '/404',
                    },
                    {
                        title: 'Desenvolvedores',
                        route: '/404',
                    },
                    {
                        title: 'Clientes',
                        route: '/404',
                    },
                    {
                        title: 'Parceiros',
                        route: '/404',
                    },
                    {
                        title: 'Vendedores',
                        route: '/404',
                    },
                    {
                        title: 'Suporte',
                        route: '/404',
                    },
                    {
                        title: 'Gerentes',
                        route: '/404',
                    },
                    {
                        title: 'Site Suporte',
                        route: '/404',
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
                title: 'Gestor de Filial',
                route: '/404',
            },
            {
                title: 'Prospecção de Vendas',
                route: '/404',
            },
            {
                title: 'Gestir Financeiro',
                children: [
                    {
                        title: 'Gestor',
                        route: '/404',
                    },
                    {
                        title: 'Gestor Admin',
                        route: '/404',
                    },
                ]
            },
            {
                title: 'Relatórios',
                children: [
                    {
                        title: 'Vendas',
                        route: '/404',
                    },
                    {
                        title: 'Vendas por Período',
                        route: '/404',
                    },
                    {
                        title: 'Gestor Admin',
                        route: '/404',
                    },
                    {
                        title: 'Curva ABC por Produto',
                        route: '/404',
                    },
                    {
                        title: 'Curva ABC por Cliente',
                        route: '/404',
                    },
                    {
                        title: 'Estoque Atual',
                        route: '/404',
                    },
                    {
                        title: 'Acesso do Site',
                        route: '/404',
                    },
                    {
                        title: 'Gerenciar Códigos de Barra',
                        route: '/404',
                    },
                    {
                        title: 'Relatório Lucro/Período',
                        route: '/404',
                    },
                    {
                        title: 'Marketing',
                        route: '/404',
                    },
                    {
                        title: 'Aniversariantes',
                        route: '/404',
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
                title: 'Integrações',
                route: '/404',
            },
            {
                title: 'Gestor de Site',
                route: '/404',
            },
            {
                title: 'Marketing',
                route: '/404',
            },
            {
                title: 'Gestor de Notícias',
                route: '/404',
            },
        ]
    },
    {
        title: 'Configurações',
        icon: cogOutline,
        children: [
            {
                title: 'Pagamento',
                route: '/404',
            },
            {
                title: 'Estoque',
                route: '/404',
            },
            {
                title: 'Frete',
                route: '/404',
            },
        ]
    },
    {
        title: 'Ajuda e Suporte',
        icon: shieldCheckmarkOutline,
        children: [
            {
                title: 'Videoaulas',
                route: '/404',
            },
            {
                title: 'Perguntas Frequentes',
                route: '/404',
            },
            {
                title: 'Suporte',
                route: '/404',
            },
        ]
    }
]