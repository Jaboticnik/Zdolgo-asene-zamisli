
export default function Prevajanje(besedilo) {
    return new Promise((uspesno, zavrnjeno) => {
        const Podatki = {
            izvorniJezik: "en",
            prevajanJezik: "sl",
        }
        const {izvorniJezik, prevajanJezik} = Podatki
        fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
            + izvorniJezik
            + "&tl="
            + prevajanJezik
            + "&dt=t&q="
            + besedilo)
            .then(odziv => odziv.json())
            .then(podatki => uspesno(podatki[0][0][0]))
            .catch(() =>  zavrnjeno("Napaka pri prevajanju API-ja"));
    })
}