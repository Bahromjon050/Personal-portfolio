import React from "react";
import { Header } from "./All";

const Customers = () => {
  const obj = {
    span: "Team",
    name: "My",
    des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
      turpis dignissim. Commodo pellentesque tristique aliquet    
      turpis. Morbi risus imperdiet`,
  };
  return (
    <>
      <section className="services all_padding">
        <Header data={obj} />
        <div className="cards_team">

        </div>
      </section>
    </>
  );
};

export default Customers;
