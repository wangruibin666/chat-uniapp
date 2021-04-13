<template>
	<div class="" @longpress="long">
		<!-- 时间显示 -->
		<view v-if="showTime" class="flex align-center justify-center pb-4 pt-2">
			<text class="font-sm text-light-muted">{{showTime}}</text>
			
		</view>
		
		<!-- 撤回消息 -->
		<view class="chat-animate" ref="isremove" v-if="item.isremove">
			<view class="flex align-center justify-center pb-4 pt-1">
				<text class="font-sm text-light-muted">你撤回了一条消息</text>
				
			</view>
		</view>
		
		<!-- 气泡 -->
		<view v-else class="flex align-start position-relative mb-3" :class="isself ? 'justify-end' : 'justify-start'">
			<template v-if="!isself">
				<free-avatar clickType="navigate" :src="item.avatar" size="70"></free-avatar>
				<text v-if="hasLabelClass" class="bg-left-icon iconfont text-white font-md position-absolute">&#xe609;</text>
			</template>
			
			<div class="p-2 rounded ml-3" style="max-width:500rpx" :class="labelClass" :style="labelStyle">
				<!-- 发送文字消息 -->
				<text v-if="item.type == 'text'" class="font-md">{{item.data}}</text>
				<!-- 发送表情包 | 图片-->
				<free-image v-else-if="item.type == 'emotion' || item.type == 'image'" :src='item.data' imageClass="rounded" @click="preview(item.data)" :maxHeight="350" :maxWidth="500"></free-image>
				
				<!-- 音频 -->
				<view v-else-if="item.type === 'audio'" class="flex align-center" @click="openAudio(item.data)">
					<image v-if="isself" :src="!audioPlaying ? '/static/audio/audio3.png' : '/static/audio/play.gif' " style="width: 50rpx;height: 50rpx;" class="mx-1"></image>
					<text class="font">{{item.options.time}}'</text>
					<image v-if="!isself" :src="!audioPlaying ? '/static/audio/audio3.png' : '/static/audio/play.gif' " style="width: 50rpx;height: 50rpx;" class="mx-1"></image>
				</view>
				
				<!-- 视频 -->
				<view v-else-if="item.type === 'video'" class="position-relative rounded" @click="openVideo">
					<free-image @load="loadPoster"  :src='item.options.poster' imageClass="rounded" :maxHeight="350" :maxWidth="300"></free-image>
					<text :style="posterIconStyle" class="iconfont text-white position-absolute" style="font-size: 80rpx;width: 80rpx;height: 80rpx;">&#xe737;</text>
				</view>
			</div>
			
			<template v-if="isself">
				<text v-if="hasLabelClass" class="bg-right-icon text-chat-item iconfont font-md position-absolute">&#xe640;</text>
				<free-avatar clickType="navigate" :src="item.avatar" size="70"></free-avatar>
			</template>
			
		</view>
	</div>
	
</template>

