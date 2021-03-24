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
ex=(q)=>q!=null&&q!=undefined&&q!=[]&&Object.keys(q).length>0
fetcher=(x,method,qs,body,cb,h)=>{
    console.log(body)
    o={method,headers:h??{"Content-Type":"application/json"}}
    if(ex(body)){o.body = JSON.stringify(body)}
    if(ex(qs)){x+="?"+new URLSearchParams(qs).toString()}
    fetch(x,o).then(res=>res.json()).then(cb);
}
$.get =(u,q,c,h)=>fetcher(u,"GET", q,null,c,h)
$.post=(u,b,c,h)=>fetcher(u,"POST",null,b,c,h)
$.ajax=(u,all,c)=>fetcher(u,all.method??"GET",all.query,all.body,c,all.headers)
$.template=(ts)=>new O($(ts).ele().content.cloneNode(true))
window.$=$
})()
