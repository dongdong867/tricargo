<template>
	<div class="font-bold pt-5 pb-2 mr-2 ml-2 text-3xl border-b-2 border-b-black  font-sans">History</div>
	<div>
		<div class="flex justify-between bg-history-base-gray my-2 mx-3 rounded " v-for="history in historys">

			<div>
				<div class="text-xl font-bold ml-2 pt-2">{{ history.parkinglot }}</div>
				<div class="text-sm ml-2 pb-2 text-history-dark-gray">{{ history.parkingStartTime }}</div>
				<div class="text-sm ml-2 pb-2 text-history-dark-gray">{{ history.parkingEndingTime }}</div>

			</div>
			
			<div class=" text-base-blue mt-2 mr-5 text-[40px] font-bold">{{ history.totalPrice }}</div>
		</div>
	</div>
	
	
</template>
<script setup>
const historys = [
	{
		parkinglot: '木柵路3段220號',
		parkingDate: '2022/12/20',
		parkingStartTime: '2022/12/20 00:00 - ',
		parkingEndingTime:'2022/12/20 18:25',
		totalPrice: '$40'
	},
	{
		parkinglot: '保儀路平面停車場',
		parkingDate: '2022/12/18',
		parkingStartTime: '2022/12/18 09:00 - ',
		parkingEndingTime: '2023/12/19 14:25',
		totalPrice: '$323'
	},
	{
		parkinglot: '第二殯儀館停車場',
		parkingDate: '2022/12/16',
		parkingStartTime: '2022/12/16 14:00 - ',
		parkingEndingTime: '2023/12/16 16:25',
		totalPrice: '$50'
	},
	{
		parkinglot: '文山區行政中心便民停車場',
		parkingDate: '2022/12/13',
		parkingStartTime: '2022/12/13 14:50 - ',
		parkingEndingTime: '2023/13 15:20',
		totalPrice: '$30'
	},
	{
		parkinglot: '松山區健康路',
		parkingDate: '2022/12/10',
		parkingStartTime: '2022/12/10 11:34 - ',
		parkingEndingTime: '2023/12/10 13:30',
		totalPrice: '$20'
	}
]
</script>
