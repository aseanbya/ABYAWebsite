import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import Image from "next/image"
import PageLayout from '~/components/common/PageLayout';
import ContentContainer from '~/components/common/ContentContainer';
import Heading2 from '~/components/common/textStyles/Heading2';
import Markdown from 'react-markdown';
// import { Interweave } from 'interweave';

export default function BlogPost() {
    const router = useRouter();
    const { title } = router.query;
    const { data } = api.blog.readByTitle.useQuery({ title: title as string, });
    return (
        <PageLayout>
            <ContentContainer>
                <div className='flex flex-col sm:flex-row pb-12'>
                    <Heading2 className='sm:w-[50%] flex items-center'>{data?.title}</Heading2>
                    <Image className='sm:w-[50%]' src={data?.image ?? ""} width={1600} height={1600} alt={data?.title ?? ""} />
                </div>
                {/* <p>{data?.content}</p> */}
                <Markdown>{data?.content}</Markdown>
            </ContentContainer>
        </PageLayout >
    )
}