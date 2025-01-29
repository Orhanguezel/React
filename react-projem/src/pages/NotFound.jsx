import { NotFoundContainer, NotFoundTitle, NotFoundMessage } from "../styles/NotFoundStyles";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Aradığınız sayfa bulunamadı.</NotFoundMessage>
      <Link to="/">Ana sayfaya dön</Link>
    </NotFoundContainer>
  );
}
