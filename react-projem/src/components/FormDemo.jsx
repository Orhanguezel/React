import { useState } from "react";

export default function FormDemo() {
  const [formData, setFormData] = useState({
    userName: "",
    city: "",
  });

  // onChange event handler
  function handleChange(event) {
    const { name, value } = event.target; // name ve value değerlerini al
    setFormData({ ...formData, [name]: value }); // İlgili state'i güncelle
  }

  // onSubmit event handler
  function handleSubmit(event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle
    alert(`User Name is ${formData.userName}, City is ${formData.city}`);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName || ""}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-2 text-gray-600">User Name is: {formData.userName}</p>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city || ""}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-2 text-gray-600">City is: {formData.city}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}




/*
import { useRef } from "react";

export default function FormDemoRef() {
  // Ref oluştur
  const userNameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfa yenilenmesini engelle
    alert(`User Name is ${userNameRef.current.value}`); // Ref ile değeri al
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userNameRef" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            ref={userNameRef}
            type="text"
            id="userNameRef"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}



*/

