import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedPhoto } from '../redux/actions';
import {
  GalleryContainer,
  GalleryItem,
  PhotoImage,
  PhotoInfo,
  GalleryTitle,
  PaginationContainer,
} from './styles';
import ReactPaginate from 'react-paginate';

const GalleryList = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const unsplashUrl = 'https://api.unsplash.com/photos';
  const accessKey = 'pmLZXExjhzW5DgNROf38cASeCcS5A7FsffmZnbJlYJ4';
  const count = 30;

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `${unsplashUrl}?client_id=${accessKey}&per_page=${count}&page=${
            currentPage + 1
          }`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }

        const data = await response.json();

        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchPhotos();
  }, [currentPage]);

  const handlePhotoClick = (photo) => {
    dispatch(setSelectedPhoto(photo));
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <GalleryTitle>Unsplash Gallery</GalleryTitle>
      <GalleryContainer>
        {photos.map((photo) => (
          <Link key={photo.id} to={`/photo/${photo.id}`}>
            <GalleryItem key={photo.id} onClick={() => handlePhotoClick(photo)}>
              <PhotoImage src={photo.urls.thumb} alt={photo.description} />
              <PhotoInfo>
                <p>
                  Photo by <strong>{photo.user.username}</strong>{' '}
                </p>
                <p>{photo.description}</p>
              </PhotoInfo>
            </GalleryItem>
          </Link>
        ))}
      </GalleryContainer>
      <PaginationContainer>
        <ReactPaginate
          pageCount={50}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          forcePage={currentPage}
          previousLabel={'<'}
          nextLabel={'>'}
        />
      </PaginationContainer>
    </>
  );
};

export default GalleryList;
