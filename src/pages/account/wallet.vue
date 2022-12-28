<template>
	<div class=" bg-light-grey mx-auto h-2/3 ">
		<div class="flex justify-center text-[30px] pt-6 font-extrabold font-sans">My wallet</div>
		<div class="flex justify-center mt-5 mb-5"><img :src="personalCard"></div>

		<div class=" flex-col space-y-3 justify-center grid pt-12 bg-white px-100 rounded-t-[100px] ">	
			<img :src="Card" />
			<img :src="applePay" />
			<img :src="paypal" />
		</div>
	</div>
	

				
	

	
</template>

<script setup>
import personalCard from '~/assets/icons/wallet/personalCard.svg?url'
import Card from '~/assets/icons/wallet/Card.svg?url'
import applePay from '~/assets/icons/wallet/applePay.svg?url'
import paypal from '~/assets/icons/wallet/paypal.svg?url'
</script>

<style lang="scss" scoped></style>
