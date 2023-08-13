import Link from "next/link";

type ButtonProps = {
    href?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, href }) => {
    return (
        <Link href={href ?? ""}>
            <button className="btn-primary btn-outline btn-md btn font-bold">
                {children}
            </button>
        </Link>
    );
};

export default Button;
