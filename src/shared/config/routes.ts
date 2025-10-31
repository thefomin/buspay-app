import "react-router-dom"

export const ROUTES = {
	HOME: "/",
	CARRIER: "/carrier/:carrierId",
	RECEIPT: "/receipt/:receiptId",
} as const

export type PathParams = {
	[ROUTES.CARRIER]: {
		carrierId: string
	}
	[ROUTES.RECEIPT]: {
		receiptId: string
	}
}

declare module "react-router-dom" {
	interface Register {
		params: PathParams
	}
}
