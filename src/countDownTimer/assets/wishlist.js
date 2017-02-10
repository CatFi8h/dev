/**
 * Created by iGor on 11/20/16.
 */

var root = document.getElementById('root');

var newTodo = document.getElementsByClassName('new-todo')[0];
console.log(newTodo);
newTodo.addEventListener('keypress', addNewItemToList);

function addNewItemToList(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13 ) {
        var input = newTodo.value();
        console.log(input);
    }
}