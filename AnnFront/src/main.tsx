import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx'
import { AnnGUI } from "./component/AnnGUI.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/ann" element={<AnnGUI />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
