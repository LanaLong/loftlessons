var tree = document.getElementById('tree');
var treePoint = document.getElementsByClassName('accordeonPoint');


tree.onclick = function (event) {
    var target = event.target.parentNode;
    for (var i = 0; i < treePoint.length; i++) {
        if (target == treePoint[i]) {
            target.classList.toggle('open');
        }
        else {
            var classes = treePoint[i].classList;
            if (classes.contains('open')) {
                classes.toggle('open');
            }
        }
    }
}