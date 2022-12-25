//@ts-nocheck
import React from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllPhotoUrls } from "../../helpers/photos";

const { useState } = React;

interface Props {
  image: string;
  className: string;
  children?: JSX.Element;
  showCarousel?: boolean;
}

export const Image = ({
  image,
  className,
  children,
  showCarousel = true,
}: Props): JSX.Element => {
  const customStyles = {
    content: {
      maxWidth: "800px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: 0,
      background: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.50)",
    },
  };

  const [open, setOpen] = useState<boolean>(false);

  const allPhotos = getAllPhotoUrls();

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={className}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {showCarousel && (
          <Carousel
            showThumbs={false}
            showIndicators={false}
            dynamicHeight={true}
            transitionTime={0}
            useKeyboardArrows={true}
            autoFocus={true}
          >
            <div>
              <img src={image} />
            </div>
            {allPhotos.map((photo) => (
              <img src={photo} />
            ))}
          </Carousel>
        )}
      </Modal>
    </>
  );
};
