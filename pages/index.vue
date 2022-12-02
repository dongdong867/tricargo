<template>
	<div></div>
	<div class="absolute w-full h-1/2" :class="park ? ['top-1/2'] : ['top-full']">
		<Parking />
	</div>
	<div class="absolute w-full h-1/2" :class="calculate ? ['top-1/2'] : ['top-full']">
		<Calculate />
	</div>
</template>
<script setup>
const park = ref(false)
const calculate = ref(false)
</script>
