(()=>{
function O(o){this.o = o;}
O.prototype = {
    hide:      function( )   {this.o.forEach(e=>e.style.visibility="hidden");return this},
    show:      function( )   {this.o.forEach(e=>e.style.visibility="visible");return this},
    html:      function(s)   {this.o.forEach(e=>e.innerHTML = s);return this},
    append:    function(s)   {this.o.forEach(e=>e.append(s.ele?.()??s));return this},
    appendAll: function(eles){eles.o.forEach(e=>this.append(e));return this},
    prepend:   function(s)   {this.o.forEach(e=>e.prepend(s.ele?.()??s));return this},
    val:       function(s)   {this.o.forEach(e=>e.value = s);return this},
    set:       function(k,v) {this.o.forEach(e=>e.setAttribute(k,v));return this},
    get:       function(a)   {return this.o[0].getAttribute(a)},
    ele:       function( )   {return this.o[0]},
    find:      function(q)   {return new O((this.o[0]??this.o).querySelectorAll(q))},
    mimic:     function(ts)  {this.ele().innerHTML='';return this.born(ts);},
    born:      function(ts)  {return this.append($(ts).ele().content.cloneNode(true))},
};
$=(x)=>new O(document.querySelectorAll(x))
fetcher=(x,method,p,cb,h)=>{
    o={method,headers:h??{"Content-Type":"application/json"}}
    if(Object.keys(p).length){
        if(method==="POST"){o.body = JSON.stringify(p)}
        else{x+="?"+new URLSearchParams(p).toString()}
    }
    fetch(x,o).then(res=>res.json()).then(cb);
}
$.get =(u,p,c,h)=>fetcher(u,"GET", p,c,h)
$.post=(u,p,c,h)=>fetcher(u,"POST",p,c,h)
$.template=(ts)=>new O($(ts).ele().content.cloneNode(true))
window.$=$
})()
