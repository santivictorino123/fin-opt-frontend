import React from "react";
import type { ApiDebt } from "../api/mockApi";
import { DebtCard } from "./DebtCard";

interface DebtListProps {
  debts: ApiDebt[];
}

export const DebtList: React.FC<DebtListProps> = ({ debts }) => {
  if (debts.length === 0) {
    return (
      <div className="empty-state glass-card">
        <h3>Tu cartera de deudas está limpia 🎉</h3>
        <p>Añade tu primera obligación para comenzar a optimizar y proyectar tus pagos.</p>
      </div>
    );
  }

  return (
    <div className="debt-grid">
      {debts.map((debt) => (
        <DebtCard key={debt.id} debt={debt} />
      ))}
    </div>
  );
};
