<template>
	<Transition name="page" mode="out-in">
		<div class="max-w-lg h-[100vh] mx-auto">
			<div class="h-[92vh] overflow-y-scroll bg-scroll">
				<NuxtPage />
			</div>
			<Navigationbar class="max-w-lg h-[8vh]" />
		</div>
	</Transition>
</template>

<script setup>
import { useParkinglotsStore } from '../stores/parkinglots'

const parkinglots = useParkinglotsStore()

onBeforeMount(() => {
	parkinglots.fetchParkinglotInfo()
})
</script>
