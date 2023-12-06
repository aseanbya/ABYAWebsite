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
            className={`w-fit rounded-xl border px-4 py-2 font-bold uppercase transition ${className ?? ""}`}
            type={type ?? "button"}
            {...rest}
        >
            <Link href={href ?? ""}>{children}</Link>
        </button>
    );
};

export default Button;