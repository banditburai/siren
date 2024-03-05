
import { readFileSync } from 'fs';
import { join } from 'path';
import { CustomMDX } from '@/components/mdx';
import { parseFrontmatter } from '@/db/blog';

export default function RecommendationsPage() {
  const filePath = join(process.cwd(), 'content', 'recommendations.mdx');
  const fileContents = readFileSync(filePath, 'utf8');
  const { metadata, content: mdxContent } = parseFrontmatter(fileContents);

  return (
    <div className="prose">
      <h1>{metadata.title}</h1>
      <p>{metadata.publishedAt}</p>
      <p>{metadata.summary}</p>

      <CustomMDX source={mdxContent} />
    </div>
  );
}
