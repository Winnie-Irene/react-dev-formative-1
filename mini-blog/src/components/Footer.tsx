import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 48px;
  padding: 24px 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
`;

const FooterBrand = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 6px;

  span {
    color: var(--color-primary);
  }
`;

const FooterNote = styled.p`
  font-size: 0.8rem;
  color: var(--color-text-muted);
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterBrand>
        Dev Insights<span>.</span>
      </FooterBrand>
      <FooterNote>Built with React, TypeScript, and Vite</FooterNote>
    </FooterWrapper>
  );
}

export default Footer;