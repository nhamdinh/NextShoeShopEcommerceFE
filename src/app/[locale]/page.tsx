import {useTranslations} from 'next-intl';
import PageLayout from 'components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function HomePage({params: {locale}}: Props) {
  // Enable static rendering

  const t = useTranslations('HomePage');

  return (
    <>HOME</>
    // <PageLayout title={t('title')}>
    //   <p className="max-w-[590px]">
    //     {t.rich('description', {
    //       code: (chunks) => (
    //         <code className="font-mono text-white">{chunks}</code>
    //       )
    //     })}
    //   </p>
    // </PageLayout>
  );
}
