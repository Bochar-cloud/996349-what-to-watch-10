import {useState, ChangeEvent} from 'react';
import RaitingInput from '../raiting-input/raiting-input';

const MAX_RAITING = 10;
const DEFAULT_RAITING = 8;

export default function FormSubmitComment ():JSX.Element {
  const [raitingFilm, setRaitingFilm] = useState(DEFAULT_RAITING);
  const [commentText, setCommentText] = useState('');

  const numbers = Array.from({length: MAX_RAITING}, (val, idx) => idx + 1);

  const handleInputChange = ({target}:ChangeEvent<HTMLInputElement>):void => {
    const val = Number(target.value);

    setRaitingFilm(val);
  };

  const handleTextariaChange = ({target}:ChangeEvent<HTMLTextAreaElement>):void => {
    const val = target.value;

    setCommentText(val);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {numbers.reverse().map((number) => <RaitingInput key={number} id={number} raitingFilm={raitingFilm} handleInputChange={handleInputChange}/>)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={commentText} onChange={handleTextariaChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
