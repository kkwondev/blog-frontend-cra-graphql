import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { markdown } from '../../lib/styles/markdown';
import MarkdwonRenderer from '../MarkdownRenderer';

interface MarkdownRenderProps {
    markdownText: string;
}

function MarkdownRender({ markdownText }: MarkdownRenderProps) {
    const { CodeBlock, imageRender } = MarkdwonRenderer();
    return (
        <div css={markdown}>
            <div className="markdown-body">
                <ReactMarkdown renderers={{ code: CodeBlock, image: imageRender }}>{markdownText}</ReactMarkdown>
            </div>
        </div>
    );
}
export default MarkdownRender;
