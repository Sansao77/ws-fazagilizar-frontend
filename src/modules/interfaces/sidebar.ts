export interface IMenuItem{
    title: string;
    icon?: string;
    route?: string;
    children?: IMenuItem[];
    showChildren?: boolean;
};

export interface IBreadcrumbs{
    title: string;
    breadcrumbs?: {
        text: string,
        route?: string,
    }[];
};