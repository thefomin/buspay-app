import "react-router-dom"

export const ROUTES = {
	HOME: "/",
	CARRIER: "/carrier/:carrierId",
} as const

export type PathParams = {
	[ROUTES.CARRIER]: {
		carrierId: string
	}
}

declare module "react-router-dom" {
	interface Register {
		params: PathParams
	}
}
