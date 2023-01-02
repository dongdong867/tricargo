<template>
	<Transition name="page" mode="out-in">
		<div class="max-w-lg h-[100vh] mx-auto cursor-default">
			<div class="h-[90vh] max-w-lg overflow-y-scroll bg-scroll">
				<NuxtPage class="" />
			</div>
			<Navigationbar class="max-w-lg h-[10vh]" />
		</div>
	</Transition>
</template>

<script setup></script>
