export const Button = ({ onClick, text, isLoading, isDisabled }) => {
  return (
    <button className={"button-1"} onClick={onClick} disabled={isDisabled}>
      {isLoading ? "Loading..." : text}
    </button>
  );
};
