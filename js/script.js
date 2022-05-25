/**
 * @param selector {String}        元素选择器
 **/
 (function scrollAPI(selector) {
    // 处理浏览器的兼容性
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
      $con = $(selector),
      $list = $con.children('ul'),
      ITEMHEIGHT = 40, // 元素高度
      CONHEIGHT = $con.innerHeight(),
      LISTHEIGHT = $list.outerHeight(),
      SPEED = 0.4, // 滚动速度; 越大越快 不能小于零!!
      sTop = LISTHEIGHT - CONHEIGHT, // 初始值应等于列表的实际高度
      animation;
  
    // 初始化样式，让容器默认滚动到底部
    $con.scrollTop(sTop);
  
    // 设置动画
    animation = requestAnimationFrame(action);
  
    // 循环的主体
    function action() {
      // 如果找不到元素, 则清除动画
      if ($con.length == 0) {
        cancelAnimationFrame(animation);
        return false;
      }
  
      // 如果没有到达顶端，则减小sTop的值，向下滚动；否则重置sTop的值为元素高度，并将list最后一个放到list第一个
      if (sTop > 1) {
        sTop -= SPEED;
      } else {
        sTop = ITEMHEIGHT;
        $list.children('li:last-child').insertBefore($list.children('li:first-child'));
      }
  
      $con.scrollTop(sTop);
      animation = requestAnimationFrame(action);
    }
  
    $con.off();
    $con.on('mouseenter', function() {
      // 鼠标进入, 则停止滚动；并且添加鼠标移出事件（移出后开启滚动）
      cancelAnimationFrame(animation);
  
      $con.off('mouseleave');
      $con.on('mouseleave', function() {
        animation = requestAnimationFrame(action);
      });
    });
  }('#scroll-wrapper'));

  window.onload=function(){
    // 购物车下拉列表
  let shop = document.getElementsByClassName("shop")[0];
  let shopA = document.getElementsByClassName("shopA")[0];
  let shopXiala = document.getElementsByClassName("shop-xiala")[0];
  shop.onmouseover = function(){
    shopA.style =`background-color:#fff;color:#ff6700`;
    shopXiala.style = `height:98px`;
  }
  shop.onmouseout = function(){
    shopA.style =`background-color:#424242;color:#b0b0b0;transition:background-color 0s .3s;`;
    shopXiala.style = `height:0`;
  }

//导航栏选项卡
let navBox = document.querySelector(".mainnav>.center");
let navTit = document.querySelectorAll(".mainnav>.center>ul>.nav-tit");
let navXiala = document.querySelectorAll(".mainnav>.center>ul>li>.nav-xiala");
navBox.onmouseenter = function(){
    navXiala.forEach((itme)=>itme.classList.add("transition"));
  }
for(let i=0;i<navTit.length;i++){
  navTit[i].onmouseover = function(){
    navXiala[i].classList.add("active");
  }
  navTit[i].onmouseout = function(){
    navXiala[i].classList.remove("active");
    navXiala.forEach((itmes)=>itmes.classList.remove("transition"));
      navXiala[i].classList.add("transition");
  }
}
//banner轮播
let son = document.querySelectorAll(".bannerimg");
  let banner = document.querySelector(".bannerimgboxs");
  let btn = document.querySelectorAll(".bannerright>ul>li>a");
  let prve = document.querySelector(".anniuleft");
  let next = document.querySelector(".anniuright");
  let t = setInterval(run,2000);
  let index = 0;
  function run(type="next"){
    if(type=="next"){
          index++;
          if(index>4){
              index = 0;
          }
      }else if(type=="prve"){
          index--;
          if(index<0){
              index = 4;
          }
      }
      son.forEach((item)=>{item.classList.remove("active")});
      son[index].classList.add("active");   
      btn.forEach((item)=>{item.classList.remove("active")});
      btn[index].classList.add("active");      
  }

  banner.onmouseover = function(){
      clearInterval(t);
  }
  banner.onmouseout = function(){
      t = setInterval(run,3000);
  }
  for(let i=0;i<btn.length;i++){
      btn[i].onclick = function(){
        index = i;
          son.forEach((item)=>{item.classList.remove("active")});
          btn.forEach((item)=>{item.classList.remove("active")});
          son[index].classList.add("active");
          btn[index].classList.add("active");
      }
  }

  next.onclick = function(){
      run();
  }
  prve.onclick = function(){
      run("prve");
  }
  //banner左侧选项卡效果
let bannerleftTit = document.querySelectorAll(".bannerleft1");
let bannerleftcon = document.querySelectorAll(".childer");
for(let i=0;i<bannerleftTit.length;i++){
  bannerleftTit[i].onmouseover = function(){
    bannerleftcon.forEach((itmes)=>itmes.style="display:none");
    bannerleftcon[i].style="display:block";
  }
  bannerleftTit[i].onmouseout = function(){
    bannerleftcon.forEach((itmes)=>itmes.style="display:none");
  }
}
//小米明星单品
let btnLeft = document.querySelector(".conone>.conone-top>.btns>.btn-left");
let btnRight = document.querySelector(".conone>.conone-top>.btns>.btn-right");
let conOne = document.querySelector(".conone-con");
btnLeft.onclick = function(){
  conOne.style.left ="0";
  btnLeft.classList.add("active");
  btnRight.classList.remove("active");
}
btnRight.onclick = function(){
  conOne.style.left ="-1226px";
  btnLeft.classList.remove("active");
  btnRight.classList.add("active");
}
//家电选项卡效果
function xuanxiangka(str){
  let conTit = document.querySelectorAll(str+">.remen-li");
  let conlis = document.querySelectorAll(str+">.con-con-right-con");
  for(let i=0;i<conTit.length;i++){
    conTit[i].onmouseover = function(){
      conTit.forEach((itmes)=>itmes.className="remen-li");
      conTit[i].className="remen-li active";
      conlis.forEach((itmes)=>itmes.className="con-con-right-con");
      conlis[i].className="con-con-right-con active";
    }
  }
}
xuanxiangka(".zhineng");
}
//新闻轮播加速
function loadscript() {
  LazyLoad.loadOnce([
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
  ], loadComplete);
}
setTimeout(loadscript, 0);