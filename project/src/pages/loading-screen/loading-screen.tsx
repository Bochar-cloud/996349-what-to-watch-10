import './loading-screen.css';

export default function LoadingScreen (): JSX.Element {
  return (
    <div className="loading-screen">
      <div className='loading-screen__container'>
        <div className="loading-screen__loader"></div>
      </div>
    </div>
  );
}
