import {useEffect, useState} from "react";

export function JarreStatut({ sendData }) {

    const [currentJarre, setCurrentJarre] = useState({})

    // il faudrait trouver un moyen que cette fonction soit appelée que quand il y a un changement
    // et dès qu’il y a un changement
    useEffect(() => {
        fetch('http://localhost:4000/jarres', {
            headers: {
                'Accept': 'application/json; charset=UTF-8'
            },
        }).then((response) => response.json()).then((data) => {
            if (data) {setCurrentJarre(data.at(-1))}
        })
    }, [sendData]);

    return <>
        {currentJarre && <div>
        <div>Sucre : {currentJarre.sucre} grammes</div>
        <div>Thé noir : {currentJarre.theNoir} sachets</div>
        <div>Thé vert : {currentJarre.theVert} sachets</div>
        </div>}
    </>
}