import { createBrowserRouter } from "react-router-dom"
import { Providers } from "./providers"
import App from "./app"
import { ROUTES } from "@/shared/config"

export const router = createBrowserRouter([
	{
		element: (
			<Providers>
				<App />
			</Providers>
		),
		children: [
			{
				path: ROUTES.HOME,
				lazy: () => import("@/features/ticket-checkout/ticket-checkout.page"),
			},
			{
				path: ROUTES.CARRIER,
				lazy: () => import("@/features/bus-carrier/bus-carrier.page"),
			},
		],
	},
])
