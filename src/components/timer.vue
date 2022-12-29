<template>
	<div
		class="w-[90vw] h-[10vh] bg-base-orange m-auto rounded-[50px] mt-[2vh] text-white flex place-content-around text-4xl"
	>
		<div class="w-[35vw] flex m-auto place-content-start pl-[5vw]">{{ time }}</div>
		<div
			class="w-[40vw] h-[8vh] flex m-auto place-content-center place-items-center bg-light-orange text-base-orange rounded-[30px] cursor-pointer"
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
