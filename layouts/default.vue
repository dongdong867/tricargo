<template>
	<div class="max-w-lg h-full mx-auto flex flex-col">
		<div class="grow">
			<NuxtPage />
		</div>
		<Navigationbar />
	</div>
</template>

<script setup>
import { useParkinglotsStore } from '~~/stores/parkinglots'

const parkinglots = useParkinglotsStore()

onBeforeMount(() => parkinglots.fetchParkinglotInfo())
</script>
