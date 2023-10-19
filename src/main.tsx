import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterContainer } from 'react-router-dom';
import App from './App.tsx';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
import { ErrorBoundary } from './ui/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterContainer>
            <Provider store={store}>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Provider>
        </RouterContainer>
    </React.StrictMode>
);
