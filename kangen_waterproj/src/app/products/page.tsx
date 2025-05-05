export default function ProductsPage() {
    return (
      <main className="py-20 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">Our Products</h1>
          <p className="text-lg text-gray-700 mb-10">
            Explore our range of premium Kangen Water machines and accessories. More details coming soon!
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="h-40 bg-white rounded-md mb-4 flex items-center justify-center text-2xl text-gray-400">
                  Image {i}
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Product {i}</h3>
                <p className="text-gray-600 text-sm">Short description of Product {i}. Features, benefits, etc.</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  