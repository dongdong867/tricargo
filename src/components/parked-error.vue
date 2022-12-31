<template>
	<div
		class="max-w-lg bg-base-grey bg-opacity-80 h-[30vh] rounded-[30px] text-white font-bold flex flex-col place-content-center place-items-center"
	>
		<div class="text-4xl leading-normal">您已經停車成功</div>
		<div class="text">若要停放下一個車位，請先將車輛移出</div>
		<div
			class="w-[45vw] bg-light-red text-base-red text-3xl mt-[3vh] py-[1.5vh] text-center rounded-[30px] cursor-pointer"
			@click="$emit('closeParkedError')"
		>
			我知道了
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
