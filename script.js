function formatText(command) {
  document.execCommand(command, false, null);
  document.getElementById("editor").focus();
 }
function changeColor() {
  const color = document.getElementById("colorPicker").value;
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("foreColor", false, color);
  document.getElementById("editor").focus();
}

function alignText(alignment) {
  document.execCommand("justify" + alignment); 
  document.getElementById("editor").focus();
}

function undoAction() {
  document.execCommand("undo", false, null);
}