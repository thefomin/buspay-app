import { cn } from "@/shared/lib/css"
import { useTelegram } from "@/shared/providers/telegram-provider"
import { Button } from "@/shared/ui/kit"
import { Delete, ScanQrCode } from "lucide-react"
import { useState } from "react"

interface TicketCheckoutLayoutProps {
	digits: React.ReactNode
	actions: React.ReactNode
}

const TicketCheckoutLayout = ({
	digits,
	actions,
}: TicketCheckoutLayoutProps) => {
	return (
		<section className="bg-white py-2 dark:bg-dark h-screen">
			<div className="container p-2 mx-auto h-full flex flex-col justify-between">
				<div className="flex flex-row justify-between items-center gap-2 p-2 mt-20">
					{digits}
				</div>

				<div className="flex flex-row justify-center gap-4 [&_svg:not([class*='size-'])]:size-7 items-center">
					<ScanQrCode />
					<h2 className="text-2xl">Введите код с наклейки</h2>
				</div>

				<div className="grid grid-cols-3 gap-2 w-full items-center bg-muted-foreground/40 p-2 rounded-lg">
					{actions}
				</div>
			</div>
		</section>
	)
}

const TicketCheckoutPage = () => {
	const { telegramState } = useTelegram()
	const [digits, setDigits] = useState<string>("")

	const handleDigitClick = (digit: number) => {
		if (digits.length < 6) {
			telegramState.app?.HapticFeedback.impactOccurred("heavy")
			setDigits((prev) => prev + digit)
		}
	}

	const handleBackspace = () => {
		telegramState.app?.HapticFeedback.impactOccurred("heavy")
		setDigits((prev) => prev.slice(0, -1))
	}

	return (
		<TicketCheckoutLayout
			digits={
				<>
					{[...Array(6)].map((_, index) => (
						<div
							key={index}
							className={cn(
								"shadow-xs flex w-full h-[64px] flex-row items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5",
								digits[index] ? "border-blue-300" : "border"
							)}
						>
							{digits[index] || ""}
							{/* Достаем из массива digits по индексу index - 1, если там нет значения, показываем пустую строку */}
						</div>
					))}
				</>
			}
			actions={
				<>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
						<Button
							key={num}
							onClick={() => handleDigitClick(num)}
							disabled={digits.length >= 6}
							className="h-16 text-2xl font-semibold rounded-mg border-none"
							variant="outline"
						>
							{num}
						</Button>
					))}
					<Button
						disabled={digits.length >= 6}
						className="h-16 text-2xl font-semibold flex flex-col [&_svg:not([class*='size-'])]:size-7"
						variant="outline"
					>
						<ScanQrCode />
					</Button>
					<Button
						onClick={() => handleDigitClick(0)}
						disabled={digits.length >= 6}
						className="h-16 text-2xl font-semibold"
						variant="outline"
					>
						0
					</Button>
					<Button
						onClick={handleBackspace}
						disabled={digits.length <= 0}
						className="h-16 text-2xl font-semibold [&_svg:not([class*='size-'])]:size-7"
						variant="outline"
					>
						<Delete />
					</Button>
				</>
			}
		/>
	)
}

export const Component = TicketCheckoutPage
