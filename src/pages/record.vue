<template>
	<div class="p-[3vw] font-bold">
		<div class="font-bold mt-[2vh] text-3xl border-b-2 border-b-black">History</div>
		<div>
			<div
				class="flex place-content-between place-items-center px-[3vw] bg-history-base-gray mt-[1vh] rounded-[10px]"
				v-for="history in historys"
			>
				<div class="w-[65vw]">
					<div class="text-xl leading-normal">{{ history.parkinglot }}</div>
					<div class="text-sm text-history-dark-gray">
						{{ history.parkingStartTime }}
					</div>
					<div class="text-sm text-history-dark-gray">
						{{ history.parkingEndingTime }}
					</div>
				</div>

				<div class="text-base-blue text-[40px]">{{ history.totalPrice }}</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const historys = [
	{
		parkinglot: '木柵路3段220號',
		parkingDate: '2022/12/20',
		parkingStartTime: '2022/12/20 00:00 - ',
		parkingEndingTime: '2022/12/20 18:25',
		totalPrice: '$40'
	},
	{
		parkinglot: '保儀路平面停車場',
		parkingDate: '2022/12/18',
		parkingStartTime: '2022/12/18 09:00 - ',
		parkingEndingTime: '2023/12/19 14:25',
		totalPrice: '$323'
	},
	{
		parkinglot: '第二殯儀館停車場',
		parkingDate: '2022/12/16',
		parkingStartTime: '2022/12/16 14:00 - ',
		parkingEndingTime: '2023/12/16 16:25',
		totalPrice: '$50'
	},
	{
		parkinglot: '文山區行政中心便民停車場',
		parkingDate: '2022/12/13',
		parkingStartTime: '2022/12/13 14:50 - ',
		parkingEndingTime: '2023/12/13 15:20',
		totalPrice: '$30'
	},
	{
		parkinglot: '松山區健康路',
		parkingDate: '2022/12/10',
		parkingStartTime: '2022/12/10 11:34 - ',
		parkingEndingTime: '2023/12/10 13:30',
		totalPrice: '$20'
	}
]
</script>
