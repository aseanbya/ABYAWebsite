import dynamic from "next/dynamic";
import PageLayout from "~/components/common/PageLayout";

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
      getinvolved
      <Sample />
    </PageLayout>
  );
}
