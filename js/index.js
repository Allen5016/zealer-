/**
 * Created by Administrator on 2017/3/29.
 */
window.onload = function() {

    /*
    * 图片框左右滑动事件
    * */
    var bannerSlider = document.getElementById('bannerSlider');
    var leftBtn = document.getElementById('leftBtn');
    var rightBtn = document.getElementById('rightBtn');

    //滑动图片数量
    var licount = bannerSlider.getElementsByTagName('li').length;
    //给左按钮添加向左滑动事件
    bannerSlider.style.left = '0px';
    leftBtn.onclick = function() {

        var huaDongJvLi = parseInt(bannerSlider.style.left) - 288;
        if(huaDongJvLi >= -2016) {
             $('.banner_slider ul').css('transition' , '0.8s' );
            huaDong(huaDongJvLi);
            
        } else {
            $('.banner_slider ul').css('transition' , '0s' );
            huaDong(-288);
        }
        
    }

    function huaDong(huaDongJvLi){

        bannerSlider.style.left = huaDongJvLi + 'px';

    }
}