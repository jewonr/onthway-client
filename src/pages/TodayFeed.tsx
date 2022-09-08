import styled from 'styled-components'
import React from 'react'
import SecHeader from '../components/SecHeader'
import ItemList from '../components/ItemList'
import SecButton from '../components/SecButton'

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  margin-top: 76px;
`

const SecButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function TodayFeed() {
  return (
    <Container>
      <SecHeader titleText='오늘의 피드' buttonText='카테고리 추가' />
      <ItemList text='' />
      <SecButtonContainer>
        <SecButton text="더보기" />
      </SecButtonContainer>
    </Container>
  )
}

export default TodayFeed