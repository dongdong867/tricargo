<template>
	<Transition name="page" mode="out-in">
		<div class="max-w-lg h-[100vh] mx-auto">
			<div class="grow h-[92vh]">
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
