import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { MarkdownImageRender } from '@Style/CommonStyle';

/**
 * 이미지 렌더.
 * @param props
 */
export default function MarkdwonRenderer() {
    const imageRender = (props: any): any => {
        return (
            <img
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                style={{
                    maxWidth: '75%',
                    border: 'solid',
                    borderRadius: 15,
                    marginTop: 50,
                    marginBottom: 50,
                    textAlign: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '50%',
                }}
                alt=""
            />
        );
    };

    /**
     * 코드 렌더링.
     * @param param0
     * @returns
     */
    const CodeBlock = ({ language = '', value = '' }: { language: string; value: string }) => {
        return (
            <SyntaxHighlighter language={language} style={github}>
                {value}
            </SyntaxHighlighter>
        );
    };
    return {
        imageRender,
        CodeBlock,
    };
}
