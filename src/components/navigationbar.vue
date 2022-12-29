<template>
	<div
		class="sticky w-[100vw] h-[10vh] bottom-0 shrink-0 flex flex-col place-content-center bg-white"
	>
		<div class="h-[8vh] top-0 left-0 right-0 flex place-content-around place-items-center text-xs">
			<nuxt-link
				to="/record"
				class="h-[8vh] aspect-square flex flex-col place-content-center place-items-center"
			>
				<img :src="HistoryHovered" v-if="route.name === 'record'" />
				<img :src="History" v-else />
			</nuxt-link>
			<a
				href="/"
				class="h-[8vh] aspect-square flex flex-col place-content-center place-items-center"
			>
				<img
					:src="HomeHovered"
					v-if="route.name != 'record' && route.name != 'account' && route.name != 'account-wallet'"
				/>
				<img :src="Home" v-else />
			</a>
			<nuxt-link
				to="/account"
				class="h-[8vh] aspect-square flex flex-col place-content-center place-items-center"
			>
				<img
					:src="UserHovered"
					v-if="route.name === 'account' || route.name === 'account-wallet'"
				/>
				<img :src="User" v-else />
			</nuxt-link>
		</div>
	</div>
</template>
<script setup>
import History from '~/assets/icons/navigationbar/history.svg?url'
import User from '~/assets/icons/navigationbar/user.svg?url'
import Home from '~/assets/icons/navigationbar/home.svg?url'
import HomeHovered from '~/assets/icons/navigationbar/home-hovered.svg?url'
import UserHovered from '~/assets/icons/navigationbar/user-hovered.svg?url'
import HistoryHovered from '~/assets/icons/navigationbar/history-hovered.svg?url'

const route = useRoute()
</script>
