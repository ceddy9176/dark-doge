function toggleNightMode() {
  var color = document.body.style.color;
  var backgroundColor = document.body.style.backgroundColor;
  var clked = true;

  if (color == "black" && backgroundColor == "white") {
        document.body.style.color="white";
        document.body.style.backgroundColor="black";
        document.body.style.fontFamily="Arial";
        $("#pugpic").attr("src", "img/pug-face-invert.jpg");
    } else {
        document.body.style.color="black";
        document.body.style.backgroundColor="white";
        document.body.style.fontFamily="Times New Roman";
        $("#pugpic").attr("src", "img/pug-face.jpg");
    }
}
