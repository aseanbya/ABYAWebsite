import Link from "next/link";

export default function Button({ children, href, type, className, ...rest }: ButtonProps) {
    return (
        <button
            className={`w-fit h-fit border-2 py-1 px-2 rounded-xl bg-transparent border-brandBlue transition hover:bg-brandBlue-20 ${className ?? ""}`}
            type={type ?? "button"}
            {...rest}
        >
            <Link href={href ?? ""} className="text-sm sm:text-md uppercase text-brandBlue font-bold">{children}</Link>
        </button>
    );
};

type ButtonProps = {
    href?: string;
    type: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLButtonElement>;