<script>
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation')
	// #endif
	import { mapState,mapActions } from 'vuex'
	import freeImage from './free-image.vue'
	import $time from '@/common/free-lib/time.js'
	import freeIconButton from '@/components/free-ui/free-icon-button.vue'
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	export default{
		components:{
			freeAvatar,
			freeIconButton,
			freeImage
		},
		props:{
			item:{
				type:Object
			},
			index:{
				type:Number
			},
			// 上一条消息的时间戳
			pretime:{
				type:[String,Number]
			}
		},
		computed:{
			...mapState({
				events: state=>state.audio.events
			}),
			labelStyle(){
				if(this.item.type === 'audio'){
					let time = this.item.options.time || 0
					let width = time * 500/60
					width = width < 150 ? 150 : width
					return `width:${width}rpx`
				}
			},
			// 是否本人
			isself(){
				// 获取本人id
				let id = 1
				return this.item.user_id == id
			},
			// 显示时间
			showTime(){
				return $time.getChatTime(this.item.create_time,this.pretime)
			},
			// 是否需要气泡样式
			hasLabelClass(){
				return this.item.type == 'text' || this.item.type == 'audio'
			},
			// 气泡样式（文字和图片背景颜色）
			labelClass(){
				let label = this.hasLabelClass ? 'bg-chat-item mr-3' : 'mr-3'
				return this.isself ? label : 'bg-white ml-3'
			},
			// 短视频封面图标位置
			posterIconStyle(){
				let w = this.poster.w/2 - uni.upx2px(40)
				let h = this.poster.h/2 - uni.upx2px(40)
				return `left:${w}px;top:${h}px`
			}
		},
		data(){
			return{
				innerAudioContext:null,
				audioPlaying:false,
				poster:{
					w:100,
					h:100
				}
			}
		},
		mounted() {
			if(this.item.type === 'audio'){
				// 注册全局事件
				this.audioOn(this.onPlayAudio)
			}
			
			// 监听是否撤回消息
			// #ifdef APP-PLUS-NVUE
			this.$watch('item.isremove', (n,o)=>{
				if(n){
					this.$nextTick(function(){
						animation.transition(this.$refs.isremove, {
						    styles: {
										opacity: 1
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
				}
			})
		},
		// 组件销毁
		destroyed() {
			if(this.item.type == 'audio'){
				// 注销全局事件
				this.audioOff(this.onPlayAudio)
			}
			// 销毁音频
			if(this.innerAudioContext){
				this.innerAudioContext.destroy()
				this.innerAudioContext = null
			}
		},
		methods:{
			// 加载封面
			loadPoster(data){
				this.poster.w = data.w
				this.poster.h = data.h
			},
			...mapActions(['audioOn','audioEmit','audioOff']),
			// 监听播放音频全局事件
			onPlayAudio(index){
				console.log('当前索引'+index)
				if(this.innerAudioContext){
					if(this.index !== index){
						this.innerAudioContext.stop()
					}
				}
			},
			// 播放音频
			openAudio(src){
				this.audioEmit(this.index)
				if(!this.innerAudioContext){
					this.innerAudioContext = uni.createInnerAudioContext();
					// this.innerAudioContext.autoplay = true;
					this.innerAudioContext.src = src;
					this.innerAudioContext.play();
					
					// 监听播放
					this.innerAudioContext.onPlay(()=>{
						this.audioPlaying = true
					})
					// 监听暂停
					this.innerAudioContext.onPause(()=>{
						this.audioPlaying = false
					})
					// 监听停止
					this.innerAudioContext.onStop(()=>{
						this.audioPlaying = false
					})
					// 监听错误
					this.innerAudioContext.onError(()=>{
						this.audioPlaying = false
					})
				}else{
					this.innerAudioContext.stop()
					this.innerAudioContext.play()
				}
				
			},
			// 预览图片
			preview(url){
				this.$emit('preview',url)
			},
			long(e){
				let x = 0
				let y = 0
				// app端
				// #ifdef APP-PLUS-NVUE
					if(Array.isArray(e.changedTouches) && e.changedTouches.length > 0){
						// console.log('222')
						 x = e.changedTouches[0].screenX
						 y = e.changedTouches[0].screenY
					 }
				// #endif
				
				// 小程序端
				// #ifdef MP
					x = e.detail.x
					y = e.detail.y
				// #endif
				 this.$emit('long',{
					 x,
					 y,
					 index:this.index
				})
			},
			// 打开视频
			openVideo(){
				uni.navigateTo({
					url:'../../pages/chat/video/video?url='+this.item.data
				})
			}
		}
	}
</script>

<style scoped>
	.bg-left-icon{
		left: 90rpx;
		top:20rpx;
	}
	.bg-right-icon{
		right: 92rpx;
		top:20rpx;
	}
	.chat-animate{
		/* #ifdef APP-PLUS-NVUE  */
		opacity: 0;
		/* #endif */
	}
</style>
