import React, { useState } from "react";
import type { ApiInvestment } from "../api/mockApi";

interface AddInvestmentModalProps {
  onAdd: (investment: Omit<ApiInvestment, "id">) => void;
  onClose: () => void;
}

export const AddInvestmentModal: React.FC<AddInvestmentModalProps> = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [ea, setEa] = useState("");
  const [cutoffDate, setCutoffDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !balance || !ea || !cutoffDate) {
      alert("Por favor llena todos los campos.");
      return;
    }

    onAdd({
      name: name,
      currentBalance: balance,
      effectiveAnnualRate: ea,
      cutoffDate: cutoffDate,
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container glass-card"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Nueva Inversión</h2>
        <p className="modal-subtitle">Estima y capitaliza tus rendimientos a futuro.</p>
        
        <form onSubmit={handleSubmit} className="investment-form">
          <div className="form-group">
            <label htmlFor="invName">Nombre (Ej: CDT, S&P 500)</label>
            <input 
              id="invName"
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Mi Portafolio..." 
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="invBalance">Capital Base</label>
              <input 
                id="invBalance"
                type="number" 
                step="any"
                value={balance} 
                onChange={(e) => setBalance(e.target.value)} 
                placeholder="10000000" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="invEa">Rendimiento (EA Decimal)</label>
              <input 
                id="invEa"
                type="number" 
                step="0.0001"
                value={ea} 
                onChange={(e) => setEa(e.target.value)} 
                placeholder="Ej: 0.12..." 
                title="Inserta la tasa efectiva anual proyectada."
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="invCutoff">Fecha de Apertura / Corte</label>
            <input 
              id="invCutoff"
              type="date" 
              value={cutoffDate} 
              onChange={(e) => setCutoffDate(e.target.value)} 
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>Cancelar</button>
            <button type="submit" className="primary-btn submit-btn" style={{background: '#10b981', boxShadow: '0 4px 14px -4px #10b981'}}>
              Guardar Inversión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
