import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px;
  max-width: 1400px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;

export const GalleryItem = styled.div`
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  height: 100%;

  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 7px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

export const GalleryTitle = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 28px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PhotoInfo = styled.div`
  padding: 10px;

  text-align: center;
  color: #333;

  p {
    margin: 0;
    font-size: 14px;
  }

  p:first-child {
    margin-bottom: 5px;
  }

  p:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin: 0 5px;
      cursor: pointer;
      color: #333;
      font-size: 18px;
    }

    .active {
      font-weight: bold;
    }

    .disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;
