<template>
	<view>
		<view class="p-3 flex align-start border-bottom border-light-secondary"
		 style="">
			<free-avatar :src="item.avatar" size="80"></free-avatar>
			<view class="pl-2 flex-1 flex flex-column ">
				<!-- 昵称 -->
				<text class="font-md text-hover-primary mb-1">{{item.username}}</text>
				<!-- 内容 -->
				<text class="font-md text-dark mb-1">{{item.context}}</text>
		
		<!-- 图片 -->
				<view v-if="item.image.length" class="py-2 flex flex-wrap">
					<block v-for="(image, imageIndex) in item.image" :key="imageIndex">
						<!-- 图片(单个) -->
						<free-image v-if="item.image.length == 1" :src="image.src" imageClass="rounded" class="bg-secondary" @click="preview(image.src)"></free-image>
		
						<!-- 图片（多个） -->
						<image v-else :src="image.src" mode="aspectFill" style="height: 180rpx;width: 180rpx;"
						 class="bg-secondary mr-1 mb-1 rounded" @click="preview(image.src)"></image>
					</block>
		
				</view>
		
		<!-- 视频 -->
		<view v-if="item.video" class="py-2">
			<video :src="item.video.src" :poster="item.video.poster" controls style="width: 500rpx;height: 300rpx;" loop></video>
		</view>
		
				<!-- 时间 || 操作 -->
				<view class="flex align-center justify-between">
					<text class="font-sm text-light-muted">{{item.create_time | formatTime}}</text>
					<view class="rounded p-1 bg-light" @click="$emit('action',{item, index})">
						<text class="text-hover-primary iconfont font">&#xe62a;</text>
					</view>
				</view>
				
				<!-- 点赞评论 -->
				<view v-if="item.supports.length || item.comments.length" class="bg-light mt-2">
					<!-- 点赞 -->
					<view v-if="item.supports.length" class="border-bottom flex align-center p-2">
						<text class="flex-shrink iconfont font text-hover-primary">&#xe637;</text>
						<view class="flex flex-wrap flex-1 ml-1">
							<text v-for="(s,si) in item.supports" :key="si" class="font text-hover-primary ml-1">{{s.username}}</text>
						</view>
					</view>
					<!-- 评论 -->
					<view v-if="item.comments.length" class="flex align-start p-2">
						<text class="flex-shrink iconfont font-md text-hover-primary">&#xe64e;</text>
						<view class="flex flex-column flex-1 ml-2">
							<view v-for="(c,ci) in item.comments" :key="ci" class="flex">
								<text class="text-hover-primary font">{{c.username}}:</text>
								<text class="font text-dark flex-1">{{c.content}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $T from '@/common/free-lib/time.js'
	import freeImage from '@/components/free-ui/free-image.vue'
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	export default {
		components:{
			freeImage,
			freeAvatar
		},
		props:{
			item: Object,
			index: Number
		},
		filters:{
			formatTime(value){
				return $T.gettime(value)
			}
		},
		computed:{
			urls(){
				return this.item.image.map(i => i.src)
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			//图片查看
			preview(src){
				uni.previewImage({
					current:src,
					urls:this.urls,
					indicator:"default"
				})
			},
			
		}
	}
</script>

<style>
</style>
