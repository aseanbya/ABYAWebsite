import Link from "next/link";

type ButtonProps = {
    href?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, href }) => {
    return (
        <Link href={href ?? ""}>
            <button className="rounded-xl border border-brandBlue px-4 py-2 font-bold uppercase text-brandBlue 
            transition hover:bg-brandBlue hover:text-white">
                {children}
            </button>
        </Link>
    );
};

export default Button;
