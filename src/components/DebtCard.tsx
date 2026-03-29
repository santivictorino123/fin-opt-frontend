import React from "react";
import type { ApiDebt } from "../api/mockApi";

interface DebtCardProps {
  debt: ApiDebt;
}

export const DebtCard: React.FC<DebtCardProps> = ({ debt }) => {
  // Convertir 0.15 a "15%" para presentación
  const renderEA = (eaString: string) => {
    try {
      const eaNumber = parseFloat(eaString);
      if (isNaN(eaNumber)) return "N/A";
      return `${(eaNumber * 100).toFixed(2)}%`;
    } catch {
      return "0%";
    }
  };

  // Renderizar balance como moneda (visual)
  const renderCurrency = (balanceString: string) => {
    try {
      const bNumber = parseFloat(balanceString);
      if (isNaN(bNumber)) return "$0.00";
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(bNumber);
    } catch {
      return "$0.00";
    }
  };

  return (
    <article className="glass-card debt-card">
      <div className="debt-card-header">
        <h2>{debt.name}</h2>
        <span className="debt-tag">Obligación</span>
      </div>
      
      <div className="debt-info">
        <p className="debt-amount">{renderCurrency(debt.currentBalance)}</p>
        <span className="debt-label">Saldo Actual</span>
      </div>

      <div className="debt-stats">
        <div className="stat">
          <span className="stat-value highlight-red">{renderEA(debt.effectiveAnnualRate)}</span>
          <span className="stat-label">Tasa EA</span>
        </div>
        <div className="stat">
          <span className="stat-value highlight-date">{debt.cutoffDate}</span>
          <span className="stat-label">Corte</span>
        </div>
      </div>
    </article>
  );
};
