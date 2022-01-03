
document.querySelector("#button").addEventListener("click", getDetails);

function getDetails(el){
    el.preventDefault();

    let pay = {
      name: document.querySelector("#name").value,
      num: document.querySelector("#num").value,
      cvv: document.querySelector("#cvv").value,
      date: document.querySelector("#date").value,

    };

    setTimeout(function(){
        alert(`Payment Successfull ,Thank you ${pay.name} `);
    },1000)
}
