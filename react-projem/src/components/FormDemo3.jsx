import { useState } from "react";

export default function FormDemo3() {
  const [searchRepo, setSearchRepo] = useState({ query: "", user: "" });

  const handleInputs = (e) => {
    console.log(e.target.value);
    setSearchRepo({ ...searchRepo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { query, user } = searchRepo;

    fetch(`https://api.github.com/search/repositories?q=${query}+user:${user}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="query"
            className="block text-sm font-medium text-gray-700"
          >
            Search for a Repository
          </label>
          <input
            type="text"
            name="query"
            placeholder="Search for a repo..."
            value={searchRepo.query}
            onChange={handleInputs}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700"
          >
            GitHub User Account
          </label>
          <input
            type="text"
            name="user"
            placeholder="GitHub user account..."
            value={searchRepo.user}
            onChange={handleInputs}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}
