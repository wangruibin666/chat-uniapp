<template>
	<view :class="item.istop ? 'bg-light' : 'bg-white'" hover-class="bg-hover-light">
		<div class="flex align-stretch"  @click="onClick" @longpress="long">
			<view class="flex align-center justify-center" style="width: 145rpx;">
				<free-avatar :src="item.avatar" size="92"></free-avatar>
				<free-badge :noreadnum="item.noreadnum" badgeClass="position-absolute" badgeStyle="top:15rpx;right:15rpx"></free-badge>
			</view>
			<view class="flex flex-column border-bottom border-light-secondary flex-1 py-3 pr-3">
				<view class="flex align-center justify-between mb-1">	
					<text class="font-md">{{item.nickname}}</text>
					<text class="font-sm text-light-muted">{{item.update_time | formatTime }}</text>
				</view>
				<text class="font text-ellipsis text-light-muted">{{item.data}}</text>
			</view>
		
		</div>
	</view>
	
</template>

<script>
	import freeBase from '@/common/mixin/free-base.js'
	import freeBadge from '@/components/free-ui/free-badge.vue'
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	export default{
		mixins:[freeBase],
		components:{
			freeBadge,
			freeAvatar
		},
		props:{
			item:Object,
			index:Number
		},
		
		methods:{
			onClick(){
				uni.navigateTo({
					url:"/pages/chat/chat"
				})
				// console.log('111')
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
			}
			
		}
	}
</script>

<style>
</style>
