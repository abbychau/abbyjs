function setupDrawer(inner){
    var domCode = `<div id="mySidenav" class="sidenav-container">

    <span class="drawer-close-button">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    </span>
    :inner:
    </div>
    
    
    <div class="backdrop-container" id="backdrop"></div>
    
    
    <nav>
    
          <span onclick="openNav()" class="mobile-nav-open-icon">&#9776;</span>
      </nav>`
      document.body.innerHTML+= domCode.replace(":inner:",inner)
}



function openNav() {
    $("#mySidenav").ele().style.width = "40%"
    $('#backdrop').ele().style.display = "block"
}

function closeNav() {
    $("#mySidenav").ele().style.width = "0"
    $('#backdrop').ele().style.display = "none"
}
