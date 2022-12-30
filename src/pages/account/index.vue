<template>
	<div class="container min-w-full">
		<div class="relative top-20 ">
			<div class="flex justify-center">
				<img :src="personalImage" />
			</div>
		</div>
				<div class="flex-col space-y-40 ">
				<div class="relative top-24 animate-fade-in-down mb-1 text-center text-lg text-sky-600 font-semibold">
					藍色妖姬你不愛 非在渣男身上找存在
				</div>
			

				<div class="flex-col space-y-16 ">
					<div class="flex justify-center">
						<img :src="spareBalance" />
					</div>
				
				
				<div class="flex-col space-y-4 justify-center relative bottom-2">
					<div class="flex justify-center">
						<nuxt-link to="/account/wallet">
							<img :src="wallet" />
						</nuxt-link>
					</div>
				
					<div class="flex justify-center "> <img :src="setting" /> </div>
						
					<div class="flex justify-center"> <img :src="help" /> </div>
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
