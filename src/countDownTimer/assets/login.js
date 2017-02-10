/**
 * Created by iGor on 11/26/16.
 */


var root = document.getElementById("root");

var table = document.createElement('table');

for (var i = 0; i < 100; i++){
    var row = document.createElement('tr');
    for( var j = 0; j < 100; j++ ) {
        var cell = document.createElement('td');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    table.appendChild(row);
}
table.addEventListener('mouseover', clickHandler);

var button = document.createElement('button');

button.innerText = 'click me';
button.addEventListener('click', function(e) {
    table.classList.toggle('color-shift')
});

root.appendChild(button);
root.appendChild(table);
function clickHandler(e) {
    var cell = e.target;
    if (cell.tagName !== 'TD') {
        return true;
    }
    cell.classList.toggle('white');
}


