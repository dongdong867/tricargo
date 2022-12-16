<template>
	<div class="w-[100vw] h-[45vh] bg-white">
		<div>{{ parkinglot.area }}</div>
		<div>{{ parkinglot.name }}</div>
		<div>{{ parkinglot.address }}</div>
		<div>{{ parkinglot.tel }}</div>
		<div>{{ parkinglot.serviceTime }}</div>
		<div>{{ parkinglot.payex }}</div>
		<div>{{ space }}</div>
	</div>
</template>
<script setup>
const props = defineProps({
	parkinglot: {
		area: {
			type: String,
			require: true
		},
		name: {
			type: String,
			require: true
		},
		address: {
			type: String,
			require: true
		},
		tel: {
			type: String,
			require: true
		},
		serviceTime: {
			type: String,
			require: true
		},
		payex: {
			type: String,
			require: true
		}
	},
	space: {
		type: Number,
		require: true
	}
})
</script>
