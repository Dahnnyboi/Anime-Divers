import React from "react";
import { isEmpty } from "lodash";
import { Modal, Spinner, Button } from "react-bootstrap";
import { Image, ImageSuspense } from "components/Image";
import { IMAGE_TYPE_THUMBNAIL, IMAGE_SIZE_ORIGINAL } from "configs/constants";
import { labelDate } from "utils/dates";

interface ViewEpisodeModalProps {
  isOpen: boolean;
  toggle: Function;
  isLoading: boolean;
  episode: Any;
}

function ViewEpisodeModal({
  isOpen,
  toggle,
  isLoading,
  episode,
}: ViewEpisodeModalProps): JSX.Element {
  const { number, thumbnail, canonicalTitle, airdate, synopsis } = episode;
  const { original = "" } = thumbnail || {};

  return (
    <Modal show={isOpen} onHide={() => toggle()}>
      {isLoading && !isEmpty(episode) ? (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "420px" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <Modal.Header>
            <Modal.Title>{canonicalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {original && (
              <ImageSuspense
                imageType={IMAGE_TYPE_THUMBNAIL}
                imageSize={IMAGE_SIZE_ORIGINAL}
              >
                <Image source={original} />
              </ImageSuspense>
            )}
            <p className="text-dark mb-0">Episode: {number} </p>
            <small className="text-muted">{labelDate(airdate)}</small>
            <p>{synopsis}</p>
            <Modal.Footer>
              <Button variant="white" onClick={() => toggle()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

export default ViewEpisodeModal;
