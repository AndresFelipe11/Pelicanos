
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity: 0.3
    });
});

function showUpdatedMessageModal(message) {
    let elem = document.querySelector("#updateMessageModal");
    let instance = M.Modal.getInstance(elem);
    document.querySelector("#strUpdateMessage").innerHTML = message;
    instance.open();
}