let queue = [];
function myFunction() {
  let coffee = document.forms[0];
  let txt = "";
  let i;
  for (i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      txt = txt + coffee[i].value + " ";
    }
  }
  document.getElementById("order").value = "You ordered is: " + txt;
  //}

  let name = document.getElementById("name").value;
  queue.push(name);
  let message = ` your order is conformed`;
  alert(message);

  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (queue[0] === name) {
        reject(`order out of stock,visit after some time`);
      }
    }, 5000);
  });

  myPromise.catch(function (rej) {
    alert(rej);
    // console.log("rej:",rej);
  });
}
function startVaccnation() {
  queue.shift(name);
  if (queue.length === 0) {
    clearInterval(id);
  }
  //  console.log("queue:",queue);
  document.querySelector("#name").value;

  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa11u3eDa7pwEEOvCtDlZehbuoaLhA1Z2S4w&usqp=CAU"
  );

  document.querySelector("#text>div").append(img);

  document.querySelector("#pizza").addEventListener("onclick");

  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpew-Ud5JdIKwniYtkomQpr90Y1pGtbKEtcQ&usqp=CAU"
  );

  document.querySelector("#text>div").append(img);
}
let id = setInterval(startVaccnation, 1000);
