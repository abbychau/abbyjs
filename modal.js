domCode=`<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <p id='modaltext'>Some text in the Modal..</p>
    </div>
    
    </div>`;
document.body.innerHTML+= domCode
function openModal(str){
    var modal = $("#myModal");
    $("#modaltext").html(str);
    var btn = $("#myBtn").ele();
    var span = $(".close").ele();
    span.onclick = ()=>modal.hide();
    window.onclick = (event)=>event.target == modal.ele()&&modal.hide()
    return ()=>modal.show("block");
}