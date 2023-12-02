const inpu = document.querySelector("input")
const copy = document.querySelector(".copy")
const pass = document.querySelector(".pass")


let str2 = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?"

let length = 12

//create Password
const createPassword = ()=>{
    let str1 = ""
    for(let i = 0;i<12;i++){
        let temp = (Math.floor(Math.random()*str2.length+1))
        str1 += str2[temp];
    }
    inpu.value = str1;
    // console.log(inpu.value)
}

pass.addEventListener('click',()=>{
    createPassword()
})
copy.addEventListener('click',(e)=>{
    // e.target.value = inpu.value
    // console.log(e.target.value)
    inpu.select()
    window.navigator.clipboard.writeText(inpu.value)
})



