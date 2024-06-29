import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '@/App.tsx';
import {GlobalStyle} from '@/GlobalStyle.ts';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('wrapper')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <GlobalStyle />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
        </QueryClientProvider>
    </React.StrictMode>
);