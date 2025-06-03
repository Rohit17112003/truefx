const Button = ({ label, style }) => {
  return (
    <button className={`${style} mx-auto rounded-full bg-[#3D48B7] py-3 text-white font-medium text-lg`}>
      {label}
    </button>
  );
};

export default Button;
