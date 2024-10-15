
const ErrorMessage = ({ error }) => {
  return (
    <p style={{wordBreak:'break-word'}} className="mt-4 text-red-500 text-xl">
      {error}
    </p>
  );
};

export default ErrorMessage;