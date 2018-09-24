
(function (win, $) {
    var defaultObj = {
        imgWrap: $('.img-wrap'),
        btnWrap: $('.btn-wrap')
    }
    win.Picture = Picture
    function Picture(obj) {
        this.obj = $.extend(true, {}, defaultObj, obj)
        this.num = this.obj.imgWrap.children().length
        this.imgArr = this.obj.imgWrap.children()
        this.init()
        this.bindEvent()
    }
    Picture.prototype.init = function () {
        var self = this
        self.average = Math.floor(360/self.num)
        self.imgArr.css({
            transform: function (index) {
                return 'rotate(' + index*self.average + 'deg)'
            }
        })
        self.change(0)
    }
    Picture.prototype.change = function (ind) {
        var self = this
        var wrapLong = parseInt(self.obj.imgWrap.parent().css("width"))
        var wrapHeight = parseInt(self.obj.imgWrap.parent().css("height"))
        console.log(wrapLong,wrapHeight)
        parseInt((Math.random()-1)* wrapLong )
        parseInt((Math.random()-1)* wrapHeight )
        self.imgArr.eq(ind).siblings().css({
            left: function (index){
                return parseInt((Math.random()-0.5)* wrapLong ) +'px'
            },
            top: function (index) {
                return parseInt((Math.random()-0.5)* wrapHeight ) + 'px'
            },
            zIndex: function (index) {
                return parseInt((Math.random())* wrapHeight )
            },
            transform: function (index) {
                return  'rotate(' + parseInt(Math.random()*360) + 'deg)'
            }
        })
        self.imgArr.eq(ind).css({
            zIndex: 999,
            left: 0,
            top:0,
            transform: 'rotate(0deg)'
        })
        self.obj.btnWrap.find('.active').removeClass('active')
        self.obj.btnWrap.children().eq(ind).addClass('active')
    }
    Picture.prototype.bindEvent = function () {
        var self = this
        self.obj.btnWrap.children().on('click', function (e) {
            var ind = $(this).index()
            // console.log(ind)
            self.change(ind)
        })
        self.obj.imgWrap.children().on('click', function (e) {
            var ind = $(this).index()
            console.log(ind)
            self.change(ind)
        })
    }
})(window, $) 