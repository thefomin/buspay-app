import { MainButton } from "../../shared/ui/telegram/main-button"

export const Payment = () => {
	return (
		<div>
			useEffect срабатывает только при изменении зависимостей
			<MainButton text="1234" />
		</div>
	)
}
