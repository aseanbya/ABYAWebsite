import { ReactNode } from "react"

type PageContentContainerProps = {
    children: ReactNode,
    className?: string,
}

export default function PageContentContainer({ children, className }: PageContentContainerProps) {
    return (
        <div className={`flex justify-center ${className}`}>
            <div className="p-9 items-center w-full max-w-7xl">
                {children}
            </div>
        </div>
    )
}