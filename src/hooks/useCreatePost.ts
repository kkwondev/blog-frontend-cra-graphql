import { useApolloClient, useMutation } from '@apollo/client';
import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { writeState, writeTagsState } from '../atoms/writeState';
import { EDIT_POST, SAVE_POST } from '../lib/apollo/queries/post';

export default function useCreatePost() {
    const history = useHistory();
    const [write, setWrite] = useRecoilState(writeState);
    const tags = useRecoilValue(writeTagsState);
    const [tagValue, setTagValue] = useState('');
    const ignore = useRef(false);
    const client = useApolloClient();
    const [savePost] = useMutation(SAVE_POST, {
        variables: {
            post: {
                title: write.title,
                content: write.content,
                tags: write.tags,
                thumbnail_img: write.thumbnail_img === '' ? null : write.thumbnail_img,
                categoryName: write.categoryName,
            },
        },
    });

    const [editPost] = useMutation(EDIT_POST, {
        variables: {
            id: write.id,
            post: {
                title: write.title,
                content: write.content,
                tags: write.tags,
                thumbnail_img: write.thumbnail_img === '' ? null : write.thumbnail_img,
                categoryName: write.categoryName,
            },
        },
    });

    const onEditConfirm = async () => {
        if (write.title === '' || write.content === '' || write.categoryName === '') {
            alert('필수 항목을 입력하세요.');
            // eslint-disable-next-line no-useless-return
            return;
        }
        try {
            const response = await editPost();
            if (!response || !response.data) return;
            const { slug } = response.data.updatePost.post;
            await client.resetStore();
            history.push(`/post/${slug}`);
        } catch (e) {
            // eslint-disable-next-line no-alert
            alert('포스트 수정 실패');
            console.error(e);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setWrite({
            ...write,
            [e.target.name]: e.target.value,
        });
    };

    const onChangeTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagValue(e.target.value);
    };

    const insertTag = useCallback(
        (tag: string) => {
            ignore.current = true;
            setTagValue('');
            if (tag === '' || write.tags.includes(tag)) return;
            let processed = tag;
            processed = tag.trim();
            if (processed.indexOf(' #') > 0) {
                const tempTags: string[] = [];
                const regex = /#(\S+)/g;
                let execArray: RegExpExecArray | null = null;
                // eslint-disable-next-line no-cond-assign
                while ((execArray = regex.exec(processed))) {
                    if (execArray !== null) {
                        tempTags.push(execArray[1]);
                    }
                }
                setWrite({
                    ...write,
                    tags: [...tags, ...tempTags],
                });
                return;
            }
            if (processed.charAt(0) === '#') {
                processed = processed.slice(1, processed.length);
            }
            setWrite({
                ...write,
                tags: [...tags, processed],
            });
        },
        [write, tags]
    );

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Backspace' && tagValue === '') {
                setWrite({
                    ...write,
                    tags: tags.slice(0, tags.length - 1),
                });
                return;
            }
            const keys = [',', 'Enter'];
            if (keys.includes(e.key)) {
                // 등록
                e.preventDefault();
                insertTag(tagValue);
            }
        },
        [insertTag, tags, tagValue]
    );

    const onRemove = (tag: string) => {
        const nextTags = tags.filter(t => t !== tag);
        setWrite({
            ...write,
            tags: nextTags,
        });
    };

    const onSubmit = async () => {
        if (write.title === '' || write.content === '' || write.categoryName === '') {
            alert('필수 항목을 입력하세요.');
            // eslint-disable-next-line no-useless-return
            return;
        }
        try {
            const response = await savePost();
            if (!response || !response.data) return;
            const { slug } = response.data.createPost.post;
            await client.resetStore();
            history.push(`/post/${slug}`);
        } catch (e) {
            // eslint-disable-next-line no-alert
            alert('포스트 작성 실패');
            console.error(e);
        }
    };

    return {
        write,
        tags,
        onChange,
        setWrite,
        onChangeTagInput,
        onKeyDown,
        onRemove,
        tagValue,
        onSubmit,
        onEditConfirm,
    };
}
