import { TelegramProvider } from "@/shared/providers/telegram-provider"

export function Providers({ children }: { children: React.ReactNode }) {
	return <TelegramProvider>{children}</TelegramProvider>
}
