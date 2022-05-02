/**
 * Project Requirents change background color with click henler
 */

// load event heandler

window.onload = () => {
    main();
};

//Project ain functin
function main() {

    const root = document.getElementById('root');
    const btn = document.getElementById('change-bg');

    btn.addEventListener('click', function(){

        const rgbColor = generatRGB()

        root.style.backgroundColor = rgbColor

    });

}

// Rando rgb cloro generator 
function generatRGB(){

    const red = Math.floor( Math.random() * 255 )
    const green = Math.floor( Math.random() * 255 )
    const blue = Math.floor( Math.random() * 255 )

    return `rgb( ${red}, ${green}, ${blue} )`;
}