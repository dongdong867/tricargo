interface Space {
	id: string
	availablecar: number
}

async function fetchSpaceData(): Promise<Array<Space>> {
	let SpaceArray: Array<Space> = []
	await $fetch('/api/spaces').then((res: any) => {
		for (const parkinglot in res.data) {
			const data: Space = {
				id: res.data[parkinglot].id,
				availablecar: res.data[parkinglot].availablecar
			}
			SpaceArray.push(data)
		}
	})
	return SpaceArray
}

async function findSpaceData(id: string): Promise<number> {
	return new Promise((resolve) => {
		let space: number = 0
		fetchSpaceData().then((sa) => {
			let spaceArray: Array<Space> = sa
			for (let i = 0; i < spaceArray.length; i++) {
				if (spaceArray[i].id == id) {
					space = spaceArray[i].availablecar
				}
			}
			resolve(space)
		})
	})
}

export async function getSpaceData(id: string) {
	const space = await findSpaceData(id)
	return space
}
