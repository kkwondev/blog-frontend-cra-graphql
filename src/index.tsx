import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from './lib/apollo/client';

ReactDOM.render(
    // <React.StrictMode>
    <RecoilRoot>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </RecoilRoot>,
    // </React.StrictMode>
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
