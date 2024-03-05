'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Suspense } from 'react';
import ViewCounter from '../../tuts/view-counter';
import { getViewsCount } from 'app/db/queries';

// Define the expected structure of each blog post's metadata
type BlogPostMetadata = {
  publishedAt: string;
  title: string;
  summary: string;
  learningPath?: string;
  order?: number;
};

// Define the structure of a blog post
type BlogPost = {
  slug: string;
  metadata: BlogPostMetadata;
};

// Specify the prop types for FilterPills component
type FilterPillsProps = {
  allBlogs: BlogPost[];
};

const learningPaths = ['All', 'Midjourney', 'Web Dev'];

export default function FilterPills({ allBlogs }: FilterPillsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(allBlogs);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredBlogs(allBlogs.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()));
    } else {
      setFilteredBlogs(allBlogs
        .filter(post => post.metadata.learningPath === activeFilter)
        .sort((a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0))
      );
    }
  }, [activeFilter, allBlogs]);


  return (
    <div>
      <div className="filter-badges">
        {learningPaths.map((path) => (
          <Badge
            key={path}
            variant={activeFilter === path ? 'active' : 'default'}
            onClick={() => setActiveFilter(path)}
          >
            {path}
          </Badge>
        ))}
      </div>
      {/* Render the filtered blog posts */}
      {filteredBlogs.map((post) => (
        <article key={post.slug} className="mb-4">
          <Link href={`/tuts/${post.slug}`}>            
              <h2 className="text-xl font-bold">{post.metadata.title}</h2>
              <p className="text-gray-600">{post.metadata.summary}</p>
                       
          </Link>
          <Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense>
        </article>
      ))}
    </div>
  );
}


async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
