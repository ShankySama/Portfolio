export const GoBackBtn = ({ handleGoBack }) => {
  return (
    <button className="go_back" onClick={() => handleGoBack("all")}>
      <p className="go_back_text">Go back</p>
    </button>
  );
};
