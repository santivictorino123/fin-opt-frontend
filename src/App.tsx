function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <h1 className="title">Optimizador Financiero</h1>
        <p className="subtitle">
          Proyecciones y estatus de Deudas e Inversiones en tiempo real.
        </p>
      </header>
      
      <main className="dashboard">
        <div className="glass-card">
          <h2>Resumen de Obligaciones</h2>
          <p>La integración con OpenAPI está en proceso.</p>
          <button className="primary-btn">Añadir Deuda</button>
        </div>

        <div className="glass-card">
          <h2>Tus Inversiones</h2>
          <p>Próximamente métricas interactivas.</p>
          <button className="secondary-btn">Explorar</button>
        </div>
      </main>
    </div>
  )
}

export default App
