import { User } from './User';

export interface requestPost {
    title: string | null;
    content: string | null;
    // eslint-disable-next-line camelcase
    thumnbnail_img?: string | null;
    categoryName: string | null;
    tags: string[];
    user: User | null;
}

export interface responsePost {
    id: number;
    title: string;
    slug: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumbnail_img?: string;
    category: string;
    createdAt: string;
    user: User;
}
