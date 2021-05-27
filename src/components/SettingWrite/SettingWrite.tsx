import { css } from '@emotion/react';
import React from 'react';
import { MdImage } from 'react-icons/md';
import getCategory from '../../hooks/query/category/getCategory';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

interface SettingWriteProps {
    visible: boolean;
    onUpload: () => any;
    onClose: () => void;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    thumbnail_img: string;
}

function SettingWrite({ visible, onUpload, onClose, onChange, thumbnail_img }: SettingWriteProps) {
    const { data } = getCategory();
    if (!visible || !data) return null;
    return (
        <div css={SettingWriteWrap}>
            <div className="setting">
                <div css={category}>
                    <h2>카테고리 선택</h2>
                    <select name="categoryName" onChange={e => onChange(e)}>
                        <option value="">선택</option>
                        {data.map((data: { name: string | undefined }, index: number) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <option value={data.name} key={index}>
                                {data.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div css={imageUpload}>
                    <div className="imageWrap">
                        <h2>썸네일 업로드</h2>
                        {/* TODO: 썸네일 업로드시 상태 구현 */}
                        {thumbnail_img ? (
                            <div className="Image">
                                <img src={thumbnail_img} alt="이미지" />
                            </div>
                        ) : (
                            <div className="Image">
                                <MdImage />
                                <button type="button" onClick={onUpload}>
                                    이미지 업로드
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div css={btnWrap}>
                    <button type="button">등록</button>
                    <button type="button" onClick={onClose}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

const SettingWriteWrap = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgb(248, 249, 250);
    z-index: 15;
    animation: 0.25s ease-in 0s 1 normal forwards running show;
    ${media.small} {
        align-items: flex-start;
        padding: 2rem 1rem;
        box-sizing: border-box;
    }
    .setting {
        width: 768px;
        display: flex;
        flex-direction: column;
        ${media.small} {
            width: 100%;
        }
    }

    h2 {
        text-align: center;
        letter-spacing: -1px;
        margin-bottom: 1rem;
    }
    @keyframes show {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0%);
        }
    }
`;
const category = css`
    width: 100%;

    select {
        width: 100%;
        padding: 0.5rem 0;
        background: none;
        border: none;
        border-bottom: 1px solid #ccc;
        text-align: center;
        text-align-last: center;
        margin-bottom: 1rem;
        font-size: 1rem;
    }
`;
const imageUpload = css`
    width: 100%;
    padding-top: 35.11%;
    position: relative;
    box-sizing: border-box;
    .imageWrap {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.03);

        .Image {
            background: ${palette.grey[200]};
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            svg {
                font-size: 7rem;
                color: ${palette.grey[400]};
            }

            button {
                margin-top: 1rem;
                padding: 0.25rem 2rem;
                background: white;
                border-radius: 4px;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.025);
                font-size: 1rem;
                line-height: 1.5;
                color: rgb(35, 100, 170);
                outline: none;
                border: none;
                cursor: pointer;
                transition: all 0.125s ease-in;
                font-weight: bold;
                &:focus {
                    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
                }
                &:hover {
                    background: ${palette.grey[100]};
                }
            }
        }
    }
`;
const btnWrap = css`
    width: 100%;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    button {
        height: 2.5rem;
        font-size: 1.125rem;
        background: rgb(35, 100, 170);
        border-radius: 4px;
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        outline: none;
        &:hover,
        &:focus {
            background: rgba(46, 147, 255);
        }
    }
    button + button {
        margin-left: 1rem;
        background: #fff;
        color: rgb(35, 100, 170);
        &:hover,
        &:focus {
            background: rgb(35, 100, 170);
            color: #fff;
        }
    }
`;

export default SettingWrite;
