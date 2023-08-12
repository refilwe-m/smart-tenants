import AlertList from "../alert-list";

export const MyAlerts = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <AlertList />
        </div>
      </div>
    </div>
  );
};
