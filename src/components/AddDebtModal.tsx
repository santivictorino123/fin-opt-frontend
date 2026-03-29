import React, { useState } from "react";
import type { ApiDebt } from "../api/mockApi";

interface AddDebtModalProps {
  onAdd: (debt: Omit<ApiDebt, "id">) => void;
  onClose: () => void;
}

export const AddDebtModal: React.FC<AddDebtModalProps> = ({ onAdd, onClose }) => {
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

    // Inyectamos como Strings puristas tal como exige el dominio sdD OpenAPI
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
        onClick={(e) => e.stopPropagation()} /* Prevents closing when clicking inside */
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Registrar Obligación</h2>
        <p className="modal-subtitle">Proyectaremos esto contra tu calendario financiero.</p>
        
        <form onSubmit={handleSubmit} className="debt-form">
          <div className="form-group">
            <label htmlFor="debtName">Nombre (Ej: TDC, Vehículo)</label>
            <input 
              id="debtName"
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Mi Crédito..." 
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="debtBalance">Saldo Actual (Capital)</label>
              <input 
                id="debtBalance"
                type="number" 
                step="any"
                value={balance} 
                onChange={(e) => setBalance(e.target.value)} 
                placeholder="2500000" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="debtEa">Tasa EA (Decimal)</label>
              <input 
                id="debtEa"
                type="number" 
                step="0.0001"
                value={ea} 
                onChange={(e) => setEa(e.target.value)} 
                placeholder="Ej: 0.28..." 
                title="Inserta la tasa efectiva anual en formato decimal. (ej. 28% = 0.28)"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="debtCutoff">Fecha de Corte</label>
            <input 
              id="debtCutoff"
              type="date" 
              value={cutoffDate} 
              onChange={(e) => setCutoffDate(e.target.value)} 
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>Cancelar</button>
            <button type="submit" className="primary-btn submit-btn">Guardar Deuda</button>
          </div>
        </form>
      </div>
    </div>
  );
};
