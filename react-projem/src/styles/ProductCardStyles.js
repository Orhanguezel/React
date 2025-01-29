import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CardDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
`;

