// 点击导航按钮，滚动到对应位置
var a = document.querySelectorAll('#topNavBar nav ul li a');
var a_length = a.length;
for (var i = 0; i < a_length; i++) {
    a[i].onclick = function (e) {
        e.preventDefault();
        var a = e.currentTarget;
        var targetId = a.getAttribute('href');
        var target = document.querySelector(targetId);
        var targetTop = target.offsetTop - 80;
        var currentTop = window.scrollY;
        var t = Math.abs((targetTop - currentTop) / 100 * 200); //每100px滑动300ms
        if (t > 500) {
            t = 500;
        }

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = {
            y: currentTop
        }
        var tween = new TWEEN.Tween(coords);
        tween
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quartic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y);
            })
            .start();
    };
}