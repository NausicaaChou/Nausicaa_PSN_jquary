$(function () {
    var search=location.search;
    if(search!=="") {
        var lid = search//?lid=9
            .split("=")//[?lid, 9]
            [1];//9
        $.ajax({
            url: "http://localhost:3000/details",
            type: "get",
            data: {lid},
            dataType: "json",
            success: function (output) {
                var {product,pics}=output;
                console.log(product)
                console.log(pics)
                $(".row-right>h2")
                    .html(product.title)
                    .next().children("h5:first-child")
                    .html(product.subtitle)
                    .next().children("span:last-child")
                    .html("|&nbsp;&nbsp;&nbsp;发行日期"+product.date)
                if(product.price===undefined)
                    product.price=0;
                $("#price").html(`￥${product.price.toFixed(2)}`)
                var html="";
                html+=`<img class="left-img-target" src="${product.img_title}" alt="">`;
                var img = document.querySelector(
                    "#pictitle"
                );
                img.innerHTML=html;
                $("div.tech-specs>div:nth-child(2)>div").html(product.type)
                $("div.tech-specs>div:last-child>div").html(product.gb+"&nbsp;GB")
                var html="";
                for (var p of pics){
                    html+=`
                        <img src="${p.sm}" data-lg="${p.md}"  class="carousel-pages-item" alt="">
                    `
                }
                $("div.carousel-pages-items").html(html)
                $("div.carousel_screen>img").attr("src",pics[0].md)

                var $ulImgs=$("div.carousel-pages-items")
                var $mImg=$("div.carousel_screen>img")
                $ulImgs.on("mouseup","img",function(){
                    //获得当前img的data-md和data-lg，分别给中图片和大图片设置新路径
                    var $img=$(this);
                    $mImg.attr("src",$img.attr("data-lg"));
                })
            }
        })
    }
});