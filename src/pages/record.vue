<template>
	<div class="w-full h-full">
		<div class="font-bold pt-5 pb-2 mr-2 ml-2 text-3xl border-b-2 border-b-black font-sans">
			History
		</div>
		<div>
			<div
				class="flex justify-between bg-history-base-gray my-2 mx-3 rounded"
				v-for="history in historys"
			>
				<div>
					<div class="text-xl font-bold ml-2 pt-2">{{ history.parkinglot }}</div>
					<div class="text-sm ml-2 pb-2 text-history-dark-gray">{{ history.parkingTime }}</div>
				</div>

				<div class="text-base-blue mr-2 text-[40px] font-bold">{{ history.totalPrice }}</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const historys = [

	{
		parkinglot: 'City Parking城市車旅停車場(光輝路92號)',
		parkingDate: '2022/12/20',
		parkingTime: '2022/12/20 17:00 - 2023/12/20 18:30',
		totalPrice: '$90'
	},
	{
		parkinglot: '文山區下崙路9-3號',
		parkingDate: '2022/12/18',
		parkingTime: '2022/12/18 18:50 - 2023/12/14 22:10',
		totalPrice: '$30'
	},
	{
		parkinglot: '保儀路平面停車場(保儀路157號對面)',
		parkingDate: '2022/12/17s',
		parkingTime: '2022/12/17 09:00 - 2023/01/02 14:25',
		totalPrice: '$120'
	},
	{
		parkinglot: '文山區木柵路3段220號',
		parkingDate: '2022/12/17',
		parkingTime: '2022/12/17 00:00 - 2022/12/17 18:25',
		totalPrice: '$100'
	},
	{
		parkinglot: '文山區行政中心便民停車場',
		parkingDate: '2022/12/14',
		parkingTime: '2022/12/14 14:50 - 2023/12/14 15:30',
		totalPrice: '$30'
	},
	{
		parkinglot: '松山區健康路',
		parkingDate: '2022/12/10',
		parkingTime: '2022/12/10 11:34 - 2023/12/10 13:30',
		totalPrice: '$40'
	},
	
]
</script>
