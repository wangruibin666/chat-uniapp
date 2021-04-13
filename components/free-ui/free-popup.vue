<template>
	<div style="z-index:9999;text-overflow: hidden;" v-if="status">
		<!--  mask -->
		<div v-if="mask" @click="hide" class="position-fixed top-0 left-0 right-0 bottom-0" :style="getMaskColor">
			
		</div>
		<!-- 弹出框内容-->
		<div ref="popup" class="position-fixed bg-white free-animated" :class="getBodyClass" :style="getBodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation')
	// #endif
	export	default{
		props:{
			// 是否开启模板背景色
			maskColor: {
				type: Boolean,
				default:false
			},
			// 是否开启模板
			mask:{
				type: Boolean,
				default:true
			},
			// 是否处于底部
			bottom: {
				type: Boolean,
				default: false
			},
			// 弹出层内容宽度
			bodyWidth: {
				tyape: Number,
				default: 0
			},
			// 弹出层内容高度
			bodyHeight: {
				tyape: Number,
				default: 0
			},
			bodyBgColor:{
				type: String,
				default: 'bg-white'
			},
			transformOrigin:{
				type:String,
				default:'left top'
			},
			// tabbar高度
			tabbarHeight:{
				type:Number,
				default:0
			}
		},
	
		computed:{
			getMaskColor(){
				let i = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0,0,0,${i})`
			},
			getBodyClass(){
			let bottom = this.bottom ? 'left-0 right-0 bottom-0' : 'rounded border'
			return `${this.bodyBgColor} ${bottom}`
			},
			getBodyStyle(){
				let left = this.x > -1 ? `left:${this.x}px;` : ''
				let top = this.y > -1 ? `top:${this.y}px;` : ''
				return left + top
			}
		},
		data(){
			return{
				status: false,
				x: -1,
				y:-1,
				maxX:0,
				maxY:0
			}
		},
		mounted() {
			try {
			    const res = uni.getSystemInfoSync();
					this.maxX = res.windowWidth - uni.upx2px(this.bodyWidth)
					this.maxY = res.windowHeight - uni.upx2px(this.bodyHeight) - uni.upx2px(this.tabbarHeight)
					
			} catch (e) {
				// console.log(e)
			    // error
			}
		},
		methods:{
			show(x = -1, y = -1){
				if(this.status)return;
				// console.log(this.maxX)
				// console.log(this.maxY)
				// if(this.maxX > x){
				// 	this.x = x
				// }else{
				// 	this.x = this.maxX
				// }
				this.x = (x > this.maxX) ? this.maxX : x
				this.y = (y > this.maxY) ? this.maxY : y
				this.status = true
				// 菜单出现动画
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(function(){
					animation.transition(this.$refs.popup, {
					    styles: {
					        transform: 'scale(1,1)',
									transformOrigin:this.transformOrigin,
									opacity: 1
					    },
					    duration: 200, //ms
					    timingFunction: 'ease',
					    needLayout:false,
					    delay: 0 //ms
					    }, function () {
					        // console.log('动画执行成功')
					    })
				})
				// #endif
					
				
			},
			hide(){
				this.$emit('hide')
				// 菜单关闭动画
				// this.status = false
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(function(){
					animation.transition(this.$refs.popup, {
					    styles: {
					        transform: 'scale(0,0)',
									transformOrigin:this.transformOrigin,
									opacity: 0
					    },
					    duration: 100, //ms
					    timingFunction: 'ease',
					    needLayout:false,
					    delay: 0 //ms
					    }, ()=> {
									this.status = false
					        // console.log('动画关闭')
					    })
				})
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				this.status = flase
				// #endif
				
			}
		}
	}
</script>

<style scoped>
	.free-animated{
		/* #ifdef APP-PLUS-NVUE */
		transform: scale(0,0);
		opacity: 0;
		/* #endif */
	}
</style>
