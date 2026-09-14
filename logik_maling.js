const bredde = document.querySelector("#bredde");
const højde = document.querySelector("#højde");
const maling = document.querySelector("#maling");

const antalVinduer = document.querySelector("#antalVinduer");
const vindueBredde = document.querySelector("#vindueBredde");
const vindueHøjde = document.querySelector("#vindueHøjde");

const output = document.querySelector("#output");


function beregnMaling() {

    // Henter tallene fra HTML
    let breddeTal = Number(bredde.value);
    let højdeTal = Number(højde.value);
    let malingTal = Number(maling.value);

    let antalVinduerTal = Number(antalVinduer.value);
    let vindueBreddeTal = Number(vindueBredde.value);
    let vindueHøjdeTal = Number(vindueHøjde.value);


 
    let vægAreal = breddeTal * højdeTal;

    let vindueAreal =
        antalVinduerTal * vindueBreddeTal * vindueHøjdeTal;

    let arealDerSkalMales = vægAreal - vindueAreal;

    let resultat = arealDerSkalMales * malingTal;


    output.textContent = resultat.toFixed(2);
}


bredde.addEventListener("input", beregnMaling);

højde.addEventListener("input", beregnMaling);

maling.addEventListener("change", beregnMaling);

antalVinduer.addEventListener("input", beregnMaling);

vindueBredde.addEventListener("input", beregnMaling);

vindueHøjde.addEventListener("input", beregnMaling);