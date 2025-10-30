import useSWR from 'swr';

import fetcher from '../../lib/fetcher';
import { MostViewedDevTo } from '../../lib/types';
import MetricCard from '@/components/metrics/Card';

export default function DevToCard() {
  const { data } = useSWR<MostViewedDevTo>('/api/devto', fetcher);

  const totalViews = data?.articles?.reduce((sum, article) => sum + article.views, 0) ?? 0;
  const link = 'https://dev.to/matheusgomes062';

  return (
    <MetricCard
      header="Dev.to Views"
      link={link}
      metric={totalViews}
    />
  );
}
