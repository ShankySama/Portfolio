export const Skeleton = ({ type, size }) => {
  if (type === "circle") {
    return <div className={`${size} skeleton_circle`}></div>;
  } else if (type === "square") {
    return <div className={`${size} skeleton_square`}></div>;
  } else {
    return <div className={`${size} skeleton_square`}></div>;
  }
};
