import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppTarefa from './Tarefas.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTarefa />
  </React.StrictMode>,
)