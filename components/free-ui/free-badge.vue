<template>
	<text v-if="noreadnum > 0" :class="badgeClass" class="free-badge bg-danger text-white rounded-circle font-sm" :style="badgeStyle">{{noreadnum}}</text>
</template>

<script>
	export default{
		props:{
			noreadnum: {
				type: Number,
				default: 0
			},
			badgeClass: {
				type: String,
				default: ""
			},
			badgeStyle: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped>
	.free-badge{
		padding-left: 14rpx;
		padding-right: 14rpx;
		padding-bottom: 6rpx;
		padding-top: 6rpx;
	}
</style>
