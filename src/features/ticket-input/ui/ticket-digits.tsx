import { cn } from "@/shared/lib/css"

export const TicketDigits = ({ digits }: { digits: string }) => {
	return (
		<>
			{[...Array(6)].map((_, index) => (
				<div
					key={index}
					className={cn(
						"shadow-xs flex w-full h-[64px] flex-row items-center justify-center rounded-lg border border-stroke p-2 text-center text-2xl font-medium text-white outline-none",
						digits[index] ? "border-white" : "border-muted-foreground"
					)}
				>
					{digits[index] || ""}
					{/* Достаем из массива digits по индексу index - 1, если там нет значения, показываем пустую строку */}
				</div>
			))}
		</>
	)
}
