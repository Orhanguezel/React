export default function NotFound() {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-600">Aradığınız sayfa bulunamadı.</p>
        <a href="/" className="text-blue-500 hover:underline">
          Ana sayfaya dön
        </a>
      </div>
    );
  }
  