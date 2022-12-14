<template>
	<div class="sticky bottom-0 shrink-0">
		<div class="sticky top-0 left-0 right-0 flex place-content-around text-xs m-2">
			<nuxt-link to="record" class="flex flex-col place-items-center">
				<img :src="History" />
				<div>History</div>
			</nuxt-link>
			<nuxt-link to="account" class="flex flex-col place-items-center">
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
