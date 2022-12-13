interface ParkinglotRawData {
	id: string
	area: string
	name: string
	type: '1' | '2' | string
	address: string
	tw97x: string
	tw97y: string
	tel: string
	serviceTime: string
	FareInfo: {
		WorkingDay: [
			{
				Period: string
				Fare: string
			}
		]
		Holiday: [
			{
				Period: string
				Fare: string
			}
		]
	}
}

export class Parkinglot {
	protected data: ParkinglotRawData = {
		id: '',
		area: '',
		name: '',
		type: '2',
		address: '',
		tw97x: '',
		tw97y: '',
		tel: '',
		serviceTime: '',
		FareInfo: {
			WorkingDay: [{ Period: '', Fare: '' }],
			Holiday: [{ Period: '', Fare: '' }]
		}
	}

	public constructor(dataRawData?: ParkinglotRawData) {
		if (dataRawData) {
			;(this.data.id = dataRawData.id),
				(this.data.area = dataRawData.area),
				(this.data.name = dataRawData.name),
				(this.data.type = dataRawData.type),
				(this.data.address = dataRawData.address),
				(this.data.tw97x = dataRawData.tw97x),
				(this.data.tw97y = dataRawData.tw97y),
				(this.data.tel = dataRawData.tel),
				(this.data.serviceTime = dataRawData.serviceTime),
				(this.data.FareInfo = dataRawData.FareInfo)
		}
	}

	public toString() {
		return this.data
	}

	public getId() {
		return this.data.id
	}

	public getArea() {
		return this.data.area
	}

	public getName() {
		return this.data.name
	}

	public getType() {
		return this.data.type
	}

	public getAddress() {
		return this.data.address
	}

	public getTw97x() {
		return this.data.tw97x
	}

	public getTw97y() {
		return this.data.tw97y
	}

	public getTel() {
		return this.data.tel
	}

	public getServiceTime() {
		return this.data.serviceTime
	}

	public getFareInfo() {
		return this.data.FareInfo
	}
}
