<template>
	<view class="bg-white flex align-stretch" hover-class="bg-light" @click="$emit('click')">
		<view v-if="showLeftIcon" class="flex align-center justify-center py-2 pl-3">
			<slot name="icon"></slot>
			<image v-if="cover" :src="cover" mode="widthFix" lazy-load :style="coverStyle"></image>
		</view>
		<view :class="border ? 'border-bottom' : ''" class="flex-1  flex align-center justify-between pr-3 py-3 pl-3">
			<slot name="title">
				<view class="flex align-center">
					<text class="font-md text-dark">{{title}}</text>
					<text v-if="label" class="font-md text-light-muted ml-3">{{label}}</text>
					<image v-if="src" :src="src" mode="" class="ml-3" style="width: 90rpx;height: 90rpx;"></image>
				</view>
			</slot>
			<view class="flex align-center" v-if="showRight">
				<slot name="right"></slot>
				<!-- 右箭头 -->
				<text v-if="showRightIcon" class="iconfont text-light-muted font-md">&#xe60c;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			//是否开启下border
			border:{
				type: Boolean,
				default: true
			},
			src:{
				type: String,
				default: ''
			},
			label:{
				type: String,
				default: ''
			},
			showRightIcon: {
				type: Boolean,
				default: true
			},
			//显示左边图标
			showLeftIcon:{
				type: Boolean,
				default: true
			},
			// 封面
			cover:{
				type: String,
				default:''
			},
			// 标题
			title:{
				type: String,
				default:''
			},
			// 右箭头
			showRight:{
				type:Boolean,
				default:false
				
			},
			// 封面大小
			coverSize:{
				type: [String,Number],
				default: 75
			}
		},
		computed:{
			coverStyle(){
				return `width: ${this.coverSize}rpx;height: ${this.coverSize}rpx`
			}
		}
	}
</script>

<style>
</style>
