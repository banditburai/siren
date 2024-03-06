import { Suspense } from 'react';
import { getBlogPosts } from '../db/blog';
import FilterPills from '@/components/ui/filter-component';
import { getViewsCount } from '@/db/queries';

export const metadata = {
  title: 'Tuts',
  description: 'Mocked up stuffs.',
};

export default async function BlogPage() {
  const allBlogs = await getBlogPosts();
  const viewCounts = await getViewsCount();
  
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Read my test posts
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
      <FilterPills allBlogs={allBlogs} viewCounts={viewCounts} />
      </Suspense>
    </section>
  );
}