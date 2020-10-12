export interface MessagesInputProps {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleActiveInput: (event: React.FocusEvent<any>) => void,
    onSendMessage: () => void
}