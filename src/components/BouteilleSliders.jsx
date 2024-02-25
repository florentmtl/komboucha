import {SliderIngredient} from "./forms/SliderIngredient.jsx";
import {useState} from "react";

export function BouteilleSliders() {

    const [ginger, setGinger] = useState("10")

    return <div>
        <SliderIngredient id="gingembre-teille" nom="Gingembre" value={ginger} setValue={setGinger} unite="grammes" min="0" max="30"/>
    </div>
}