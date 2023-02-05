class User{
    constructor(birthdate){
        this.birthdate = birthdate;
    }
    get age(){
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthdate.getFullYear()
    }
}
const root = document.getElementById("root");

let input = document.createElement("input");
input.setAttribute("type", "date");
input.setAttribute("class", "input")
root.append(input)

input.addEventListener("input", (e)=>{
    date = new Date(e.currentTarget.value);
    const dateBith = new User(date);
    console.log(dateBith.age)
    let h2 = root.querySelector("h2");
    if (h2) {
        h2.remove();
    }
    let ele = document.createElement("h2");
    ele.setAttribute("class", "h2")
    ele.innerText = dateBith.age  + " years old 😃";
    root.append(ele)
})
