const Mobile = () => {
  return (
    <section className="flex justify-center items-center p-6">
      <div className="w-[220px] h-[460px] rounded-[2.5rem] border-[2px] border-gray-800 bg-white shadow-2xl relative overflow-hidden">
        {/* "Skärm" */}
        <div className="w-full h-full bg-gray-100 p-4 mt-8 overflow-y-auto">
          {/* Header */}
          <header className="bg-blue-600 text-white py-1 px-2 rounded-xl mb-2">
            <h2 className="font-bold">Matkasse AB</h2>
            <p className="text-sm">Smidig vardag. God mat.</p>
          </header>

          {/* Navigationsmeny */}
          <nav className="flex justify-between text-blue-600 text-sm font-semibold mb-2">
            <button className="hover:underline">Hem</button>
            <button className="hover:underline">Meny</button>
            <button className="hover:underline">Om oss</button>
            <button className="hover:underline">Kontakt</button>
          </nav>

          {/* Innehåll */}
          <section className="bg-white p-3 rounded-xl shadow mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Veckans Matkasse
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Färska råvaror för 4 middagar</li>
              <li>Snabba & enkla recept</li>
              <li>Veganska alternativ finns</li>
            </ul>
          </section>

          {/* Info-ruta */}
          <section className="bg-green-100 p-2 rounded-xl text-sm text-green-800 shadow">
            <p>
              <strong>Tips!</strong> Du kan spara din favoritkasse och få den
              automatiskt varje vecka.
            </p>
          </section>
        </div>

        {/* "Högtalare" */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-600 rounded-full"></div>

        {/* "Hemknapp" */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default Mobile;
