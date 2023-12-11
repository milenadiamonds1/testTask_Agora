import styled from 'styled-components';

export const PhotoContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PhotoTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PhotoImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const PhotoAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;
