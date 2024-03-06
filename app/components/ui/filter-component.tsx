"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import ViewCounter from "../../tuts/view-counter";

type BlogPostMetadata = {
  publishedAt: string;
  title: string;
  summary: string;
  learningPath?: string;
  order?: number;
};

type BlogPost = {
  slug: string;
  metadata: BlogPostMetadata;
};

type FilterPillsProps = {
  allBlogs: BlogPost[];
  viewCounts: { slug: string; count: number }[];
};

const learningPaths = ["All", "Midjourney", "Web Dev"];

export default function FilterPills({
  allBlogs,
  viewCounts,
}: FilterPillsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(allBlogs);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredBlogs(
        allBlogs.sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
        )
      );
    } else {
      setFilteredBlogs(
        allBlogs
          .filter((post) => post.metadata.learningPath === activeFilter)
          .sort((a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0))
      );
    }
  }, [activeFilter, allBlogs]);

  return (
    <div>
      <div className="filter-badges flex flex-wrap mb-2">
        {learningPaths.map((path) => (
          <Badge
            key={path}
            className={`mr-1 mb-2`}
            variant={activeFilter === path ? "active" : "default"}
            onClick={() => setActiveFilter(path)}
          >
            {path}
          </Badge>
        ))}
      </div>
      {/* Render the filtered blog posts */}
      {filteredBlogs.map((post) => (
        <article key={post.slug} className="mb-4 flex flex-col sm:flex-row items-start">
          {post.metadata.learningPath === activeFilter &&
            activeFilter !== "All" &&
            post.metadata.order !== undefined && (
              <span className="mr-6 mt-4 font-semibold text-4xl italic">{post.metadata.order}</span>
            )}
          <div className="flex-1">
            <Link href={`/tuts/${post.slug}`}>
              <h3 className="text-xl font-bold">{post.metadata.title}</h3>
              <p className="text-retro-darkslate dark:text-secondary-foreground">
                {post.metadata.summary}
              </p>
            </Link>
            <Suspense fallback={<p className="h-6" />}>
              <ViewCounter slug={post.slug} allViews={viewCounts} />
            </Suspense>
          </div>
        </article>
      ))}
    </div>
  );
}
