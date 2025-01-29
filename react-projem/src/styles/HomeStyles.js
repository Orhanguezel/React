import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary};
`;

export const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
