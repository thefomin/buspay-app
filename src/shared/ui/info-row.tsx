interface InfoRowProps {
	icon: React.ReactNode
	label: string
	value: string
}

export const InfoRow = ({ icon, label, value }: InfoRowProps) => {
	return (
		<div className="flex gap-4 items-center py-4 border-b border-muted-foreground/30">
			<div className="w-8 h-8 mt-1  flex items-center justify-center">
				{icon}
			</div>
			<div className="flex flex-col">
				<h3 className="text-md text-muted/60 font-light mb-1">{label}</h3>
				<p className="text-md font-medium">{value}</p>
			</div>
		</div>
	)
}
