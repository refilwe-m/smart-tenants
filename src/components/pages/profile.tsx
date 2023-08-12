import { useState } from "react";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bioFields, setBioFields] = useState({
    name: "Gugu Mokwena",
    parkingLot: "Parking A1",
    unitNumber: "102",
    apartmentName: "Khayalam' Apartments",
    email: "gugu@mail.com",
    cell: "012 345 6789",
    city: "Johanessburg",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setBioFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white border rounded-lg shadow">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{bioFields.name}</h2>
        <p>{bioFields.apartmentName}</p>
      </div>

      <div className="mt-6">
        <p>
          <span className="font-medium">Parking Lot:</span>{" "}
          {bioFields.parkingLot}
        </p>
        <p>
          <span className="font-medium">Unit Number:</span>{" "}
          {bioFields.unitNumber}
        </p>
        {isEditing ? (
          <>
            <textarea
              name="email"
              value={bioFields.email}
              onChange={handleInputChange}
              className="mt-4 p-2 border rounded"
            />
            <textarea
              name="cell"
              value={bioFields.cell}
              onChange={handleInputChange}
              className="mt-4 p-2 border rounded"
            />
            <textarea
              name="city"
              value={bioFields.city}
              onChange={handleInputChange}
              className="mt-4 p-2 border rounded"
            />
            <div className="mt-4 text-center">
              <button
                onClick={handleSaveClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <p>
              <span className="font-medium">Email:</span> {bioFields.email}
            </p>
            <p>
              <span className="font-medium">Cell Number:</span> {bioFields.cell}
            </p>
            <p>
              <span className="font-medium">City:</span> {bioFields.city}
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={handleEditClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit Bio
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
