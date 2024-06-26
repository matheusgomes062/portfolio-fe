import useSWR from 'swr';

import fetcher from '../../lib/fetcher';
import { Views } from '../../lib/types';
import MetricCard from '@/components/metrics/Card';

export default function AnalyticsCard() {
  const { data } = useSWR<Views>('/api/views', fetcher);

  const pageViews = new Number(data?.total); //when api is working
  // const pageViews = 31415
  const link = 'https://mgomes.dev';

  return (
    <MetricCard
      header="All-Time Views"
      link={link}
      metric={pageViews}
    />
  );
}
