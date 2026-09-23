import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 48px;
  padding: 32px 0 24px;
  border-top: 1px solid var(--color-border);
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BrandName = styled.span`
  font-family: var(--font-logo);
  font-size: 1.1rem;
  font-weight: 700;
  font-style: italic;

  .dev { color: var(--color-primary); }
  .name { color: var(--color-text); }
  .dot { color: var(--color-primary); }
`;

const BrandTagline = styled.p`
  font-size: 0.82rem;
  color: var(--color-text-muted);
  max-width: 260px;
  line-height: 1.5;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 32px;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinkGroupTitle = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2px;
`;

const FooterLink = styled.a`
  font-size: 0.8rem;
  color: var(--color-text-muted);
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

const FooterBottom = styled.div`
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-text-muted);
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterBrand>
          <BrandName>
            <span className="dev">Dev</span>
            <span className="name"> Insights</span>
            <span className="dot">.</span>
          </BrandName>
          <BrandTagline>
            Quick tips and lessons from the team, for the team.
          </BrandTagline>
        </FooterBrand>

        <FooterLinks>
          <LinkGroup>
            <LinkGroupTitle>Platform</LinkGroupTitle>
            <FooterLink href="#new-post">Write a Post</FooterLink>
            <FooterLink href="#">Tags</FooterLink>
            <FooterLink href="#">Authors</FooterLink>
          </LinkGroup>
          <LinkGroup>
            <LinkGroupTitle>Resources</LinkGroupTitle>
            <FooterLink href="#">React Docs</FooterLink>
            <FooterLink href="#">TypeScript Docs</FooterLink>
            <FooterLink href="#">Vite Guide</FooterLink>
          </LinkGroup>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        Built with React, TypeScript, and Vite. Dev Insights 2026.
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;