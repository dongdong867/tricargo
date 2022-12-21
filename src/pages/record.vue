<template>
	<div class="font-bold pt-5 pb-2 text-3xl border-b-2 border-b-black">History</div>
	<div>
		<div class="flex justify-between bg-gray-100 my-2 mx-2 rounded " v-for="history in historys">
			<div>
				<div class="text-xl font-bold">{{ history.parkinglot }}</div>
				<div class="text-sm">{{ history.parkingTime }}</div>
			</div>
			
			<div class=" text-color_time mt-1 text-4xl font-bold">{{ history.totalPrice }}</div>
		</div>
	</div>
	
</template>
<script setup>
const historys = [
	{
		parkinglot: 'OO Road No.X',
		parkingTime: '00:00 - XX:XX',
		totalPrice: '$XXX'
	}
]
</script>
