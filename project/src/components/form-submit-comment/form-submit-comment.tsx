import {useState, ChangeEvent, FormEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import RaitingInput from '../raiting-input/raiting-input';
import {addCommentAction} from '../../store/api-actions';
import {ReviewDataRequest} from '../../types/review';
import {useNavigate, useParams} from 'react-router-dom';
import {getIsFormDisabled} from '../../store/data-procces/selectors';
import './form-submit-comment.css';

const MAX_RAITING = 10;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;

export default function FormSubmitComment (): JSX.Element {
  const isFormDisabled = useAppSelector(getIsFormDisabled);

  const [raitingFilm, setRaitingFilm] = useState(0);
  const [commentText, setCommentText] = useState('');

  const [isValidRaiting, setIsValidRaiting] = useState({
    isError: false,
    isValid: false,
  });

  const [isValidComment, setIsValidComment] = useState({
    isError: false,
    isValid: false,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const numbers = Array.from({length: MAX_RAITING}, (val, idx) => MAX_RAITING - idx);

  const validateRaiting = (value: number) => {
    if (value === 0) {
      return setIsValidRaiting({
        isError: true,
        isValid: false,
      });
    }

    return setIsValidRaiting({
      isError: false,
      isValid: true,
    });
  };

  const validateComment = (value: string) => {
    if (value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH) {
      return setIsValidComment({
        isError: false,
        isValid: true,
      });
    }

    return setIsValidComment({
      isError: true,
      isValid: false,
    });
  };

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const val = Number(target.value);

    setRaitingFilm(val);
    validateRaiting(val);
  };

  const handleTextariaChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const val = target.value;

    setCommentText(val);
    validateComment(val);
  };

  const onSubmit = (commentInfo: ReviewDataRequest) => {
    dispatch(addCommentAction(commentInfo));
  };

  const {id} = useParams();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isValidRaiting.isValid && isValidComment.isValid) {
      onSubmit({
        filmId: id ?? '',
        comment: commentText,
        rating: raitingFilm,
      });

      navigate(`/films/${id ? id : ''}?tab=Reviews`);
    }

    if (raitingFilm === 0) {
      setIsValidRaiting({
        isError: true,
        isValid: false,
      });
    }

    if (commentText.length < MIN_COMMENT_LENGTH && commentText.length < MAX_COMMENT_LENGTH) {
      setIsValidComment({
        isError: true,
        isValid: false,
      });
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {numbers.map((number) => <RaitingInput key={number} id={number} raitingFilm={raitingFilm} handleInputChange={handleInputChange}/>)}

          {isValidRaiting.isError &&
          <div className="add-review__error">
            <span className="add-review__error-text">Please set a rating for this movie</span>
          </div>}
        </div>
      </div>

      <div className="add-review__text">
        {isValidComment.isError &&
        <div className="add-review__error">
          <span className="add-review__error-text">The text of the review must be at least 50 and no more than 400 characters.</span>
        </div>}


        <textarea
          disabled={isFormDisabled}
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          value={commentText}
          onChange={handleTextariaChange}
        />

        <div className="add-review__submit">
          <button disabled={isFormDisabled} className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
