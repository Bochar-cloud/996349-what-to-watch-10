import {ChangeEvent} from 'react';

type RaitingInputProps = {
  id: number;
  raitingFilm: number;
  handleInputChange: ({target}:ChangeEvent<HTMLInputElement>) => void;
};

export default function RaitingInput ({id, raitingFilm, handleInputChange}:RaitingInputProps):JSX.Element {
  return (
    <>
      <input className="rating__input" checked={id === raitingFilm} id={`star-${id}`} type="radio" name="rating" value={id} onChange={handleInputChange}/>
      <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
    </>
  );
}
