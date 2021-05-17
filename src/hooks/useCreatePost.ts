import React, { useCallback, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postState, postTagsState } from '../atoms/postState';

export default function useCreatePost() {
    const [post, setPost] = useRecoilState(postState);
    const tags = useRecoilValue(postTagsState);
    const [tagValue, setTagValue] = useState('');
    const ignore = useRef(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setPost({
            ...post,
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
            if (tag === '' || post.tags.includes(tag)) return;
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
                setPost({
                    ...post,
                    tags: [...tags, ...tempTags],
                });
                return;
            }
            if (processed.charAt(0) === '#') {
                processed = processed.slice(1, processed.length);
            }
            setPost({
                ...post,
                tags: [...tags, processed],
            });
        },
        [post, tags]
    );

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Backspace' && tagValue === '') {
                setPost({
                    ...post,
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
        setPost({
            ...post,
            tags: nextTags,
        });
    };

    return {
        post,
        tags,
        onChange,
        setPost,
        onChangeTagInput,
        onKeyDown,
        onRemove,
        tagValue,
    };
}
