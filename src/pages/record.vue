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
		parkingDate: '2022/12/17',
		parkingStartTime: '2022/12/17 00:00 - ',
		parkingEndingTime:'2022/12/17 18:25',
		totalPrice: '$16'
	},
	{
		parkinglot: '保儀路平面停車場',
		parkingDate: '2022/12/18',
		parkingStartTime: '2022/12/17 09:00 - ',
		parkingEndingTime: '2023/01/02 14:25',
		totalPrice: '$323'
	},
	{
		parkinglot: '第二殯儀館停車場',
		parkingDate: '2022/12/18',
		parkingStartTime: '2022/12/17 14:00 - ',
		parkingEndingTime: '2023/01/02 14:25',
		totalPrice: '$23'
	}
]
</script>
