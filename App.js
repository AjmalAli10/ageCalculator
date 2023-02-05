class User{
    constructor(birthdate){
        this.birthdate = birthdate;
    }
    get age(){
        let currentYear = new Date().getFullYear();
        let birthYear = this.birthdate.getFullYear();

        let completedYears = currentYear - birthYear;

        let currenMonth = new Date().getMonth() + 1;
        let birthMonth = this.birthdate.getMonth() + 1;

        let completedMonths = currenMonth - birthMonth
        

        // let currentDate = new Date().getDate();
        // let birthDate = this.birthdate.getDate();

        // let completedDays = currentDate - birthDate;

        // const getDays = (year, month) => {
        //     return new Date(year, month, 0).getDate();
        // };
        // const totalDaysInBirthMonth = getDays(birthYear, birthMonth);

        if(completedMonths < 0){
            return completedYears =  completedYears - 1
        }else{
            return completedYears = currentYear - birthYear;
        }
        // console.log(birthYear, birthMonth)

        // console.log(totalDaysInBirthMonth)
        // if(currentDate < 0){
        //     completedDays = completedDays + totalDaysInBirthMonth;
        // }
        // let totalMonths = completedYears + (completedMonths) + completedDays;
        // console.log(totalMonths)

    }
}
const root = document.getElementById("root");

let input = document.createElement("input");
input.setAttribute("type", "date");
input.setAttribute("class", "input")
root.append(input)

input.addEventListener("input", (e)=>{
    date = new Date(e.target.value);
    const dateBirth = new User(date);
    console.log(dateBirth.age)
    let h2 = root.querySelector("h2");
    if (h2) {
        h2.remove();
    }
    let ele = document.createElement("h2");
    ele.setAttribute("class", "h2")
    ele.innerText = dateBirth.age  + " years old 😃";
    root.append(ele)
})
