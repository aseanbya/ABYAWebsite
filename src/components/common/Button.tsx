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
            className={`rounded-xl border border-brandBlue px-4 py-2 font-bold uppercase text-brandBlue transition hover:bg-brandBlue hover:text-white ${
                className ?? ""
            }`}
            type={type ?? "button"}
            {...rest}
        >
            <Link href={href ?? ""}>{children}</Link>
        </button>
    );
};

export default Button;
