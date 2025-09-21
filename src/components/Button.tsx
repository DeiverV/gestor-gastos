interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "warning" | "danger" | "success" | "normal";
  children: React.ReactNode;
}

export const CustomButton = ({
  variant,
  onClick,
  children,
  ...rest
}: Props) => {
  const variants = {
    warning: "bg-yellow-700",
    danger: "bg-red-700",
    success: "bg-green-700",
    normal: "bg-gray-700",
  };

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`text-white px-4 py-2 rounded-lg ${variants[variant]} h-[36px] cursor-pointer hover:scale-[102%] duration-200`}
    >
      {children}
    </button>
  );
};
