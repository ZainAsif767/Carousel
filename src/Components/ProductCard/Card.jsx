import styled from "styled-components";
import nike1 from "../../assets/2.png";
import nike2 from "../../assets/3.png";
import nike3 from "../../assets/1.png";
import ProductCard from "./ProductCard";

// ------------------- PRODUCT DATA ------------------------

const data = [
  {
    id: 1,
    image: nike1,
    title: "Nike Kiger 9",
    bg: "#e93337",
    size: "",
  },
  {
    id: 2,
    image: nike2,
    title: "Nike Winflo 10",
    bg: "#005dc3",
    size: "",
  },
  {
    id: 3,
    image: nike3,
    title: "Nike Alphafly 2",
    bg: "#9bdc28",
    size: "",
  },
];

// ------------------- PRODUCT DATA ------------------------

const Card = () => {
  return (
    <Container>
      {data.map((item) => (
        <ProductCard
          key={item.id}
          prodImg={item.image}
          imgSize={""}
          bgColor={item.bg}
          prodTitle={item.title}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  `;
export default Card;