import { useState } from "react";
import { DebtList } from "./components/DebtList";
import { AddDebtModal } from "./components/AddDebtModal";
import type { ApiDebt } from "./api/mockApi";

function App() {
  const [debts, setDebts] = useState<ApiDebt[]>([]);
  const [showAddDebt, setShowAddDebt] = useState(false);

  const handleAddDebt = (newDebt: Omit<ApiDebt, "id">) => {
    // Simulamos la creación de ID antes del Backend
    const debtEntry: ApiDebt = {
      ...newDebt,
      id: Math.random().toString(36).substring(7),
    };
    setDebts((prev) => [...prev, debtEntry]);
    setShowAddDebt(false);
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <h1 className="title">Optimizador Financiero</h1>
        <p className="subtitle">
          Proyecciones y estatus de Deudas e Inversiones en tiempo real.
        </p>
      </header>
      
      <main className="dashboard-metrics glass-card">
        <div className="flex-header">
          <h2>Resumen de Obligaciones</h2>
          <button className="primary-btn pulse-glow" onClick={() => setShowAddDebt(true)}>
            Añadir Deuda
          </button>
        </div>
        
        <DebtList debts={debts} />
      </main>

      {showAddDebt && (
        <AddDebtModal 
          onAdd={handleAddDebt} 
          onClose={() => setShowAddDebt(false)} 
        />
      )}
    </div>
  );
}

export default App;
