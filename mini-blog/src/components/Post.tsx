import React from 'react';
import styled from 'styled-components';
import type { Post as PostType } from '../utils/types';
import withLogger from '../hocs/withLogger';

interface PostCardProps {
  $isHighlighted: boolean;
}

const PostCard = styled.div<PostCardProps>`
  background: ${(props) =>
    props.$isHighlighted ? 'var(--color-highlight)' : 'var(--color-surface)'};
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 28px 30px;
  margin-bottom: 20px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(61, 44, 141, 0.08);
  }
`;

const PostTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 0.85rem;
  color: var(--color-text-muted);
`;

const AuthorTag = styled.span`
  font-weight: 500;
  color: var(--color-primary);
`;

const PostPreview = styled.p`
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.65;
`;

const NewBadge = styled.span`
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

interface PostComponentProps {
  post: PostType;
  highlightAuthor: string;
}

function getPreview(content: string): string {
  const words = content.split(' ');
  if (words.length <= 20) return content;
  return words.slice(0, 20).join(' ') + '...';
}

function isNew(dateString: string): boolean {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - postDate.getTime();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  return diffMs < twentyFourHours;
}

function PostComponent({ post, highlightAuthor }: PostComponentProps) {
  const highlighted = post.author === highlightAuthor;
  const postIsNew = isNew(post.date);

  return (
    <PostCard $isHighlighted={highlighted}>
      <PostTitle>
        {post.title} {postIsNew && <NewBadge>New!</NewBadge>}
      </PostTitle>
      <PostMeta>
        <AuthorTag>{post.author}</AuthorTag>
        <span>|</span>
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}</span>
      </PostMeta>
      <PostPreview>{getPreview(post.content)}</PostPreview>
    </PostCard>
  );
}

const MemoizedPost = React.memo(PostComponent);

export default withLogger(MemoizedPost);