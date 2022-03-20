
function myFunction() {
    var checkBox = document.getElementById("checkbox-toggle");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      // text.style.display = "block";
      text.innerHTML = "‍‍‍‍‍‍‍"
    } else {
      text.innerHTML = "Press the button"
    }
  }
  