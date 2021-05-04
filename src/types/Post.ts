import { User } from './User';

export interface Post {
    title: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumnbnail_img?: string;
    categoryName: string;
    tags: string[];
    user: User;
}
