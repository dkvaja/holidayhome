import React, { useState, useCallback, useContext } from "react";
import { AppContext } from "./GalleryContainer";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import galleryImages from "../mockData/galleryImages";

const ImageGallery = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // value get from searchbox
  const searchTag = props.search;

  // get tag name from tagbox using useContext
  //
  const clickedTag = state.inputText;
  // console.log(clickedTag);
  // console.log(searchTag);

  const choosenTag = searchTag === "" ? clickedTag : searchTag;
  // console.log(choosenTag);

  const selectedImages =
    choosenTag === undefined
      ? galleryImages
      : galleryImages
          .map((item) => ({
            ...item,
          }))
          .filter((item) => {
            return item.tags.includes(choosenTag.toLocaleLowerCase()) === true;
          });

  // lightbox function

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  //
  return (
    <>
      <div className="gallery">
        <Gallery photos={selectedImages} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={selectedImages.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </>
  );
};

export default ImageGallery;
