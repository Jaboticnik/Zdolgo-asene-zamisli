import './nacin.js'
import Prevajanje from "./prevajalnik.js"

const GumbzamisliHTML = document.getElementById('gumb-zamisli')
const NosilecBesedilaHTML  = document.getElementById('nosilec-besedila')

function Prikazbesedila(besedilo) {
    NosilecBesedilaHTML.textContent = besedilo
}

//Prikaz prehoda ob pritisku gumba
function prehodGumba() {
    GumbzamisliHTML.classList.add("zacniprehod")
    setTimeout(() => {
        GumbzamisliHTML.classList.remove("zacniprehod")
    }, 500)
}

function pridobiZamisel() {
    Prikazbesedila("Nalaganje...")
    fetch("https://www.boredapi.com/api/activity")
        .then(odziv => odziv.json())
        .then(async podatki => {
            Prikazbesedila(await Prevajanje(podatki.activity))
        })
        .catch(() => Prikazbesedila("Napaka pri prenosu API-ja"))
}

GumbzamisliHTML.addEventListener('click', () => {
    prehodGumba()
    pridobiZamisel()
    document.activeElement.blur()
})

//Pridobitev nasveta ze na zacetku
pridobiZamisel()