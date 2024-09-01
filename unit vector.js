


    var b=0;


    let hello = ()=>{
          
        let I1 = document.getElementById("Icap").value;
            let j1 = document.getElementById("jcap").value;
            let k1 = document.getElementById("kcap").value;
            I1=parseInt(I1)
            j1=parseInt(j1)
            k1=parseInt(k1)
    
    
    
    let modulus = ""+ (I1**2 + j1**2 + k1**2)**0.5
        modulus = modulus.slice(0,4)
        
        
        let fori = I1
        let forj = (j1 >= 0 )? "+ " +j1 : j1 
        let fork = (k1 >= 0 )? "+ " +k1 : k1
        let unit = fori + "i^ " + "/"+ " "+ modulus + "  " + forj +"j^"+ "/" + modulus + "  " + fork + "k^" +"/" + modulus
        
        
        let ans2 = document.createElement('div')
        
        ans2.classList.add('ans')
        b++
        ans2.innerHTML=` <h4><p>Q-${b}</p> given vectors</h4> <br> 
        <p>a = ${fori}i^ ${forj}j^ ${fork}k^</p>
        <br>
        <h4 class="soln" >Solution</h4>
        
        <p> ā/ |a| =  ${unit}</p>`
    
    
        
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
    
        I1.value= ""
        j1.value= ""
        k1.value= ""
    }
    document.getElementById("clear").addEventListener('click' , hello2 )
    document.getElementById("submit").addEventListener('click' , hello )

    let instraction = ()=>{
        let try1 = document.createElement("div")
        try1.classList.add('try')
        try1.innerHTML = `<h2 style= "margin:1rem : ">Instruction</h2>
    
            <p>formula =  â = ā/|a|</p>
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