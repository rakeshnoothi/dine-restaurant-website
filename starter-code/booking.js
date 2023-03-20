const elements = document.querySelectorAll(".container__main__form__date input");
const button = document.querySelector(".container__main__form__submit-button");
const buttonMinus = document.querySelector(".container__main__form__quantity :nth-child(1)");
const buttonPlus = document.querySelector(".container__main__form__quantity :nth-child(3)");
const displayPeople = document.querySelector(".container__main__form__quantity :nth-child(2)");
const quantity = document.querySelector(".container__main__form__quantity");




let isValid = false;
let people = 0;



Array.from(elements,(element)=>{
    element.addEventListener("input",()=>{
        let calender = new Date();
        let date = calender.getDate();
        let month = calender.getMonth()+1;
        let year = calender.getFullYear();
    
        const inputDate = parseInt(document.querySelector("#date").value);
        const inputMonth = parseInt(document.querySelector("#month").value);
        const inputYear = parseInt(document.querySelector("#year").value);
    
    
        if(inputYear > year){
            console.log("all ok");
        isValid = true;
    
        }else if(inputYear === year && inputMonth > month){
            console.log("input month is:" + inputMonth);
            console.log("all ok")
         isValid = true;
    
        }
        else if(inputYear === year && inputMonth === month && inputDate > date){
            console.log("all okay");
         isValid = true;
    
    
        }
        else{
            isValid = false;
            console.log("error");
        }
    
        if(isValid){
            Array.from(elements,(element)=>{
                element.classList.remove("invalid");
            })
        }
        else{
            Array.from(elements,(element)=>{
                element.classList.add("invalid");
            })
        }
    
        
    })
});






buttonMinus.addEventListener("click",()=>{
 if(people === 0){
    return;
 }
 else{
    people--;
    displayPeople.innerText = `${people} people`;
    quantity.classList.remove("invalid");
 }
});

buttonPlus.addEventListener("click",()=>{
    if(people === 5){
        displayPeople.innerText = `${people} people`;
        return;
    }else{
        people++;
        displayPeople.innerText = `${people} people`;
        quantity.classList.remove("invalid")

    }
    
});



button.addEventListener("click",(e)=>{

    if(!isValid){
        e.preventDefault();

    }


    if(!people){
        quantity.classList.add("invalid");
        e.preventDefault();
    }

    if(isValid && people){
        alert("Thank you! your reservation is successful.")
    }


})