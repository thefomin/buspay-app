import { useEffect } from "react"
import { Button } from "../button"
import { useTelegram } from "../../provider/telegram-provider"

type MainButtonProps = {
	text?: string
	color?: string
	textColor?: string
	onClick?: () => void
}

const MainButton = ({
	text = "Text",
	color,
	textColor,
	onClick,
}: MainButtonProps) => {
	const { telegramState } = useTelegram()

	useEffect(() => {
		if (!telegramState.app) return

		const btn = telegramState?.app?.MainButton
		btn.setText(text)
		if (color) btn.setColor(color)
		if (textColor) btn.setTextColor(textColor)
		if (onClick) btn.onClick(onClick)
		btn.show()

		return () => {
			btn.hide()
			if (onClick) btn.offClick(onClick)
		}
		// код выполнится при изменении зависимостей потому что мы их указали в массиве
	}, [telegramState, text, color, textColor, onClick])

	if (!telegramState.isApp) {
		return (
			<div className="absolute bottom-0 w-full px-3 py-2 bg-muted-foreground/20">
				<Button
					onClick={onClick}
					className="w-full rounded-lg h-[50px] text-[16px] font-semibold bg-red-600 hover:bg-red-700"
				>
					{text}
				</Button>
			</div>
		)
	}
	return null
}

export { MainButton }
