import React from 'react'
import styled from 'styled-components'
import { Container, GithubButton, SectionTitle } from '../../styles/theme'
import Card from '../components/Projects/Card'
import CardData from '../components/Projects/CardData'

const WorksTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

function Works() {
  return (
    <Container >
      <WorksTitle >
        <SectionTitle>Projetos</SectionTitle>
        <GithubButton>
          <a href="https://github.com/santos-vinicius" target="_blank" rel="noopener noreferrer">
            Ver mais
          </a>
        </GithubButton>
      </WorksTitle>
      <div>
        <Card details={CardData} />
      </div>
    </Container>
  )
}

export default Works