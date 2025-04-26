import Body from "../../components/bodycomponents/Body";
import OrderList from "../../components/bodycomponents/OrderList";
import Rewievs from "../../components/bodycomponents/Rewievs";
import HeaderImage from "../../components/header/HeaderImage";
import MobileInfo from "../../components/mobile/MobileInfo";
import foodData from "../../data/food.json";
import heroImage from "/home/homeHero.webp";

const Home = () => {
  return (
    <div>
      <HeaderImage
        image={heroImage}
        altText="Bild som visar content för respektive sida"
        titel="Titel För Sidan"
        body="Slogan eller Liknande"
      />

      <section className="flex flex-col">
        {foodData.map((item, index) => (
          <Body
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            altText={item.altText}
          />
        ))}
      </section>

      <section>
        <OrderList />
      </section>

      <section className="mt-8">
        <MobileInfo />
      </section>

      <section>
        <Rewievs/>
      </section>
    </div>
  );
};

export default Home;
