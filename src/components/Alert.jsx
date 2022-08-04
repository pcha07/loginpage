// Alert component will take passed in value from form submission and display output based on user input

const Alert = ({ result }) => {
  return (
    <p
      className={`${
        result.type === "allError" || result.type === "emailError"
          ? "text-red-500 font-semibold"
          : "text-green-500 font-semibold"
      }`}
    >
      {result.outcome}
    </p>
  );
};

export default Alert;
