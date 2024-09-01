
let logo = document.getElementsByClassName("logo")
let boton = document.getElementsByClassName("boton")
let box = document.getElementsByClassName("box")

let transfer = (element)=>{

    // let element = elementss
    let wantedID =  element.id
    console.log(wantedID)
    switch (wantedID) {
        case "logo1":
                window.open("vectoraddition.html", "_self" )
            break;
        case "logo2":
                window.open("vector substraction.html", "_self" )
            break;
        case "logo3":
            window.open("scaler product.html", "_self" )
            break;
        case "logo4":
            window.open("cross product.html", "_self" )
            break;
        case "logo5":
            window.open("modulus.html", "_self" )
            break;
        case "logo6":
            window.open("unit vector.html", "_self" )
            break;
    

    }
    
}
let reveal = (element2)=>{
    let wantedID =  element2.id
    console.log(wantedID)
    switch (wantedID) {
        case "btn1":
                window.open("vectoraddition.html", "_self" )
            break;
        case "btn2":
                window.open("vector substraction.html", "_self" )
            break;
        case "btn3":
            window.open("scaler product.html", "_self" )
            break;
        case "btn4":
            window.open("cross product.html", "_self" )
            break;
        case "btn5":
            window.open("modulus.html", "_self" )
            break;
        case "btn6":
            window.open("unit vector.html", "_self" )
            break;
    
    
    }

}