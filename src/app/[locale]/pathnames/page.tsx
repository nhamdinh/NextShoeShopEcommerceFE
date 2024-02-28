import {useTranslations} from 'next-intl';
import PageLayout from 'components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function PathnamesPage({params: {locale}}: Props) {
  // Enable static rendering

  const t = useTranslations('PathnamesPage');
  const t1 = useTranslations('HomePage');

  return (
    <PageLayout title={t1('title')}>
      <div className="max-w-[490px]">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </div>
    </PageLayout>
  );
}
