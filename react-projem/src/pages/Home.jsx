import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeContainer, Title, Description, ButtonContainer } from "../styles/HomeStyles";
import Button from "../components/atoms/Button";

export default function Home() {
  const navigate = useNavigate(); // Yönlendirme için useNavigate kullanımı

  const handleStartShopping = () => {
    navigate("/products"); // Ürünler sayfasına yönlendirme
  };

  return (
    <HomeContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Welcome to React Shop!</Title>
        <Description>
          Explore the best products at the most affordable prices.
        </Description>
        <ButtonContainer>
          <Button onClick={handleStartShopping}>Start Shopping</Button>
        </ButtonContainer>
      </motion.div>
    </HomeContainer>
  );
}
