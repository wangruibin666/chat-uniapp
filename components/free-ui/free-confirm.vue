<template>
	<view>
		<free-popup ref="confirm" center maskColor transformOrigin="center center" >
			<view class="bg-white rounded " style="width: 600rpx;">
				
				<!-- 头部 -->
				<view class="p-4 flex flex-column">
					<text class="font-md font-weight-bold mb-3">{{title}}</text>
					<slot></slot>
				</view>
				
				<!-- 底部 -->
				<view class="border-top flex align-stretch" style="height: 100rpx;">
					<view class="flex-1 border-right flex align-center justify-center"  @click="cancel">
						<text class="font text-muted">取消</text>
					</view>
					<view class="flex-1 flex align-center justify-center"  @click="confirm">
						<text class="font main-text-color">确定</text>
					</view>
				</view>
			</view>
		</free-popup>
	</view>
</template>

<script>
	import freePopup from '@/components/free-ui/free-popup.vue'
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	export default{
		components:{
			freePopup,
			freeAvatar
		},
		props:{
			title:{
				type: String,
				default: '提示'
			}
		},
		data(){
			return{
				callback: false
			}
		},
		methods:{
			show(callback = false){
				this.callback = callback
				this.$refs['confirm'].show()
			},
			cancel(){
				this.$refs['confirm'].hide()
			},
			confirm(){
				if(typeof this.callback == 'function'){
					this.callback(()=>{
						this.cancel()
					})
				}
				// this.$refs['confirm'].hide()
			}
		}
	}
</script>

<style>
</style>
