<template>
	<div class="max-w-lg h-[100vh] mx-auto">
		<div class="grow h-[92vh]">
			<NuxtPage />
		</div>
		<Navigationbar class="h-[8vh]" />
	</div>
</template>

<script setup>
import { useParkinglotsStore } from '~~/src/stores/parkinglots'

const parkinglots = useParkinglotsStore()

onBeforeMount(() => {
	parkinglots.fetchParkinglotInfo()
})
</script>
