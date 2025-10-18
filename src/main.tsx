import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./app"
import { TelegramProvider } from "./shared/provider/telegram-provider"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TelegramProvider>
			<App />
		</TelegramProvider>
	</StrictMode>
)
