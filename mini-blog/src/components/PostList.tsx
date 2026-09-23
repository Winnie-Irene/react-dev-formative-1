import { useState } from 'react';
import type { Post as PostType } from '../utils/types';
import Post from './Post';

const today = new Date().toISOString();

const samplePosts: PostType[] = [
  {
    id: 1,
    title: 'Why TypeScript is a Game Changer',
    author: 'Irene Winnie',
    content:
      'TypeScript adds static typing to JavaScript, which catches bugs early and makes refactoring a lot less stressful. If you have ever spent hours debugging a typo in a variable name, TypeScript would have flagged that for you instantly. The developer experience boost alone makes it worth the learning curve, especially for larger codebases where things can get messy fast.',
    date: today,
    tags: ['typescript', 'javascript', 'webdev'],
    likes: 12,
    bookmarks: 4,
  },
  {
    id: 2,
    title: 'Getting Started with Vite',
    author: 'Alex Kimani',
    content:
      'Vite is a modern build tool that makes React development noticeably faster. Unlike older bundlers, Vite uses native ES modules in development, so your dev server starts almost instantly even on big projects. Hot Module Replacement is also lightning quick. If you are still using Create React App, switching to Vite is one of the easiest wins you can get.',
    date: '2026-09-18T10:30:00.000Z',
    tags: ['vite', 'react', 'tooling'],
    likes: 8,
    bookmarks: 3,
  },
  {
    id: 3,
    title: 'Styled Components vs Plain CSS',
    author: 'Irene Winnie',
    content:
      'Both approaches have their strengths. Plain CSS keeps things simple and familiar, while styled components let you colocate your styles with your logic and scope them automatically. For smaller projects, plain CSS works great. For anything with lots of dynamic styling or theming, styled components can save you from class name collisions and make your components more self contained.',
    date: '2026-09-15T08:00:00.000Z',
    tags: ['css', 'styled-components', 'react'],
    likes: 15,
    bookmarks: 6,
  },
];

const allTags = Array.from(new Set(samplePosts.flatMap((post) => post.tags)));

function PostList() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredPosts =
    activeFilter === 'all'
      ? samplePosts
      : samplePosts.filter((post) => post.tags.includes(activeFilter));

  return (
    <section>
      <div className="filter-row">
        <div className="filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <a href="#new-post" className="write-btn">
          Write a Post
        </a>
      </div>

      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} highlightAuthor="Irene Winnie" />
      ))}

      {filteredPosts.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '40px 0', fontSize: '0.9rem' }}>
          No posts found for this tag.
        </p>
      )}
    </section>
  );
}

export default PostList;