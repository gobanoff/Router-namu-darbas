import { Link } from "react-router-dom";

import Video from "./Video";

const Video1 = () => {
  return (
    <>
      <div>
        <Video
          videoID="XEjLoHdbVeE"
          autoplay={true}
          color="blue"
          controls={true}
          start="01"
          end="199"
          loop={true}
          thumbnail="https://picsum.photos/id/237/536/354"
        />
        <Video
          videoID=""
          autoplay={false}
          controls={true}
          thumbnail="https://picsum.photos/id/237/536/354"
        />
      </div>
    </>
  );
};

export default Video1;
