window.onload = submit;
document.getElemnetById().onclick = submit;

function submit() {
  document.getElementById("btn").onclick = function () {
    alert("clicked");
  };
}
