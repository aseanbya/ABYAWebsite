import dynamic from "next/dynamic";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";

/**
 * Lazy load the pdf component to avoid SSR issues:
 * See example from library: https://github.com/wojtekmaj/react-pdf/blob/main/sample/next-pages/pages/index.tsx
 */

const Sample = dynamic(() => import("~/components/pdf-sample"), {
    ssr: false,
});

export default function OurImpact() {
    return (
        <PageLayout>
            <PageTitleSection title="Our Impact">
                <h2>Minim proident ex ipsum do mollit adipisicing voluptate Lorem ullamco. Aute laboris sit dolor dolor dolore deserunt. Consectetur elit aliqua laborum in aliqua sunt commodo est voluptate qui laborum enim. Do enim sunt consectetur anim. Anim labore nulla id velit incididunt. Est consequat commodo laborum aliquip anim in culpa Lorem dolor. Eu eiusmod incididunt fugiat minim sunt excepteur eiusmod mollit sint labore ullamco pariatur. Exercitation amet voluptate deserunt anim exercitation duis laborum deserunt et laboris mollit cupidatat mollit cillum.</h2>
            </PageTitleSection>
            <Sample />
        </PageLayout>
    );
}
