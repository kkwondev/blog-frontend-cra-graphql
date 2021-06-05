import { css } from '@emotion/react';
import React from 'react';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

export interface PopupOKCancelProps {
    visible: boolean;
    title?: string;
    onConfirm?: () => any;
    onCancel?: () => any;
    children: React.ReactNode;
}

function PopupOKCancel({ visible, title, onConfirm, onCancel, children }: PopupOKCancelProps) {
    if (!visible) return null;
    return (
        <div css={PopupBaseBlock}>
            <div css={PopupOKCancelBlock}>
                <div>{title && <h3>{title}</h3>}</div>
                <div className="message">{children}</div>
                <div className="button-area">
                    {onCancel && (
                        <button type="button" onClick={onCancel}>
                            취소
                        </button>
                    )}
                    <button type="button" onClick={onConfirm}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}

const PopupBaseBlock = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PopupOKCancelBlock = css`
    width: 25rem;
    border-radius: 4px;
    background: white;
    padding: 2rem 1.5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    ${media.small} {
        width: calc(100% - 2rem);
    }
    h3 {
        margin: 0;
        font-size: 1.5rem;
        color: ${palette.grey[800]};
        line-height: 1.5;
        font-weight: bold;
    }
    .message {
        line-height: 1.5;
        font-size: 1rem;
        color: ${palette.grey[700]};
        margin-top: 1rem;
        margin-bottom: 1rem;
        white-space: pre-wrap;
    }
    .button-area {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
        button + button {
            margin-left: 0.75rem;
            background: rgb(35, 100, 170);
            color: #fff;
        }
    }
    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        border: none;
        color: rgb(35, 100, 170);
        padding: 0.5rem 1rem;
        background: #fff;
        &:hover,
        &:focus {
            background: white;
            border: 1px solid rgb(35, 100, 170);
            color: rgb(35, 100, 170);
        }
        border-radius: 4px;
    }
`;

export default PopupOKCancel;
