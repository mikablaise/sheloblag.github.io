const txt1 = document.getElementById("tbuser");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
const deBouton = document.querySelector(".buttonYES");
const wi1 = document.getElementById("wi1");
const non1 = document.getElementById("non1");

console.log(deBouton);

function fun1() {
  out1.innerHTML = "bonjour " + txt1.value + " ou pale franse byen ?";
}

btn1.addEventListener("click", () => {
  fun1();

  if (deBouton.style.display === "block") {
    deBouton.style.display = "none";
  } else {
    deBouton.style.display = "block";
  }

  if (txt1.value.length == 0) {
    alert("mete nonw svp");
    document.location.reload();
    return false;
  }
  return true;
});

wi1.addEventListener("click", () => {
  window.location.href = "./apiJoke/index.html";
});

wi1.addEventListener("click", () => {
  out1.innerHTML = "Eske w gen dan pouri ";
});

non1.addEventListener("click", () => {
  out1.innerHTML = "Ebyen ou pa fini lekol ou ";
});
