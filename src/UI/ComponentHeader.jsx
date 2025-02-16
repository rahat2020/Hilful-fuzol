const ComponentHeader = ({
  title,
  desc,
  customStyles = "",
  titleClasses = "",
  descClasses = "",
}) => {
  return (
    <div className={`text-center ${customStyles}`}>
      <p className={`font-semibold text-brand  ${titleClasses || "text-28"}`}>
        {title}
      </p>
      <p className={`font-medium ${descClasses || "text-20"}`}>{desc}</p>
    </div>
  );
};

export default ComponentHeader;
