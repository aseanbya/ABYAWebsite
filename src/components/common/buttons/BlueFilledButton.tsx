import Link from "next/link";

export default function Button({ children, href, type, className, ...rest }: ButtonProps) {
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

type ButtonProps = {
    href?: string;
    type: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLButtonElement>;