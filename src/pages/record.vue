<template>
	<div class="font-bold pt-5 pb-2 mr-2 ml-2 text-3xl border-b-2 border-b-black  font-sans">History</div>
	<div>
		<div class="flex justify-between bg-history-base-gray my-2 mx-3 rounded " v-for="history in historys">

			<div>
				<div class="text-xl font-bold ml-2 pt-2">{{ history.parkinglot }}</div>
				<div class="text-sm ml-2 pb-2 text-history-dark-gray">{{ history.parkingTime }}</div>
			</div>
			
			<div class=" text-base-blue  mr-2 text-[40px] font-bold">{{ history.totalPrice }}</div>
		</div>
	</div>
	
	
</template>
<script setup>
const historys = [
	{
		parkinglot: 'OO Road No.XX',
		parkingTime: 'XXXX/XX/XX 00:00 - XXXX/XX/XX XX:XX',
		totalPrice: '$XXX'
	},
	{
		parkinglot: '木柵路3段220號',
		parkingDate: '2022/12/17',
		parkingTime: '2022/12/17 00:00 - 2022/12/17 18:25',
		totalPrice: '$100'
	},
	{
		parkinglot: '保儀路平面停車場(保儀路157號對面)',
		parkingDate: '2022/12/18',
		parkingTime: '2022/12/17 09:00 - 2023/01/02 14:25',
		totalPrice: '$1032'
	}
]
</script>
