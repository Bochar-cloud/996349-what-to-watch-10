import {useRef, useEffect} from 'react';

type VideoPlayerProps = {
  autoPlay: boolean;
  isPlaying: boolean;
  src: string;
  poster: string;
};

export default function VideoPlayer ({src, isPlaying, autoPlay, poster}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();

  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={autoPlay}
      poster={poster}
      style={{objectFit: 'cover'}}
      loop
      muted
      width="280"
      height="175"
    />
  );
}
