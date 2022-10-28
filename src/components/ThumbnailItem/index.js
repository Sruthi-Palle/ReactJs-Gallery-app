import "./index.css";

export const ThumbnailItem = (props) => {
  const { imageItem, clickThumbnail, isactive } = props;
  const { thumbnailUrl, thumbnailAltText } = imageItem;
  //console.log(isactive);
  const thumbnailOpacity = isactive ? "opacity" : "";
  return (
    <div className="eachThumbnail">
      <img
        className={thumbnailOpacity}
        onClick={() => clickThumbnail(imageItem)}
        src={thumbnailUrl}
        alt={thumbnailAltText}
      />
    </div>
  );
};
