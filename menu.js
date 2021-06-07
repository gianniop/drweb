const firstLevel = document.querySelectorAll('.main-nav ul.level1 > li');
const secMenu = document.querySelector('.sec-menu');

console.log(firstLevel);

let menuEntered = false;
let menuActive = false;

for(let i = 0; i < firstLevel.length; i++){
    firstLevel[i].addEventListener("mouseenter", function(){
        //console.log("enter");
        const level2 = this.querySelector('.lvl2');
        if(level2 !== null){
            menuActive = true;
            this.classList.add('active');
            const arrow = this.querySelector('.arrow');
            arrow.classList.add('rotate');
            secMenu.classList.add('show');
        }
    });
    firstLevel[i].addEventListener("mouseleave", function(){
        //console.log("enter");
        const level2 = this.querySelector('.lvl2');
        if(level2 !== null && !menuEntered){
            this.classList.remove('active');
            const arrow = this.querySelector('.arrow');
            arrow.classList.remove('rotate');
            secMenu.classList.remove('show');
        }
    });
}

secMenu.addEventListener("mouseenter", function(){
    menuEntered = true;
    console.log("menu " + menuEntered);
});
secMenu.addEventListener("mouseleave", function(){
    menuEntered = false;
    console.log("menu " + menuEntered);
});