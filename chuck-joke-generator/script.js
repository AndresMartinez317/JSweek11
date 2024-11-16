const Button = document.getElementById("joke-btn");
Button.addEventListener("click", joke)
const jokeitem = document.getElementById("joke")

function joke(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const data = JSON.parse(this.responseText);
          jokeitem.innerHTML = data.value
        }
      };
}