"use strict"

let CheckData = (city_to_check, population_to_check) => {
    if (city_to_check != "" && population_to_check >= 1000 && population_to_check <= 2000000) {
        return true
    }
    else {
        return false
    }
}

let total=0
let largest_city=""
let largest_population=0
let cities = []

window.addEventListener("load", () => { 
    if (sessionStorage.cities) {
       cities = JSON.parse(sessionStorage.cities)
       cities.forEach(cityobject => {
            let td1 = document.createElement("td")
            td1.innerText=cityobject.city
            let td2 = document.createElement("td")
            td2.innerText=cityobject.population
            let tr = document.createElement("tr")
            if (cityobject.population > 100000) {
                td1.style.fontWeight="bold"
                td2.style.fontWeight="bold"
            }
            tr.appendChild(td1)
            tr.appendChild(td2)
            document.getElementById("datarows").appendChild(tr)
            total += cityobject.population
            document.querySelector("#total-population").innerText= total
            if (cityobject.population > largest_population) {
                largest_population=cityobject.population
                largest_city=cityobject.city
                document.querySelector("#largest-city").innerText = cityobject.city + " " + cityobject.population + " inhabitants"
            }
        })
    }
})

document.getElementById("register").addEventListener("click", () => {
    let city = document.getElementById("city").value 
    let population = parseInt(document.getElementById("population").value)
    if (CheckData(city, population)){
        let td1 = document.createElement("td")
        td1.innerText=city
        let td2 = document.createElement("td")
        td2.innerText=population
        let tr = document.createElement("tr")
        if (population > 100000) {
            td1.style.fontWeight="bold"
            td2.style.fontWeight="bold"
        }
        tr.appendChild(td1)
        tr.appendChild(td2)
        document.getElementById("datarows").appendChild(tr)
        total += population
        document.querySelector("#total-population").innerText= total
        if (population > largest_population) {
            largest_population=population
            largest_city=city
            document.querySelector("#largest-city").innerText = city + " " + population + " inhabitants"

        }
        cities.push({
            city: city,
            population: population
        })
        sessionStorage.cities = JSON.stringify(cities)
    }
    else {
        alert("Illegal data!")
    }
})

    

