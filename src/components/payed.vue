<template>
	<div
		class="w-[90vw] h-[60vh] bg-base-grey bg-opacity-80 rounded-[30px] flex flex-col place-content-center place-items-center text-white font-bold text-xl space-y-[3vh]"
	>
		<div class="text-5xl">扣款成功</div>
		<div class="w-[85%] h-[15%] bg-white rounded-[20px] flex place-content-end place-items-center">
			<div class="text-base-red text-5xl p-[4vw]">-$20</div>
		</div>
		<div class="w-[70vw] space-y-[2vh]">
			<div>明細</div>
			<div>
				<div>{{ parkinglot.area }}</div>
				<div>停車地點: {{ parkinglot.name }}</div>
				<div>時間: 1分鐘</div>
			</div>
			<div>
				<div>折扣: 0元</div>
				<div>共計: 20元</div>
			</div>
		</div>
		<div
			class="px-[20vw] py-[2vh] rounded-full bg-light-red text-base-red text-5xl cursor-pointer"
			@click="$emit('confirmButtonClicked')"
		>
			確認
		</div>
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
	}
})
</script>
