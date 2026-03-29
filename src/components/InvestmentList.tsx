import React from "react";
import type { ApiInvestment } from "../api/mockApi";
import { InvestmentCard } from "./InvestmentCard";

interface InvestmentListProps {
  investments: ApiInvestment[];
}

export const InvestmentList: React.FC<InvestmentListProps> = ({ investments }) => {
  if (investments.length === 0) {
    return (
      <div className="empty-state glass-card">
        <h3>Tu portafolio está desierto 🌱</h3>
        <p>Añade tu primera inversión para proyectar el rendimiento de tus rendimientos.</p>
      </div>
    );
  }

  return (
    <div className="investment-grid">
      {investments.map((inv) => (
        <InvestmentCard key={inv.id} investment={inv} />
      ))}
    </div>
  );
};
