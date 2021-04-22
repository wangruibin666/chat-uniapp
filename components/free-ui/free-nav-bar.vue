<template>
	<view>
		<view class="bg-light" :class="getClass">
			<!-- 状态 -->
			<view class="" :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 返回按钮 -->
					<free-icon-button v-if="showBack" @click="back">
						<text class="iconfont font-lg">&#xe60d;</text>
					</free-icon-button>
					
					<!-- 标题 -->
					<view v-if="title" class="font-md ml-3"><slot name="title"></slot></view>
					<slot></slot>
				</view>
				<!-- 右边 -->
				<view class="flex align-center" v-if=showRight>
					<slot name="right">
						<free-icon-button @click="search">
							<text class="iconfont font-md">&#xe6e3;</text>
						</free-icon-button>
						<free-icon-button>
							<text class="iconfont font-md" @tap="openExtends">&#xe682;</text>
						</free-icon-button>
					</slot>
				</view>
			</view>
		</view>
		
		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle">
			
			<!-- 扩展菜单 -->
			<free-popup v-if="showRight" ref="extend" :bodyHeight="525" :bodyWidth="320" bodyBgColor="bg-dark" transformOrigin="right top">
				<view class="flex flex-column" style="width: 320rpx;height: 525rpx;">
					<view class="flex-1 flex align-center" hover-class="bg-hover-dark" v-for="(item,index) in extend" :key="index" @click="clickEvent(item.event)">
						<text class="pl-2 pr-2 iconfont font-md text-white">{{item.icon}}</text>
						<text class="font-md text-white">{{item.name}}</text>
					</view>
				</view>
			</free-popup>
			
		</view>
	</view>
</template>

<script>
	import freePopup from '@/components/free-ui/free-popup.vue'
	import freeIconButton from '@/components/free-ui/free-icon-button.vue'
	export default{
		components:{
			freeIconButton,
			freePopup
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
				this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		props:{
			backEvent:{
				type:Boolean,
				default: false
			},
			showRight:{
				type: Boolean,
				default: true
			},
			showBack:{
				type:Boolean,
				default:false
			},
			title: {
				type: [Boolean,String],
				default: false
			},
			fixed:{
				type: Boolean,
				default: true
			},
			bgColor: {
				type: String,
				default: 'bg-light'
			}
			// noreadnum:{
			// 	type: Number,
			// 	default:0
			// }
		},
		computed:{
			fixedStyle(){
				return `height:${this.navBarHeight}px`
			},
			getClass(){
				let fixed = this.fixed?'fixed-top':''
				return `${fixed} ${this.bgColor}`
			}
		},
		data(){
			return{
				extend: [
					{
						name:"发起群聊",
						event:"",
						icon: "\ue633"
					},
					{
						name:"添加好友",
						event:"",
						icon: "\ue65d"
					},
					{
						name:"扫一扫",
						event:"",
						icon: "\ue614"
					},
					{
						name:"收付款",
						event:"",
						icon: "\ue66c"
					},
					{
						name:"帮助与反馈",
						event:"",
						icon: "\ue61c"
					}
				],
				statusBarHeight: 0,
				navBarHeight: 0
			}
		},
		methods:{
			openExtends(){
				this.$refs.extend.show(uni.upx2px(415),uni.upx2px(150))
			},
			search(){
				uni.navigateTo({
					url:'/pages/common/search/search'
				})
			},
			// 返回
			back(){
				if(this.backEvent){
					uni.navigateBack({
						delta: 1
					});
				}else{
					this.$emit('back')
				}
				
			}
		}
	}
</script>

<style>
</style>
