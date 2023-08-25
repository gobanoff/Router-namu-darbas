import { Link } from "react-router-dom";
import "./Video.css";

const Video = (props) => {
  const { videoID, autoplay, color, controls, start, end, loop, thumbnail } =
    props;

  const youtubeParams = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    color: color || "red",
    controls: controls ? "1" : "0",
    start: start || "0",
    end: end || "",
    loop: loop ? "1" : "0",
  });

  const youtubeURL = videoID
    ? `https://www.youtube.com/embed/${videoID}?${youtubeParams.toString()}`
    : null;

  return (
    <div className="v">
      <div className="video">
        {videoID ? (
          <iframe
            width="1100"
            height="700"
            src={youtubeURL}
            allowFullScreen
            title="YouTube Video Player"
          />
        ) : (
          <img
            src={thumbnail || "https://picsum.photos/560/315"}
            alt="Thumbnail"
          />
        )}
      </div>
      <Link to="/" className="butn4">
        HOME PAGE
      </Link>
    </div>
  );
};

export default Video;
