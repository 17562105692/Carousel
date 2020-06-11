// Carousel/Carousel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
 
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrayImg:["demo1","demo2","demo3","demo4","demo5","demo6","demo7","demo8"],
    allimg:["img1","img2","img3","img4","img5","img5","img5","img5"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test(e){
      console.log(e)
      let thelength = this.data.arrayImg.length;
      let msg;
      if(e.currentTarget.dataset.value == "img2"){
        msg = this.data.allimg[0]
        for(let i = 0;i < thelength;i++){
          this.data.allimg[i] = this.data.allimg[i+1]
        }
        this.data.allimg[thelength-1] = msg
        this.setData({
          allimg : this.data.allimg
        })
      }else{
        msg = this.data.allimg[thelength-1]
        for(let i = thelength;i>0;i--){
            this.data.allimg[i-1] = this.data.allimg[i-2]
        }
        this.data.allimg[0] = msg
        this.setData({
          allimg : this.data.allimg
        })
      }
    },
  }
})
