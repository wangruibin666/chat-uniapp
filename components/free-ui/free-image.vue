<template>
	<view class="">
		<image :src="src" lazy-load :class="imageClass" :style="'width:'+w+'px;height:'+h+ 'px'" @click="$emit('click')" @load="loadImage" class="bg-hover-light"></image>
	</view>
</template>

<script>
	export default{
		props:{
			src:{
				type:String,
				default:''
			},
			imageClass:{
				type:String,
				default:''
			},
			maxWidth:{
				type: Number,
				default:350		//rpx
			},
			maxHeight:{
				type: Number,
				default:350  //rpx
			}
		},
		data(){
			return{
				h: 100,
				w: 100
			}
		},
		methods:{
			// 加载图片
			loadImage(e){
				let w = e.detail.width // 等比例缩放基准
				let h = e.detail.height
				// 最大宽度
				let maxW = uni.upx2px(this.maxWidth)
				
				// 最大高度
				let maxH = uni.upx2px(this.maxHeight)
				if(h <= maxH){
					this.w = w <= maxW ? w : maxW
					this.h = h
					this.$emit('load',{
						w:this.w,
						h:this.h
					})
					return
				}
				if(h > maxH){
					this.h = maxH
					let w2 = maxH * (w / h)
					this.w = w2 <= maxW ? w2 : maxW
					this.$emit('load',{
						w:this.w,
						h:this.h
					})
				}
			},
		}
	}
</script>

<style>
</style>
