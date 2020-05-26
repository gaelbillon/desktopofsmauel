import React from "react";
import styled from "styled-components";
import ResumeItem from "elements/ResumeItem";
import Column from "elements/Column";

const Section = styled.section`
  color: var(--color-white-500);
`;

const Title = styled.h3`
  font-family: var(--font-primary);
  color: var(--color-white-500);
  margin: 0;
`;

// const Subtitle = styled.p`
//   font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1600 - 320)));
//   line-height: 2em;
//   color: var(--color-secondary-100);
//   margin-bottom: 4rem;
// `;

const ResumeSectionTitle = styled.small`
  color: var(--color-secondary-100);

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    transform-origin: top left;
    transform: rotate(90deg);
    margin-left: 22px;
  }
`;

const Block = styled.section`
  display: grid;
  grid-template-columns: 10ch 1fr;
  grid-gap: var(--var-padding-m);
  margin: 2rem 0;
  @media only screen and (max-width: 1024px) {
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 22px 1fr;
  }
`;

const ResumeSection = styled(Column)`
  grid-gap: var(--var-padding-s) var(--var-padding-m);
`;

const ResumeParagraph = styled.p`
  small {
    color: var(--color-primary-100);
    opacity: 0.7;
    margin-left: 2rem;
  }
`;

const Resume = () => {
  return (
    <Section>
      <Title as="h1">Gaël Billon</Title>
      {/*     <Subtitle>
      I’m now pursuing a career in the field of UI/UX Design because I'm deeply
      passionate about technology and how it profoundly changes our way of
      living. The process of turning an idea into a viable product gives me
      great satisfaction.
    </Subtitle> */}
      <Block>
        <ResumeSectionTitle>Career</ResumeSectionTitle>
        <ResumeSection>
          <ResumeItem
            title="Freelance web consultant"
            meta="2018 - Now"
          />
          <ResumeItem
            title="Proxy Porduct Owner at Schneider Electric"
            meta="2015 - 2019"
          />
          <ResumeItem
            title="Co-founder/Managing director at Escadrone"
            meta="2014 - 2017"
          />
        </ResumeSection>
      </Block>

      <Block>
        <ResumeSectionTitle>Education</ResumeSectionTitle>
        <ResumeItem
          title="Lycée Aristide Bergès"
          content="Bac scientifique"
          meta="2008 - 2011"
        />
      </Block>
      <Block>
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <div>
          <p>HTML, CSS, Javascript, PHP, Git</p>
          <p>SEO, SXO, Analytics, Tag Manager</p>
          <p>Prototyping, wireframing, atomic design</p>
        </div>
      </Block>
      <Block>
        <ResumeSectionTitle>Language</ResumeSectionTitle>
        <div>
          <ResumeParagraph>
            Native in French (C2)
            <br />
            Professional Proficiency in English (C1)
            <br />
            Intermediate in Spansish (B1)
          </ResumeParagraph>
        </div>
      </Block>
    </Section>
  );
};

export default Resume;
