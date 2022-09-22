function getMonday(d) {
    d = new Date(d)
    var day = d.getDay()
    diff = d.getDate() - day + (day == 0 ? -6:1)
    return new Date(d.setDate(diff))
}

const jours = ["Lundi ", "Mardi ", "Mercredi ", "Jeudi ", "Vendredi "];
joursemaine = getMonday(new Date())
debutsemaine = new Date(joursemaine.getFullYear(), joursemaine.getMonth(), joursemaine.getDate(), 0, 0)

tr = document.getElementById("jours")
let th;
for (let i = 0; i < jours.length; i++) {
    th = document.createElement("th")
    th.setAttribute("scope", "col")
    th.appendChild(document.createTextNode(jours[i] + joursemaine.getDate() + "/" + (joursemaine.getMonth() + 1)))
    joursemaine.setDate(joursemaine.getDate() + 1)
    tr.appendChild(th)
}

events = [
    ["Apéro", new Date(2022, 8, 21, 19, 0), new Date(2022, 8, 21, 22, 0)],
    ["Goûter", new Date(2022, 8, 23, 18, 0), new Date(2022, 8, 23, 21, 0)]
]

joursemaine.setDate(joursemaine.getDate() - 1)
joursemaine.setHours(23)
joursemaine.setMinutes(59)
joursemaine.setSeconds(59)

tbody = document.getElementById("tbody")
// console.log(debutsemaine < events[0][1] < joursemaine)