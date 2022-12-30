<template>
	<div class="container min-w-full">
		<div class="mt-10">
			<div class="flex justify-center">
				<img :src="personalImage" />
			</div>
			<div class="flex flex-col space-y-10">
				<div class="animate-fade-in-down mb-1 text-center text-lg text-sky-600 font-semibold">
					藍色妖姬你不愛 非在渣男身上找存在
				</div>

				<div class="flex flex-col space-y-20">
					<div class="mb-4 flex justify-center">
						<img :src="spareBalance" />
					</div>
				</div>
				<div class="flex-col space-y-3 justify-center grid gap-2 content-end">
					<div class="flex justify-center">
						<nuxt-link to="/account/wallet">
							<img :src="wallet" />
						</nuxt-link>
					</div>
				</div>

				<img :src="setting" />

				<img :src="help" />
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
