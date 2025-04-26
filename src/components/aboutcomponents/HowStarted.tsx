import startedData from "../../data/howWeStarted.json";

const HowStarted = () => {
  return (
   
      <article className="flex flex-col items-center mt-6">
        <h2 className="text-6xl font-extrabold py-6 text-green-800">{startedData.sectionTitle}</h2>

        <div className="relative w-full">
          <img 
          src={startedData.image} 
          alt={startedData.imageAlt}
          className="w-full h-auto object-cover rounded-lg md:max-w-200 m-auto"
          />

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black opacity-70 text-white px-8 py-1">
          <h3 className="text-2xl font-bold">{startedData.articleTitle}</h3>
          </div>
        </div>

        <div className="mt-2 px-4 md:max-w-150">
          <p className="">{startedData.text}</p>
        </div>
      </article>
  
  );
};

export default HowStarted;
