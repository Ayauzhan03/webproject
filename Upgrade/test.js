let currentElem = null;
table.onmouseover = function(event) {
  if (currentElem) return;
  let target = event.target.closest('td');
  if (!target) return;
  if (!table.contains(target)) return;
  currentElem = target;
  target.style.background = 'gray';
};
table.onmouseout = function(event) {
  if (!currentElem) return;
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }
  currentElem.style.background = '';
  currentElem = null;
};


highlight_row();
function highlight_row() {
    var table = document.getElementById('table');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.onclick = function () {
            var rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "";
            rowSelected.className += " selected";

            msg = 'Price: ' + rowSelected.cells[0].innerHTML;
            alert(msg);
        }
    }
}




