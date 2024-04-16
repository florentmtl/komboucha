import { SliderIngredient } from './forms/SliderIngredient.jsx';
import { ChoixDansLaDate } from './forms/ChoixDansLaDate.jsx';

import 'react-datepicker/dist/react-datepicker.css';
export function JarreSliders({ sucre, setSucre, theVert, setTheVert, theNoir, setTheNoir, date, setDate }) {
  console.log('JarreSliders');
  return (
    <div className="mb-3">
      <SliderIngredient nom="Sucre" value={sucre} setValue={setSucre} unite="grammes" min="0" max="300" />
      <SliderIngredient nom="Thé vert" value={theVert} setValue={setTheVert} unite="sachets" min="0" max="8" />
      <SliderIngredient nom="Thé noir" value={theNoir} setValue={setTheNoir} unite="sachets" min="0" max="8" />
      <ChoixDansLaDate date={date} setDate={setDate} />
    </div>
  );
}
