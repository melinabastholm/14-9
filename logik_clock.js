function visTid() {
    let nu = new Date();

    let timer = nu.getHours().toString().padStart(2, "0");
    let minutter = nu.getMinutes().toString().padStart(2, "0");
    let sekunder = nu.getSeconds().toString().padStart(2, "0");

    document.querySelector("#ur").textContent =
        timer + ":" + minutter + ":" + sekunder;
}

visTid();

setInterval(visTid, 1000);


let stopKnap = document.querySelector("#stopTid");

stopKnap.addEventListener("click", function () {

    let stoppetTid = document.querySelector("#ur").textContent;

    let nyTid = document.createElement("p");

    nyTid.textContent = stoppetTid;

    let liste = document.querySelector("#tider");

    liste.prepend(nyTid);

});