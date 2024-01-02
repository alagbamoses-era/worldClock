// Lagos

let lagosElement = document.querySelector("#lagos")
if(lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date")
    let lagosTimeElement = lagosElement.querySelector(".time")
    let lagosTime = moment().tz("Africa/Lagos")
    console.log(lagosTime)


    lagosDateElement.innerHTML = lagosTime.format("MMMM DO YYYY")
    lagosTimeElement.innerHTML = `${lagosTime.format("hh:mm:ss")} <small>${lagosTime.format("A")}</small>`
}

// London

let londonElement = document.querySelector("#london")
if(londonElement) {
    let londonDateElement = londonElement.querySelector(".date")
    let londonTimeElement = londonElement.querySelector(".time")
    let londonTime = moment().tz("Europe/London")


    londonDateElement.innerHTML = londonTime.format("MMMM DO YYYY")
    londonTimeElement.innerHTML = `${londonTime.format("hh:mm:ss")} <small>${lagosTime.format("A")}</small>`
}
