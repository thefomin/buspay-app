import { createContext, useContext, useEffect, useState } from "react"

interface TelegramContextType {
	telegramState: {
		app: TelegramWebapp | null
		isApp: boolean
	}
}

const TelegramContext = createContext<TelegramContextType | undefined>(
	undefined
)

export function TelegramProvider({ children }: { children: React.ReactNode }) {
	// состояние для хранения объекта Telegram WebApp и флага isTelegram
	// мы могли бы создать два отдельных состояния, но так удобнее, так как они связаны между собой
	const [telegramState, setTelegramState] = useState({
		app: null as TelegramWebapp | null,
		isApp: false,
	})

	useEffect(() => {
		const telegram = window?.Telegram?.WebApp
		if (
			telegram &&
			telegram.initData !== "" &&
			telegram.platform !== "unknown"
		) {
			telegram.expand()
			// обновляем состояние на основе предыдущего состояния с объектом Telegram WebApp и флагом isTelegram
			setTelegramState((prev) => ({
				...prev,
				app: telegram,
				isApp: true,
			}))
		} else {
			// обновляем состояние на основе предыдущего состояния с объектом Telegram WebApp и флагом isTelegram
			setTelegramState((prev) => ({
				...prev,
				app: null,
				isApp: false,
			}))
		}
		// код выполнится один раз при монтировании провайдера потому что массив зависимостей пуст
	}, [])

	return (
		<TelegramContext.Provider value={{ telegramState }}>
			{children}
		</TelegramContext.Provider>
	)
}

export function useTelegram() {
	const context = useContext(TelegramContext)
	if (!context) {
		throw new Error("useTelegram must be used within a TelegramProvider")
	}
	return context
}
