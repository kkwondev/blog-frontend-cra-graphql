import { User } from './User';

export interface requestPost {
    title: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumnbnail_img?: string;
    categoryName: string;
    tags: string[];
    user: User;
}

export interface responsePost {
    id: number;
    title: string;
    slug: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumnbnail_img?: string;
    category: string;
    createdAt: string;
    user: User;
}
