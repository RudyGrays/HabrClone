type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string{
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
		// eslint-disable-next-line
		.filter(([_, value]) => Boolean(value))
		.map(([key]) => key)
	].join(' ')
}