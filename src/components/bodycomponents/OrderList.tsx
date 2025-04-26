import orderContent from "../../data/orderContent.json"
import { HiCheckCircle, HiBell , HiEmojiHappy } from "react-icons/hi";
import Order from "./Order";

const iconMap = {
  HiCheckCircle: <HiCheckCircle />,
  HiBell : <HiBell  />,
  HiEmojiHappy: <HiEmojiHappy />,
};

const OrderList = () => {
  return (

  <section className="flex flex-col gap-4 lg:flex-row max-w-180 m-auto lg:max-w-280" >
    {orderContent.map((item, index) => (
        <Order
        key={index}
        title={item.title}
        text={item.text}
        icon={iconMap[item.icon as keyof typeof iconMap]}
        />
    ))}

  </section>

  )
};

export default OrderList;
