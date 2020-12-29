(()=>{
function O(o){this.o = o;}
O.prototype = {
    hide: function( )   {this.o.forEach((e)=>{e.style.visibility = "hidden";});return this;},
    show: function( )   {this.o.forEach((e)=>{e.style.visibility = "visible";});return this;},
    html: function(s)   {this.o.forEach((e)=>{e.innerHTML = s});return this;},
    set:  function(k,v) {this.o.forEach((e)=>{e.setAttribute(k,v)});return this;},
    get:  function(a)   {return this.o[0].getAttribute(a)},
    ele:  function( )   {return this.o[0]},
};
$=(x)=>new O(document.querySelectorAll(x))
fetcher=(x,method,p,cb)=>{
    o={method,headers:{"Content-Type":"application/json"}}
    if(p!=={}){
        if(method==="POST"){o.body = JSON.stringify(p)}
        else{x+="?"+new URLSearchParams(p).toString()}
    }
    fetch(x,o).then((res)=>{return res.json();}).then(cb);
}
$.get =(u,p,c)=>fetcher(u,"GET", p,c)
$.post=(u,p,c)=>fetcher(u,"POST",p,c)
window.$=$
})()
