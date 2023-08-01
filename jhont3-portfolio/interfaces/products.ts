export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    slug: string;
    title: string;
    type: ValidTypes;
    link: string;
}

export type ValidTypes = 'FrontEnd'|'BackEnd'|'FullStack'|'Infrastructure'|'Testing'|'Games';
