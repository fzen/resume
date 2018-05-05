!function () {
//     var view = document.querySelector('#works')
//     var controller = {
//         view: null,
//         works: {
//             works1: null,
//             works2: null,
//             works3: null
//         },
//         bindEvent: function(){
//             this.works.works1.addEventListener('click',()=>{

//             })
//         },
//         init: function(view){
//             this.view = view
//             works.works1 = this.view.querySelector('#works1')
//             works.works2 = this.view.querySelector('#works2')
//             works.works3 = this.view.querySelector('#works3')
//         }
//     }

    // 作品集导航按钮，点击时下划线滑动
    works1.onclick = function () {
        decorationItem.className = "item item1";
    }
    works2.onclick = function () {
        decorationItem.className = "item item2";
    }
    works3.onclick = function () {
        decorationItem.className = "item item3";
    }
}()