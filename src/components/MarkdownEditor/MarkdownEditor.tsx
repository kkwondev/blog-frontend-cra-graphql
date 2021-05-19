import { css } from '@emotion/react';
import React, { useState } from 'react';
import ReactMde, { SaveImageHandler, Suggestion } from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import * as Showdown from 'showdown';
import useCreatePost from '../../hooks/useCreatePost';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

function MarkdownEditor() {
    // const [value, setValue] = useState('**Hello world!!!**');
    const { write, setWrite } = useCreatePost();
    const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');

    const loadSuggestions = async (text: string) => {
        return new Promise<Suggestion[]>((accept, reject) => {
            setTimeout(() => {
                const suggestions: Suggestion[] = [
                    {
                        preview: 'Andre',
                        value: '@andre',
                    },
                    {
                        preview: 'Angela',
                        value: '@angela',
                    },
                    {
                        preview: 'David',
                        value: '@david',
                    },
                    {
                        preview: 'Louise',
                        value: '@louise',
                    },
                ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
                accept(suggestions);
            }, 250);
        });
    };

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    const save: SaveImageHandler = async function* (data: ArrayBuffer) {
        // Promise that waits for "time" milliseconds
        const wait = function (time: number) {
            return new Promise<void>((a, r) => {
                setTimeout(() => a(), time);
            });
        };

        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield 'https://picsum.photos/300';
        await wait(2000);

        // returns true meaning that the save was successful
        return true;
    };

    return (
        <div className="container" css={Markdown}>
            <ReactMde
                minEditorHeight={1000}
                value={write.content}
                onChange={e => {
                    setWrite({
                        ...write,
                        content: e,
                    });
                }}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                        tabIndex: -1,
                    },
                }}
                paste={{
                    saveImage: save,
                }}
            />
        </div>
    );
}

const Markdown = css`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    box-sizing: border-box;
    textarea {
        resize: none;
    }
    .mde-header {
        width: auto;
        background: ${palette.white};
        padding: 0.5rem 0;
        flex-wrap: unset;
        overflow-x: auto;
    }
    .mde-tabs button {
        display: none;
        ${media.medium} {
            display: block;
        }
    }
    .mde-header .svg-icon {
        width: 1rem;
        height: 1rem;
        color: ${palette.grey[400]};
    }
    .react-mde {
        border: none;
    }
    .mde-textarea-wrapper textarea.mde-text {
        min-height: 0px;
        flex: 1 1 0%;
        font-size: 1.125rem;
        line-height: 1.5;
        color: rgb(52, 58, 64);
    }
`;

export default MarkdownEditor;
