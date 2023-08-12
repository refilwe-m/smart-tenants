import React from "react";

interface AlertProps {
  id: number;
  message: string;
  isRead: boolean;
  onMarkAsRead: (id: number) => void;
}

const Alert: React.FC<AlertProps> = ({ id, message, isRead, onMarkAsRead }) => {
  const markAsRead = () => {
    onMarkAsRead(id);
  };

  return (
    <div className={`bg-${isRead ? "gray" : "yellow"}-100 p-4 rounded-md mb-2`}>
      <p className="font-semibold">{message}</p>
      {!isRead && (
        <button
          className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
          onClick={markAsRead}
        >
          Mark as Read
        </button>
      )}
    </div>
  );
};

export default Alert;
