import React, { useState } from 'react';
import styled from 'styled-components';
import type { Post as PostType } from '../utils/types';
import withLogger from '../hocs/withLogger';

interface PostCardProps {
  $isHighlighted: boolean;
}

const PostCard = styled.div<PostCardProps>`
  background: ${(props) =>
    props.$isHighlighted ? 'var(--color-highlight)' : 'var(--color-surface)'};
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px 28px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-text);
`;

const PostDate = styled.span`
  font-size: 0.78rem;
  color: var(--color-text-muted);
`;

const PostTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
  letter-spacing: -0.3px;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

const PostPreview = styled.p`
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 14px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  font-size: 0.78rem;
  color: var(--color-tag-text);
  background: var(--color-tag-bg);
  padding: 3px 10px;
  border-radius: 4px;
`;

const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--color-border);
`;

const Reactions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ReactionButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.82rem;
  color: ${(props) => (props.$active ? 'var(--color-accent)' : 'var(--color-text-muted)')};
  transition: color 0.15s ease;
  font-family: var(--font-main);

  &:hover {
    color: ${(props) => (props.$active ? 'var(--color-accent)' : 'var(--color-text)')};
  }
`;

const ReadingTime = styled.span`
  font-size: 0.78rem;
  color: var(--color-text-muted);
`;

const NewBadge = styled.span`
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 8px;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

interface PostComponentProps {
  post: PostType;
  highlightAuthor: string;
}

function getPreview(content: string): string {
  const words = content.split(' ');
  if (words.length <= 25) return content;
  return words.slice(0, 25).join(' ') + '...';
}

function getReadingTime(content: string): number {
  const words = content.split(' ').length;
  return Math.max(1, Math.ceil(words / 200));
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
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
  const readTime = getReadingTime(post.content);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(post.bookmarks);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    setBookmarkCount(bookmarked ? bookmarkCount - 1 : bookmarkCount + 1);
  };

  return (
    <PostCard $isHighlighted={highlighted}>
      <PostHeader>
        <Avatar>{getInitials(post.author)}</Avatar>
        <AuthorInfo>
          <AuthorName>{post.author}</AuthorName>
          <PostDate>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </PostDate>
        </AuthorInfo>
      </PostHeader>

      <PostTitle>
        {post.title}
        {postIsNew && <NewBadge>New</NewBadge>}
      </PostTitle>

      <PostPreview>{getPreview(post.content)}</PostPreview>

      <TagRow>
        {post.tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagRow>

      <PostFooter>
        <Reactions>
          <ReactionButton $active={liked} onClick={handleLike}>
            {liked ? '♥' : '♡'} {likeCount}
          </ReactionButton>
          <ReactionButton $active={bookmarked} onClick={handleBookmark}>
            {bookmarked ? '★' : '☆'} {bookmarkCount}
          </ReactionButton>
        </Reactions>
        <ReadingTime>{readTime} min read</ReadingTime>
      </PostFooter>
    </PostCard>
  );
}

const MemoizedPost = React.memo(PostComponent);

export default withLogger(MemoizedPost);