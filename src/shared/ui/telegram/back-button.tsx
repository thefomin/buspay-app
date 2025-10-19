import { useEffect } from "react"
import { Button } from "../kit/"
import { useTelegram } from "../../providers/telegram-provider"
import { ChevronLeft } from "lucide-react"

interface BackButtonProps {
	text: string
	onClick?: () => void
}

const BackButton = ({ onClick, text }: BackButtonProps) => {
	const { telegramState } = useTelegram()

	useEffect(() => {
		if (!telegramState.app) return

		const btn = telegramState?.app?.BackButton
		if (onClick) btn.onClick(onClick)
		btn.show()

		return () => {
			btn.hide()
			if (onClick) btn.offClick(onClick)
		}
		// код выполнится при изменении зависимостей потому что мы их указали в массиве
	}, [telegramState, onClick])

	if (!telegramState.isApp) {
		return (
			<div className="bg-[#2a2a2a] w-full py-2">
				<Button
					onClick={onClick}
					className="rounded-lg text-[16px] font-light flex flex-row gap-0 bg-transparent hover:bg-transparent [&_svg:not([class*='size-'])]:size-7"
				>
					<ChevronLeft className="h-8 w-8" />
					{text}
				</Button>
			</div>
		)
	}
	return null
}

export { BackButton }
