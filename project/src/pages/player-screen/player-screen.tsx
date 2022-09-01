import {useEffect, useRef, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilmDetailAction} from '../../store/api-actions';
import {getFilmDetail} from '../../store/data-procces/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
const TWO_DIGIT = 10;
const INTEGER = 1;
const FULL_PERCENT = 100;

const formateTime = (time: number): string => time < TWO_DIGIT ? `0${time}` : `${time}`;

const normaliseRunTime = (duration: number, currentTime: number): string => {
  const currentDuretion = duration - currentTime;

  const hours = Math.floor(currentDuretion / SECONDS_IN_HOUR);
  const minutes = Math.floor(currentDuretion / SECONDS_IN_MINUTE);
  const seconds = Math.floor(currentDuretion);

  if (hours < INTEGER) {
    return `${formateTime(minutes)}:${formateTime(seconds)}`;
  }

  return `${formateTime(hours)}:${formateTime(minutes)}:${formateTime(seconds)}`;
};

const calcPercent = (time = 0, duration = 0) => String((time * FULL_PERCENT) / duration);

export default function PlayerScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmDetailAction(id));
    }
  }, [id, dispatch]);

  const film = useAppSelector(getFilmDetail);

  const [isPlay, setIsPlay] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isProggres, setIsProggres] = useState(true);


  let fimDuration = 0;

  if (videoRef.current !== null) {
    fimDuration = +videoRef.current.duration.toFixed(0);
  }

  const handlePlayClick = () => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.play();
    setIsPlay(true);
  };

  const handlePauseClick = () => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.pause();
    setIsPlay(false);
  };

  const handleVideoTimeupdate = () => {
    if (videoRef.current === null) {
      return;
    }

    setCurrentTime(Math.floor(videoRef.current.currentTime));
  };

  const handleFullScreenClick = () => {
    if (videoRef.current === null) {
      return;
    }

    if (videoRef.current.parentElement === null) {
      return;
    }

    if (document.fullscreenEnabled) {
      document.exitFullscreen();
    }

    videoRef.current.parentElement.requestFullscreen();
  };

  return (
    <div className="player">
      {!isLoad || isProggres ? <LoadingScreen /> : null}

      <video className="player__video"
        ref={videoRef}
        onLoadedMetadata={() => setIsLoad(true)}
        onTimeUpdate={handleVideoTimeupdate}
        onProgress={() => setIsProggres(false)}
        src={film?.videoLink}
        poster={film?.backgroundImage}
      />

      <button onClick={() => navigate(-1)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={calcPercent(currentTime, fimDuration)} max="100"></progress>
            <div className="player__toggler" style={{ left: `${calcPercent(currentTime, fimDuration)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{isLoad ? normaliseRunTime(fimDuration, currentTime) : ''}</div>
        </div>

        <div className="player__controls-row">

          {isPlay ?
            <button type="button" className="player__play" onClick={handlePauseClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button> :
            <button type="button" className="player__play" onClick={handlePlayClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>}

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
}
