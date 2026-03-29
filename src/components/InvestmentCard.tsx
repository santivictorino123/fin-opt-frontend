import React from "react";
import type { ApiInvestment } from "../api/mockApi";

interface InvestmentCardProps {
  investment: ApiInvestment;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ investment }) => {
  const renderEA = (eaString: string) => {
    try {
      const eaNumber = parseFloat(eaString);
      if (isNaN(eaNumber)) return "N/A";
      return `${(eaNumber * 100).toFixed(2)}%`;
    } catch {
      return "0%";
    }
  };

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
    <article className="glass-card investment-card">
      <div className="investment-card-header">
        <h2>{investment.name}</h2>
        <span className="investment-tag">Inversión</span>
      </div>
      
      <div className="investment-info">
        <p className="investment-amount">{renderCurrency(investment.currentBalance)}</p>
        <span className="investment-label">Capital Base</span>
      </div>

      <div className="investment-stats">
        <div className="stat">
          <span className="stat-value highlight-green">+{renderEA(investment.effectiveAnnualRate)}</span>
          <span className="stat-label">Rendimiento EA</span>
        </div>
        <div className="stat">
          <span className="stat-value highlight-date">{investment.cutoffDate}</span>
          <span className="stat-label">Apertura</span>
        </div>
      </div>
    </article>
  );
};
