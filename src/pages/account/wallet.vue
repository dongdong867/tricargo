<template>
	<div class="bg-light-grey overflow-y-hidden">
		<div class="flex justify-center text-3xl pt-4 font-extrabold text-base-grey">My wallet</div>
		<div class="flex justify-center mt-[2vh]">
			<img :src="card" class="w-[85vw]" />
		</div>
		<div class="mt-[3vh]">
			<div class="w-screen h-[20vh] max-w-lg rounded-[100%] bg-white"></div>
			<div
				class="h-max flex flex-col place-items-center space-y-3 justify-center -mt-[10vh] pt-[3vh] bg-white text-white text-3xl"
			>
				<div class="button-style bg-base-blue">
					<img :src="creditCard" class="h-[8vh]" />
					<div>Credit Card</div>
				</div>
				<div class="button-style bg-base-orange">
					<img :src="applePay" class="h-[8vh]" />
					<div>Apple Pay</div>
				</div>
				<div class="button-style bg-base-red">
					<img :src="paypal" />
					<div>PayPal</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import card from '~/assets/icons/wallet/main-card.svg?url'
import creditCard from '~/assets/icons/wallet/credit-card.svg?url'
import applePay from '~/assets/icons/wallet/apple-pay.svg?url'
import paypal from '~/assets/icons/wallet/paypal.svg?url'
</script>

<style scoped>
.button-style {
	@apply max-w-lg w-[95vw] h-[12vh] px-[10vw] flex place-content-between place-items-center space-x-[15vw] rounded-[20px];
}
</style>
