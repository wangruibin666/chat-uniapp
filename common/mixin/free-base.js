import $Time from '@/common/free-lib/time.js'

export default{
	filters:{
		formatTime(v){
			return $Time.gettime(v)
		}
	},
}