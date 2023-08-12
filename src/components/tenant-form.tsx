import React, { useState } from "react";

interface Device {
  deviceName: string;
  deviceType: string;
  powerConsumption: number;
}

const TenantForm: React.FC = () => {
  const [device, setDevice] = useState<Device>({
    deviceName: "",
    deviceType: "",
    powerConsumption: 0,
  });
  const [deviceList, setDeviceList] = useState<Device[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setDeviceList((prevList) => [...prevList, device]);
    setDevice({
      deviceName: "",
      deviceType: "",
      powerConsumption: 0,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">
        Tenant Electrical Device Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="deviceName">Device Name:</label>
          <input
            type="text"
            id="deviceName"
            name="deviceName"
            value={device.deviceName}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="deviceType">Device Type:</label>
          <input
            type="text"
            id="deviceType"
            name="deviceType"
            value={device.deviceType}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="powerConsumption">Power Consumption (Watts):</label>
          <input
            type="number"
            id="powerConsumption"
            name="powerConsumption"
            value={device.powerConsumption}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Device
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6">Device List</h2>
      <ul className="list-disc pl-6 mt-2">
        {deviceList.map((d, index) => (
          <li key={index}>
            {`Name: ${d.deviceName}, Type: ${d.deviceType}, Power: ${d.powerConsumption}W`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenantForm;
