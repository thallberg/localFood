
interface BodyProps {
  title: string;
  description: string;
  image: string;
  altText: string;
  info?: string;
}

const Body = ({ title, description, image, altText, info}: BodyProps) => {
  return (
    <section className="w-full flex justify-center py-6 px-4">
      <article className="max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        <img
          className="w-full lg:w-2/3 object-cover h-full max-h-130 lg:h-auto"
          src={image}
          alt={altText}
        />

        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-green-800">{title}</h2>
          <p className="text-lg text-gray-700">{description}</p>
          <p className="text-lg text-gray-700">{info}</p>
        </div>
      </article>
    </section>
  )
}

export default Body