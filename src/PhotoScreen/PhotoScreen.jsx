import React from 'react';
import { useSelector } from 'react-redux';
import { PhotoContainer, PhotoTitle, PhotoImage, PhotoAuthor } from './styles';

const Photo = () => {
  const selectedPhoto = useSelector((state) => state.selectedPhoto);

  if (!selectedPhoto) {
    return <p>No photo selected</p>;
  }

  return (
    <PhotoContainer>
      <PhotoTitle>Full-size photo with id {selectedPhoto.id}</PhotoTitle>
      <PhotoImage src={selectedPhoto.urls.full} />
      <PhotoAuthor>By: {selectedPhoto.user.name}</PhotoAuthor>
    </PhotoContainer>
  );
};

export default Photo;
