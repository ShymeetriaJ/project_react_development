interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({message}: ErrorMessageProps) => {
    return (
        <div className="error-container">
            <p className="error-message">{message}</p>
        </div>
    );
};