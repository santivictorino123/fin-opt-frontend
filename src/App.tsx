import { useState } from "react";
import { DebtList } from "./components/DebtList";
import { AddDebtModal } from "./components/AddDebtModal";
import { InvestmentList } from "./components/InvestmentList";
import { AddInvestmentModal } from "./components/AddInvestmentModal";
import type { ApiDebt, ApiInvestment } from "./api/mockApi";

function App() {
  const [debts, setDebts] = useState<ApiDebt[]>([]);
  const [investments, setInvestments] = useState<ApiInvestment[]>([]);
  
  const [showAddDebt, setShowAddDebt] = useState(false);
  const [showAddInvestment, setShowAddInvestment] = useState(false);

  const handleAddDebt = (newDebt: Omit<ApiDebt, "id">) => {
    const debtEntry: ApiDebt = {
      ...newDebt,
      id: Math.random().toString(36).substring(7),
    };
    setDebts((prev) => [...prev, debtEntry]);
    setShowAddDebt(false);
  };

  const handleAddInvestment = (newInv: Omit<ApiInvestment, "id">) => {
    const invEntry: ApiInvestment = {
      ...newInv,
      id: Math.random().toString(36).substring(7),
    };
    setInvestments((prev) => [...prev, invEntry]);
    setShowAddInvestment(false);
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <h1 className="title">Optimizador Financiero</h1>
        <p className="subtitle">
          Proyecciones y estatus de Deudas e Inversiones en tiempo real.
        </p>
      </header>
      
      <main className="dashboard-metrics">
        <div className="glass-card">
          <div className="flex-header">
            <h2>Resumen de Obligaciones</h2>
            <button className="primary-btn pulse-glow" onClick={() => setShowAddDebt(true)}>
              Añadir Deuda
            </button>
          </div>
          <DebtList debts={debts} />
        </div>

        <div className="glass-card mt-2">
          <div className="flex-header">
            <h2>Tus Inversiones</h2>
            <button className="primary-btn" style={{background: '#10b981'}} onClick={() => setShowAddInvestment(true)}>
              Añadir Inversión
            </button>
          </div>
          <InvestmentList investments={investments} />
        </div>
      </main>

      {showAddDebt && (
        <AddDebtModal 
          onAdd={handleAddDebt} 
          onClose={() => setShowAddDebt(false)} 
        />
      )}

      {showAddInvestment && (
        <AddInvestmentModal 
          onAdd={handleAddInvestment} 
          onClose={() => setShowAddInvestment(false)} 
        />
      )}
    </div>
  );
}

export default App;
