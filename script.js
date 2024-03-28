let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let slider = document.getElementsByClassName("slider")[0];
let comment = document.getElementsByClassName("comment")[0];
let leftArrow2 = document.getElementById("leftArrow2");
let rightArrow2 = document.getElementById("rightArrow2");
let more = document.getElementsByClassName("more")[0];
let dist = 0;
let comments = document.getElementsByClassName("comments")[0];
let pairs = document.getElementsByClassName("pair");
let flatTypes = ["Квартира", "Вилла", "Коттедж", "Изба","Дом на колесах", "Вигвам", "Корабль", "Нора", "Пузырь"]
flatTypes = [
    ["flat1.jpg","Квартира","Проспект Маршала Жукова 16/1","4 человека","3 кровати"],
    ["Изба.jpg","Изба","Деревня Кидалово 666 улица", "1 человек", "2 печки+ 1 крематорий"],
     ["Нора.jpg","Нора","Лес, Украiна","2 лисы","0 кроватей спите на полу, это очень удобно, только смотрите чтобы лиса вам глаза не съела"],
     ["Хоббит.jpg","Хоббитчья нора","Средиземье","4 хоббита","4 кровати, Этэншн: утром может прийти Гендальф с гномами и попросить вас пойти с ними в Мордор. Просто попросите их полететь туда на орлах, а не создавать себе проблемы"],
     ["Шалаш2.jpg","Шалаш","Дача,Ангарск","2 человека","2 подстилки"],
     ["Юрта.jpg","Юрта","Бурятия","5 человек","5 кроватей"],
]
let flats = document.getElementsByClassName("flats")[1];
let moreCounter = 0;
console.log(flatTypes[3][2]);

rightArrow.onclick = function () {
    dist= dist + 100;
    dist=dist%(slider.children.length*100)
    console.log(dist);
    slider.style.transform = "translateX(-" + dist + "%)";
}
leftArrow.onclick = function () {
    dist= dist - 100;
    if(dist<0){
        dist=(slider.children.length-1)*100
    }
    slider.style.transform = "translateX(-" + dist + "%)";
    console.log(dist)
}
rightArrow2.onclick = function () {
    let activePair = document.getElementsByClassName("activePair")[0];
    let nextPair;
    if(activePair.nextElementSibling.classList[0]=="pair"){
    nextPair = activePair.nextElementSibling;
    }
    else{
        nextPair = comments.children[0];
    }
    activePair.classList.remove("activePair");
    setTimeout(function(){
    nextPair.classList.add("activePair");
    },500);
}
leftArrow2.onclick = function () {
    let activePair = document.getElementsByClassName("activePair")[0];
    let prevPair;
    if(activePair.previousElementSibling){
    prevPair = activePair.previousElementSibling;

    }
    else{   
        prevPair = pairs[pairs.length-1];
    }
    activePair.classList.remove("activePair")
    setTimeout(function(){
    prevPair.classList.add("activePair");
    },500);
}
more.onclick = function () {
    console.log(12);
    for(let i=0; i<3; i=i+1){
        console.log(flatTypes[i]);
        // let div=document.createElement("div");
        // div.innerHTML=flatTypes[i + moreCounter];
        // div.classList.add("flat")
        // flats.appendChild(div);
        // flats.insertBefore(div,more)
        let a = document.createElement("a");
        a.classList.add("flat")
        let flatContent = `
        <img src="${flatTypes[i + moreCounter][0]}" alt="">
        <div class="flatInfo">
            <h3>${flatTypes[i + moreCounter][1]} </h3>
            <p>${flatTypes[i + moreCounter][2]}</p>
            <section>
                <img src="user.svg" alt="">
                <p>${flatTypes[i + moreCounter][3]}</p>
            </section>
            <section>
                <img src="bed.svg" alt="">
                <p>${flatTypes[i + moreCounter][4]}</p>
            </section>
        </div>
        `;
        a.innerHTML=flatContent;
        flats.insertBefore(a,more)
    }
    moreCounter = moreCounter+3;
    if (flatTypes.length<=moreCounter){
        more.style.display = "none"

    }
    else{

    }
}
