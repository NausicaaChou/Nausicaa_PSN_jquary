$(function () {
    $.ajax({
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json",
        success:function (data) {
            var product=data.splice(0,4);
            console.log(product);
            var html = "";
            for(var p of product){
                html+=`<div class="list-view list-margin">
                          <a href="${p.href}">
                             <img src="${p.pic}" alt="">
                          </a>
                          <div class="event-menu">
                             <a href="${p.href}">
                                <div class="menu-title">
                                  <span>
                                       ${p.title}
                                   </span>
                                </div>
                            </a>
                            <div class="menu-bottom">
                               <a href="${p.href}">
                            <div class="details-container">
                            <div class="details-container-data">
                                                            <div>PS4</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="menu-footer">
                                                    <span class="price-container">
                                                        <div>
                                                            <h3 class="menu-price">${p.price.toFixed(2)}</h3>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
            }
            var div=document.querySelector(
                "#list>div:first-child>div:nth-child(2)"
            );
            div.innerHTML=html;

            var product=data.splice(0,4);
            console.log(product)
            var html="";
            for (var p of product){
                html+=`<div class="list-view list-margin">
                          <a href="${p.href}">
                             <img src="${p.pic}" alt="">
                          </a>
                          <div class="event-menu">
                             <a href="${p.href}">
                                <div class="menu-title">
                                  <span>
                                       ${p.title}
                                   </span>
                                </div>
                            </a>
                            <div class="menu-bottom">
                               <a href="${p.href}">
                            <div class="details-container">
                            <div class="details-container-data">
                                                            <div>PS4</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="menu-footer">
                                                    <span class="price-container">
                                                        <div>
                                                            <h3 class="menu-price">${p.price.toFixed(2)}</h3>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
            }
            var div=document.querySelector(
                "#list>div:nth-child(2)>div:nth-child(2)"
            );
            div.innerHTML=html;

            var product = data.splice(0,4);
            console.log(product);
            var html = "";
            for(var p of product){
                html+=`<div class="list-view list-margin">
                          <a href="${p.href}">
                             <img src="${p.pic}" alt="">
                          </a>
                          <div class="event-menu">
                             <a href="${p.href}">
                                <div class="menu-title">
                                  <span>
                                       ${p.title}
                                   </span>
                                </div>
                            </a>
                            <div class="menu-bottom">
                               <a href="${p.href}">
                            <div class="details-container">
                            <div class="details-container-data">
                                                            <div>PS4</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="menu-footer">
                                                    <span class="price-container">
                                                        <div>
                                                            <h3 class="menu-price">${p.price.toFixed(2)}</h3>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
            }
            var div=document.querySelector(
                "#list>div:nth-child(3)>div:nth-child(2)"
            );
            div.innerHTML=html;
        }
    })
})