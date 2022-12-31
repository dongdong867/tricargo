<template>
	<div
		class="w-[90vw] h-[10vh] bg-base-orange m-auto rounded-full mt-[2vh] text-white flex place-content-around text-4xl"
	>
		<div class="w-[35vw] flex m-auto place-content-start pl-[5vw]">{{ time }}</div>
		<div
			class="max-w-[50%] w-[40%] h-[8vh] mr-[3vw] flex m-auto px-[8vw] place-content-center place-items-center bg-light-orange text-base-orange rounded-full cursor-pointer"
			@click="$emit('cancleButtonClicked')"
		>
			Cancle
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	time: {
		type: String,
		requires: true
	}
})
</script>

<style lang="scss" scoped></style>
