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
            className={`w-fit border-2 py-1 px-2 rounded-xl bg-transparent transition hover:bg-neutral-600 ${className ?? ""}`}
            type={type ?? "button"}
            {...rest}
        >
            <Link href={href ?? ""} className="text-sm sm:text-md uppercase font-bold text-white">{children}</Link>
        </button>
    );
};

export default Button;