let input = document.querySelectorAll("input")
let button = document.querySelector("button")
let span = document.querySelector("span")

function getnetsalary(){

    let gross =input[0].value ;
    let tax =input[1].value ;
    let ins =input[2].value ;
    let bouns =input[3].value ;

    let inscost = +gross * (+ins/100);
    let afterins = +gross - +inscost;
    let taxcost = +afterins * (+tax/100);
    let grosstotal = +afterins - +taxcost;
    let net = +grosstotal + +bouns;

     span.innerText = net ;



}

for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('keyup',getnetsalary);
}


//  let Inscost = +gross * (+tax/100) ;
  //    let grossAftertax = +gross - +Inscost ;

  //  let taxcost = +grossAfterIns - (+tax/100) ;

   // let grossAfterInsAndIns = +grossAfterIns - +taxcost ;

  //  let natsalary = +grossAfterInsAndIns + +bouns ;
   // span.innertaxt = natsalary ;
