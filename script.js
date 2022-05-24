
(function () {
  //TODO//
 ex1_button.addEventListener("click", function() {
   ex1_content.innerHTML= "0,1,2,3,4,5,6,7,8,9";
 })
   ex2_tekst.addEventListener("input", function() {
     if(ex2_tekst.value.lenght ==9){
       ex2_content.innerHTML= "Długość numeru musi być równa 9";}
     else{
       ex2_content.innerHTML= "Długość poprawna";}
   })
})();