import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import Search from "../_component/Search";
import Box from "../_component/Box";

const Home = () => {
  const test = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"];

  return (
    <div>
      <Header />
      <Search />
      <h2>Obtenez les bonnes informations pour démarrer votre projet</h2>
      <div className="metiers-types">
        {test.map((x) => {
          return <Box></Box>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
