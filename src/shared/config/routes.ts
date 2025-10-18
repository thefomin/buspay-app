import "react-router-dom"

export const ROUTES = {
	HOME: "/",
	PAYMENT: "/payment",
} as const

export type PathParams = {
	[ROUTES.PAYMENT]: {
		paymentId: string
	}
}

declare module "react-router-dom" {
	interface Register {
		params: PathParams
	}
}
