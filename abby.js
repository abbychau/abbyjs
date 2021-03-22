(()=>{
function O(o){this.o = o;}
O.prototype = {
    hide:    function( )   {this.o.forEach(e=>e.style.visibility="hidden");return this},
    show:    function( )   {this.o.forEach(e=>e.style.visibility="visible");return this},
    html:    function(s)   {this.o.forEach(e=>e.innerHTML = s);return this},
    append:  function(s)   {this.o.forEach(e=>e.append(s.ele?.()??s));return this},
    appendAll:  function(eles){console.log(eles);eles.o.forEach(e=>this.append(e));return this},
    prepend: function(s)   {this.o.forEach(e=>e.prepend(s.ele?.()??s));return this},
    val:     function(s)   {this.o.forEach(e=>e.value = s);return this},
    set:     function(k,v) {this.o.forEach(e=>e.setAttribute(k,v));return this},
    get:     function(a)   {return this.o[0].getAttribute(a)},
    ele:     function( )   {return this.o[0]},
    find:    function(q)   {return new O((this.o[0]??this.o).querySelectorAll(q))},
    mimic:   function(ts)  {this.ele().innerHTML='';return this.born(ts);},
    born:    function(ts)  {return this.append($(ts).ele().content.cloneNode(true))},
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
$.template=(ts)=>new O($(ts).ele().content.cloneNode(true))
window.$=$
})()
