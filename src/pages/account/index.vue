<template>
	<div>
		<div class="font-bold mt-[2vh] px-[3vw] text-3xl">Account</div>
		<div class="flex flex-col place-content-center place-items-center mt-[4vh]">
			<img :src="personalImage" class="w-[20vw]" />
			<div class="font-bold text-lg grid place-items-center leading-none mt-[1vh]">
				<div>藍色妖姬你不愛</div>
				<div>非在渣男身上找存在</div>
			</div>
		</div>
		<div class="flex flex-col mt-[2vh]">
			<img :src="spareBalance" class="w-[94vw] m-auto" />

			<div
				class="flex flex-col place-items-center space-y-[2vh] mt-[5vh] justify-center text-white text-3xl"
			>
				<nuxt-link to="/account/wallet">
					<div class="button-style bg-base-blue">
						<img :src="wallet" class="h-[8vh]" />
						<div>Wallet</div>
					</div>
				</nuxt-link>

				<div class="button-style bg-base-orange">
					<img :src="setting" class="h-[8vh]" />
					<div>Settings</div>
				</div>
				<div class="button-style bg-base-red">
					<img :src="help" class="h-[8vh]" />
					<div>Help</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import personalImage from '~/assets/icons/account/personal-image.svg?url'
import spareBalance from '~/assets/icons/account/spare-balance.svg?url'
import wallet from '~/assets/icons/account/wallet.svg?url'
import setting from '~/assets/icons/account/setting.svg?url'
import help from '~/assets/icons/account/help.svg?url'
</script>
<style scoped>
.button-style {
	@apply w-[94vw] h-[12vh] flex place-content-between place-items-center px-[10vw] rounded-[20px];
}
</style>
