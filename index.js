
// Rules button
var openBtn = document.querySelector("#rulesBtn");
var closeBtn = document.querySelector(".closeRulesBtn");

openBtn.addEventListener("click", function(){
  document.body.classList.add("popupMain-active");
});

closeBtn.addEventListener("click", function(){
  document.body.classList.remove("popupMain-active");
});

// Start game actions
var gameUser = document.querySelectorAll(".rpc");
var gameComp = document.querySelectorAll(".comp");
var randomValue = Math.floor(Math.random()*3);
var bcgTriangle = document.querySelectorAll(".lines");
var bothInfo = document.querySelector(".picked");
var result = document.querySelector(".yourResult");
var vsComputer = document.querySelector(".againstPC");
var resultPage = document.querySelector(".rulesBtn")
var winPage = document.querySelector(".winPage");
var playAgain = document.querySelector(".playAgainClass");
var score = JSON.parse(localStorage.getItem("score"));
var scoreUser = document.querySelector("#scoreComNum2");

var opp = JSON.parse(localStorage.getItem("opp"));

var scoreComputer = document.querySelector("#scoreComNum1");
var winnerLight = document.querySelector(".winnerImage");
var winnerLightOppn = document.querySelector(".winnerImageOppn");
var playAgainAfterCongo = document.querySelector(".againPlay");
var nextToCongoPage = document.querySelector(".nextBtn");
var congoPageReal = document.querySelector(".congoPage");
var upperBoxEnd = document.querySelector("#upperBox");
var main = document.querySelector(".main");




if(score){
  scoreUser.innerText = score;
}
if(opp){
  scoreComputer.innerText = opp;
}
playAgain.addEventListener("click", () =>{
  window.location.reload();
})
playAgainAfterCongo.addEventListener("click", () =>{
  window.location.reload();
})
nextToCongoPage.addEventListener("click", () => {
  congoPageReal.style.display = "block";
  main.style.display = "none";
})

gameUser.forEach((element,index) =>{
  element.addEventListener("click", ()=>{
    setTimeout(() =>{
      bothInfo.style.opacity="1";
    }, 500)
    gameUser.forEach(item => {
      item.style.display = "none";
    });
    bcgTriangle.forEach(item=>{
      item.style.display="none";
    });
    element.style.display = "block";
    element.classList.add("moved");
    

    setTimeout(() =>{
      gameComp[randomValue].style.display= "block";
      gameComp[randomValue].classList.add("compMoved");
    }, 1200);

    setTimeout(()=>{
      winPage.style.display = "block";
      if(index==1 && randomValue== 0 || index==0 && randomValue== 2 || index==2 && randomValue== 1){
        result.innerText = "YOU WIN";
        winnerLight.style.display = "block";
        document.querySelector("#rulesBtn").style.marginLeft = "77vw";
        setTimeout(()=>{
          nextToCongoPage.style.display = "block";
          
        }, 0);
        
        counter = score;
        counter++;
        scoreUser.innerText = counter;
        localStorage.setItem("score", JSON.stringify(counter))
      }else if(index == randomValue){
        result.innerText = " TIE UP";
        vsComputer.innerText="";
        document.querySelector(".playAgainClass").innerText = "REPLAY";
      }else{
        result.innerText="YOU LOST";
        winnerLightOppn.style.display = "block";
        
        num = opp;
        num ++;
        scoreComputer.innerText = num;
        localStorage.setItem("opp", JSON.stringify(num));
        
      }
    }, 2000);
  });
});

// 
