import { ScanQrCode } from "lucide-react"

interface TicketCheckoutLayoutProps {
	digits: React.ReactNode
	keyboard: React.ReactNode
}

export const TicketCheckoutLayout = ({
	digits,
	keyboard,
}: TicketCheckoutLayoutProps) => {
	return (
		<section className="bg-[#2a2a2a] py-2 dark:bg-dark h-screen">
			<div className="container p-2 mx-auto h-full flex flex-col justify-between">
				<div className="flex flex-row justify-between items-center gap-2 p-2 mt-20">
					{digits}
				</div>

				<div className="flex flex-row text-white justify-center gap-4 [&_svg:not([class*='size-'])]:size-7 items-center">
					<ScanQrCode />
					<h2 className="text-2xl">Введите код с наклейки</h2>
				</div>

				{keyboard}
			</div>
		</section>
	)
}
