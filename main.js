const showImage = document.getElementById("show-image");
const button = document.getElementById("button");

window.addEventListener("load", function () {
  console.log("load：リソースファイルを全て読み込みました。");
  const image = document.createElement("img");
  image.src = "./IMG_6119.jpg";
  image.classList.add("image");
  image.id = "image";

  showImage.append(image);
});

function clickTest() {
  target = document.getElementById("image");
  if (target.className == null || target.className == "") {
    target.className = "active";
  } else {
    target.className = "";
  }
}
