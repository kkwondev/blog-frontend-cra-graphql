import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { userState } from '../../atoms/authState';
import { writeContentState, writeState, writeTitleState, writeThumbnailState } from '../../atoms/writeState';
import MarkdownEditor from '../../components/MarkdownEditor/MarkdownEditor';
import MarkdownRender from '../../components/MarkdownRender/MarkdownRender';
import PostWriteTitle from '../../components/PostWriteTitle';
import SettingWrite from '../../components/SettingWrite/SettingWrite';
import TagsInput from '../../components/TagsInput/TagsInput';
import WriteFooter from '../../components/WriteFooter/WriteFooter';
import useCreatePost from '../../hooks/useCreatePost';
import useUpload from '../../hooks/useUpload';
import { s3Upload } from '../../lib/api/s3Upload';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

interface WriteParams {
    slug: string;
}

export interface WriteProps {}
function Write({ history }: RouteComponentProps) {
    const user = useRecoilValue(userState);
    const params = useParams<WriteParams>();
    const [writeData, setWriteData] = useRecoilState(writeState);
    const reset = useResetRecoilState(writeState);
    const title = useRecoilValue(writeTitleState);
    const content = useRecoilValue(writeContentState);
    const [visible, setVisible] = useState(false);
    const [upload, file] = useUpload();
    const { onChange, onSubmit, onEditConfirm } = useCreatePost();
    // const { onEditConfirm } = getPost();

    const confirmText = params.slug ? '수정하기' : '등록하기';

    const onSettingClick = () => {
        setVisible(!visible);
    };

    const onUpload = () => {
        upload();
    };
    if (!user) {
        history.push('/');
    }

    const imageUpload = async () => {
        const data = await s3Upload(file);
        setWriteData({
            ...writeData,
            thumbnail_img: data.file,
        });
    };

    const onResetThumbnail = () => {
        setWriteData({
            ...writeData,
            thumbnail_img: '',
        });
    };

    useEffect(() => {
        // eslint-disable-next-line no-useless-return
        if (!file) return;
        imageUpload();
    }, [file, s3Upload]);

    useEffect(() => {
        return () => {
            reset();
            setVisible(false);
        };
    }, []);
    return (
        <>
            <div css={left}>
                <PostWriteTitle onChange={onChange} title={title} />
                <TagsInput />
                <MarkdownEditor />
                <WriteFooter settingClick={onSettingClick} confirmText={confirmText} />
            </div>
            <div css={right}>
                <div className="preview">
                    <h1>{title}</h1>
                    <MarkdownRender markdownText={content} />
                </div>
            </div>
            <SettingWrite
                visible={visible}
                onUpload={onUpload}
                onClose={onSettingClick}
                onChange={onChange}
                categoryName={writeData.categoryName}
                thumbnail_img={writeData.thumbnail_img}
                onResetThumbnail={onResetThumbnail}
                onSubmit={params.slug ? onEditConfirm : onSubmit}
                confirmText={confirmText}
            />
        </>
    );
}
const left = css`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    // box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
`;

const right = css`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background: ${palette.background};
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
    .preview {
        padding: 3rem;
        box-sizing: border-box;
        h1 {
            font-size: 2.5em;
            margin-bottom: 4rem;
        }
    }
    ${media.medium} {
        display: none;
    }
`;
export default withRouter(Write);
