import PropTypes from "prop-types";

NotFound.propTypes = {
  mode: PropTypes.string.isRequired, // mode prop'u eklendi
};

export default function NotFound({ mode }) {
  return (
    <div
      className={`text-center py-16 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-bold ${
          mode === "dark" ? "text-red-400" : "text-red-500"
        }`}
      >
        404
      </h1>
      <p
        className={`text-lg ${
          mode === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Aradığınız sayfa bulunamadı.
      </p>
      <a
        href="/"
        className={`text-blue-500 hover:underline ${
          mode === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
        }`}
      >
        Ana sayfaya dön
      </a>
    </div>
  );
}

  