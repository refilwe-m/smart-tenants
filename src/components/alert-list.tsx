import React, { useState } from "react";
import { Alert } from "./alert";

interface AlertItem {
  id: number;
  message: string;
  isRead: boolean;
}

const AlertList: React.FC = () => {
  const [alerts, setAlerts] = useState<AlertItem[]>([
    {
      id: 1,
      message: "Your electricity usage is higher than usual.",
      isRead: false,
    },
    {
      id: 2,
      message: "Scheduled maintenance outage on August 15.",
      isRead: false,
    },
    // Add more alerts as needed
  ]);

  const markAlertAsRead = (id: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, isRead: true } : alert
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Alerts</h2>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          id={alert.id}
          message={alert.message}
          isRead={alert.isRead}
          onMarkAsRead={markAlertAsRead}
        />
      ))}
    </div>
  );
};

export default AlertList;
