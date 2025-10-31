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
				lazy: () => import("@/features/ticket-input/ticket-input.page"),
			},
			{
				path: ROUTES.CARRIER,
				lazy: () => import("@/features/bus-carrier/bus-carrier.page"),
			},
			{
				path: ROUTES.RECEIPT,
				lazy: () => import("@/features/receipt/receipt-ticket.page"),
			},
		],
	},
])
