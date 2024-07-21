export interface IDeviceAdd {
	name: string
	serialNo: string
}

export interface IDeviceEdit extends IDeviceAdd {
	id: number
}

export interface IDevice {
	id: number
	name: string
	serialNo: string
	ipAddress: string
	httpPort: any
	httpsPort: any
	macAddress: string
	hostName: string
	hwPlatform: string
	lastUpdate: string
	lastSuccessfulMessage: string
	status: string
	monitorings: any[]
}

export interface ICounter {
	enters: number
	exits: number
	date: string
}
