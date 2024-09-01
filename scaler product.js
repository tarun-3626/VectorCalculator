



var b=0;


let hello = ()=>{
      
    let I1 = document.getElementById("Icap").value;
let j1 = document.getElementById("jcap").value;
let k1 = document.getElementById("kcap").value;
I1=parseInt(I1)
j1=parseInt(j1)
k1=parseInt(k1)
let I2 = document.getElementById("Icap1").value;
let j2 = document.getElementById("jcap1").value;
let k2 = document.getElementById("kcap1").value;
I2=parseInt(I2)
j2=parseInt(j2)
k2=parseInt(k2)


let AdotB = I1*I2 + j1*j2 + k1*k2
    
    let ans2 = document.createElement('div')
    
    ans2.classList.add('ans')
    b++
    let fori = I1
    let tori = I2
    let forj = (j1 >= 0 )? "+ " +j1 : j1 
    let torj = (j2 >= 0 )? "+ " +j2 : j2
    let fork = (k1 >= 0 )? "+ " +k1 : k1
    let tork = (k2 >= 0 )? "+ " +k2 : k2 
    ans2.innerHTML=` <h4><p>Q-${b}</p> given vectors</h4> <br> 
    <p>a = ${fori}i^ ${forj}j^ ${fork}k^</p>
    <p>b = ${tori}i^ ${torj}j^ ${tork}k^</p><br>
    <h4 class="soln" >Solution</h4>
    
    <p> a . b =  ${AdotB}</p>`


    
    ans2.style = " border: .4rem solid rgba(0, 0, 0, 0.421);  transition: .5s; border-radius: 1rem;padding: 3rem;font-size: large; width: 70%; margin:2rem;"
    document.getElementById('perans').prepend(ans2)
    
    if(b==1){
        console.log(b)
        perans.insertAdjacentHTML("beforebegin" , `<h3>Answers</h3>` )
    }

}

let hello2 = ()=>{
      
    let I1 = document.getElementById("Icap")
    let j1 = document.getElementById("jcap")
    let k1 = document.getElementById("kcap")


    let I2 = document.getElementById("Icap1")
    let j2 = document.getElementById("jcap1")
    let k2 = document.getElementById("kcap1")
    I2.value= ""
    j2.value= ""
    k2.value= ""
    I1.value= ""
    j1.value= ""
    k1.value= ""
     console.log("ompawar")
}
document.getElementById("clear").addEventListener('click' , hello2 )
document.getElementById("submit").addEventListener('click' , hello )
let instraction = ()=>{
    let try1 = document.createElement("div")
    try1.classList.add('try')
    try1.innerHTML = `<h2 style= "margin:1rem : ">Instruction</h2>

        <p>formula = a.b = (i₁.i₂)+(j₁.j₂)+(k₁.k₂)</p>
        <p> i = icap (î) </p>
        <p> j = jcap (ĵ) </p>
        <p> k = kcap (k^) </p>
        <p> Fill value of  î , ĵ & k^ respectively </p>
        <p> Then click on <big>'Submit' </big> for solution </p>
        <p> Click on <big>'clear' </big> for clearing the value î , ĵ & k^ </p>
    `
    mains.prepend(try1)
    // mains.setAttribute("hidden" , "true")
    // console.log(mains.attribute())
    setTimeout(function(){
        try1.setAttribute("hidden" , true)
    }, 30000)
    
}
instraction()