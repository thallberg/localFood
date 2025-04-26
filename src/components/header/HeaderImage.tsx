
interface HeaderImageProps {
  image: string;
  altText: string;
  titel: string;
  body: string;
}

const HeaderImage = ({ image, altText, titel, body }: HeaderImageProps) => {
  return (
    <header className='relative w-full h-[calc(70dvh-56px)] lg:h-[calc(100dvh-56px)]'>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>

        <div className=''>
            <img 
            src={image} 
            alt={altText}
            className='w-full h-[calc(70dvh-56px)] lg:h-[calc(100dvh-56px)] object-cover'
            />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">{titel}</h1>
        <p className="text-lg">{body}</p>
      </div>

    </header>
  )
}

export default HeaderImage