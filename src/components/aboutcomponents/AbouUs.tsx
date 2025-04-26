import aboutUs from "../../data/aboutUs.json";

const AbouUs = () => {
  return (
    <section className="flex flex-col max-w-150 m-auto">
      <div className="text-center text-3xl py-4">
        <h2 className="first-letter:font-bold first-letter:text-green-800 first-letter:text-4xl">{aboutUs.body}</h2>
      </div>

      <div className="bg-gray-100 py-6 px-4 rounded-lg">
        <p className="first-letter:text-3xl first-letter:font-bold">{aboutUs.content}</p>
      </div>
    </section>
  );
};

export default AbouUs;
