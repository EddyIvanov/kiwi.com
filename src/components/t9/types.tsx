export interface T9Props {
    inputValue: string,
    digitMapping: Record<string, string[]>,
    onSelect: (word: string) => void
}

export type ScrollDirection = "left" | "right";