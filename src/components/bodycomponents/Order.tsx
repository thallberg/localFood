import { ReactElement } from "react";

interface OrderProps {
  title: string;
  icon: ReactElement;
  text: string;
}

const Order = ({ title, icon, text }: OrderProps) => {
  return (
    <article className="p-10 h-60 lg:h-100 rounded shadow-md bg-gray-100 flex flex-row items-center gap-4 lg:flex-col lg:justify-center">
      <div className="text-green-600 text-8xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </article>
  );
};

export default Order;
