# abbyjs 1.0 完美終極版

啟發於MingGeJs，我也想寫個霸氣的Readme 和霸氣的jQuery

本人推出国产山寨AbbyJs，为什么我要开发一个山寨MingGeJs？老实说我从来没用过MingGeJs，正因为我反感MingGeJs。 为什么我反感，因为我完全有开发MingGeJs的能力，MingGeJs的底层我都了如指掌。
我开发插件一直都是用原生JS，虽说我反感MingGeJs，但是MingGeJs却在鬼畜界占有大量的用户份额，之后我有个想法，不如重新开发一个属于自己思想，自己架构的MingGeJs。

用法
```html
<script src="./abby.js"></script>
<div class='box'></div>
<div class='box2'></div>
<div id='box2'></div>
<button onclick="$('.box').hide()">hide</button>
<button onclick="$('.box').show().html('x')">show</button>
<script>
    $.get(
        'https://jsonplaceholder.typicode.com/todos/1',
        {a:123},
        (res)=>{
            $(".box").html(res.title)
        }
    )
    $.get(
        'https://jsonplaceholder.typicode.com/todos/2',
        {a:123},
        (res)=>{
            $("#box2").html(res.title)
        }
    )
    $.post(
        'https://jsonplaceholder.typicode.com/posts',
        {title:123},
        (res)=>{
            $(".box2").html(JSON.stringify(res))
        }
    )
</script>
```

我给了他一个霸气的名字：AbbyJs，

AbbyJs是什么？它是我某天划水時完成的作品，它是一个JS类库，它拥有和MingGeJs相同的语法，近似的函数，相同的函数用法，但是动画，选择器性能，函数 效率都在MJ之上，同时**不**兼容IE 6 7 8，同时与MingGeJS相兼容!

它的名字叫AbbyJs，Abby就是我的大名， 一看到插件名字，就知道作者是我，知道它是国产的，让别人知道国产类库一样做得很出色，出众!

本人文化程度不高，初中毕业！会半句英文，但是我相信只要肯努力一样可以实现自己的梦想。MingGeJS的梦想有点大胆，就是在全球范围内，占据

MingGeJs百分之50以上的用户份额。AbbyJs已在Github开源(廢話不然你怎麼看到)，欢迎各路前端高手对AbbyJs类库进行评测！

我是Abby 请支持国产Abby.js类库，因为我们都是中国人。

下面我介绍一下minggeJS几大优点。

AbbyJS具有以下优点 

1. 选择器执行速度胜出MingGeJs，MingGeJs 的選擇器是基於Regex 的。我的直接用原因querySelectorAll, 在瀏覽器有原生的選擇速度！

2. 众所周之，minggeJS的动画采用的是CSS3过渡原理，但市面上已經有無數的CSS3 動畫庫，我決定不做！

3. 语法，函数用法，函数名称，都与MingGeJS一致，只要会MingGeJS，你就会更用AbbyJS,易学易用，马上上手。AbbyJS不单单是山寨JQUERY，更多的是融入了自己的思想，想法！ 

4. 文件体积不到1K, 比MingGeJS 的20到40K 強上幾十甚至上百倍！大量節省頻寬，甚至可以複製貼上。 為地球盡一分力！

5. AbbyJS沒有后期发展，因為無論在桌面端還是手機端，都已經完全戰勝MingGeJS, jQuery, Zepto 等輩。已沒有優化空間。

6：众所周之，JQUERY的动画原理是采用定时器方原理，minggeJS原理不同，但基於大部分用戶都不造動畫，這個幾百B 的庫，才是你最佳的选择！
