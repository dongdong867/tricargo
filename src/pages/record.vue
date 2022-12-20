<template>
	<div>
		<div v-for="history in historys">
			<div>{{ history.parkinglot }}</div>
			<div>{{ history.parkingTime }}</div>
			<div>{{ history.totalPrice }}</div>
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
