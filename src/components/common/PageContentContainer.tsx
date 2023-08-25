import { ReactNode } from "react"
import singaporeAttractionsGrey from "src/assets/singaporeAttractionsGrey.png"

type PageContentContainerProps = {
    children: ReactNode,
}

export default function PageContentContainer({ children }: PageContentContainerProps) {
    return (
        <div className="p-9 items-center w-full">
            {children}
        </div>
    )
}