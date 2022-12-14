import axios from 'axios'

async function getParkingLotInfo() {
	return new Promise((resolve, reject) => {
		const ParkingLotInfoScript =
			'https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.json'
		axios
			.get(ParkingLotInfoScript)
			.then((response) => {
				let result = response.data

				result = result.data.park

				console.log(response.data)
				resolve({ success: true, data: result })
			})
			.catch((error) => {
				console.log(error)
				reject({ success: false, data: error })
			})
	})
}

export default defineEventHandler(async () => {
	return await getParkingLotInfo()
})
