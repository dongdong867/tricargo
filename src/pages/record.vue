<template>
	<div class="font-bold pt-5 pb-2 mr-2 ml-2 text-3xl border-b-2 border-b-black  font-sans">History</div>
	<div>
		<div class="flex justify-between bg-history-base-gray my-2 mx-3 rounded " v-for="history in historys">
			<div>
				<div class="text-xl font-bold ml-2 pt-2">{{ history.parkinglot }}</div>
				<div class="text-sm ml-2 text-history-dark-gray">{{ history.parkingDate }}</div>
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
		parkingDate: 'XXXX/XX/XX',
		parkingTime: '00:00 - XX:XX',
		totalPrice: '$XXX'
	}
]
</script>
