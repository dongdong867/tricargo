<template>
	<div class="sticky w-[100vw] h-[8vh] bottom-0 shrink-0">
		<div class="h-[8vh] top-0 left-0 right-0 flex place-content-around place-items-center text-xs">
			<nuxt-link to="record" class="h-[8vh] flex flex-col place-content-center place-items-center">
				<img :src="History" />
				<div>History</div>
			</nuxt-link>
			<nuxt-link to="account" class="h-[8vh] flex flex-col place-content-center place-items-center">
				<img :src="User" />
				<div>User</div>
			</nuxt-link>
		</div>
	</div>
</template>
<script setup>
import History from '~/assets/icons/navigationbar/history.svg?url'
import User from '~/assets/icons/navigationbar/user.svg?url'
</script>
