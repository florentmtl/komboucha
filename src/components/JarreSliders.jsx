import { SliderIngredient } from './forms/SliderIngredient.jsx';

export function JarreSliders({ sucre, setSucre, theVert, setTheVert, theNoir, setTheNoir }) {
  return (
    <div>
      <SliderIngredient
        id="sucre-jarre"
        nom="Sucre"
        value={sucre}
        setValue={setSucre}
        unite="grammes"
        min="0"
        max="300"
      />
      <SliderIngredient
        id="the-vert"
        nom="Thé vert"
        value={theVert}
        setValue={setTheVert}
        unite="sachets"
        min="0"
        max="8"
      />
      <SliderIngredient
        id="the-noir"
        nom="Thé noir"
        value={theNoir}
        setValue={setTheNoir}
        unite="sachets"
        min="0"
        max="8"
      />
    </div>
  );
}
