import "./beauty.css";
import { useState, useEffect } from "react";
import HeroCard from "../heroCard/HeroCard";
import Hero from "../hero/Hero";
import Slogan from "../slogan/Slogan";
import ProductList from "./productlist/ProductList";

function Beauty() {
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Initialize dataFromLocalStorage with localStorage data
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState(() => {
    const lstr = localStorage.getItem("products");
    return lstr ? JSON.parse(lstr) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        if (dataFromLocalStorage > 0) {
          setBeautyProducts(dataFromLocalStorage);
        } else {
          setBeautyProducts(result);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroCard>
        <Hero image="beauty" />
        <Slogan />
      </HeroCard>
      <section className="content">
        <h1 className="heading">Beauty</h1>
        <div>
          <div className="news">
           
            {beautyProducts.map((data) => {  {/* Loop through beautyProducts data */}
              return (
                <ProductList key={data.id}
                 data={data} 
                 beautyProducts={beautyProducts}
                 setBeautyProducts={setBeautyProducts}
                 /> 
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Beauty;
