import Mobile from "./Mobile";

const MobileInfo = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-gray-800 text-sm leading-relaxed max-w-250 m-auto lg:flex-row">
      <div className="flex flex-col items-center w-150 m-auto">
        <h3 className="text-3xl font-semibold text-green-800 mb-2">
          Ladda ner vår app
        </h3>
        <p className="mb-2">
          <span className="font-semibold text-lg">Med Matkasse-appen</span> blir det ännu enklare att hålla koll på dina
          beställningar, se veckans meny och få notiser när din kasse är på väg
          hem till dig.
        </p>
        <p className="mb-2">
          Appen finns till både iOS och Android, och ger dig full kontroll
          direkt i fickan. Inga fler bortglömda beställningar eller letande
          efter recept – allt samlat på ett ställe.
        </p>
        <p><span className="font-semibold text-green-800">Smidigt, snabbt och stressfritt</span> – precis som vardagen borde vara.</p>
      </div>
      <div>
        <Mobile />
      </div>
    </div>
  );
};

export default MobileInfo;
