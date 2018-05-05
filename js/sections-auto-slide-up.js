addSlideClass()
findNeareastAndAutoSlideUp()
window.addEventListener('scroll', findNeareastAndAutoSlideUp)

function addSlideClass() {
    // 所有data-x类添加slide滑动动画类
    var tag_with_data_x = document.querySelectorAll('[data-x]');
    for (let i = 0; i < tag_with_data_x.length; i++) {
        tag_with_data_x[i].classList.add('slide');
    }
}

function findNeareastAndAutoSlideUp(){
    //滚轮滑动时找到离页面顶部最近的data-x类移除其slide类，使之滑动进入
    //注意： skill类移除slide类还会触发技能条动画
    var nearest = findNearest();
    nearest.classList.remove('slide');
}

function findNearest() {
    var tag_with_data_x = document.querySelectorAll('[data-x]');
    var nearest = 0;
    for (let i = 1; i < tag_with_data_x.length; i++) {
        if (Math.abs(tag_with_data_x[i].offsetTop - window.scrollY) < Math.abs(tag_with_data_x[nearest].offsetTop - window.scrollY)) {
            nearest = i;
        }
    }
    return tag_with_data_x[nearest];
}