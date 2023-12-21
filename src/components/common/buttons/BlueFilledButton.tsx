import Link from "next/link";

type ButtonProps = {
    href?: string;
    type: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    type,
    className,
    ...rest
}) => {
    return (
        <button
            className={`w-fit rounded-xl px-4 py-2 transitio bg-brandBlue hover:bg-brandBlue-50 ${className ?? ""}`}
            type={type ?? "button"}
            {...rest}
        >
            <Link href={href ?? ""} className="text-sm sm:text-md uppercase font-bold text-white">{children}</Link>
        </button>
    );
};

export default Button;