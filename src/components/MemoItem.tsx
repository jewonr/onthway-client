import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MemoState } from '../modules/memo'

type MemoItemType = {
  memo: MemoState;
  onClick: (id: number) => void;
}

const Container = styled.div<{ view: boolean }>`
  width: 100%;
  height: 50px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-collapse: collapse;
  background-color: #FFFFFF;
  cursor: pointer;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #868686;
`

const Date = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #868686;
`

function MemoItem({ memo, onClick }: MemoItemType) {
  const handleClick = () => {
    onClick(memo.id);
  }

  return (
    <Container onClick={handleClick} view={memo.view} >
      <Text>
        {memo.text === '' ? '새로운 메모' : memo.text.length > 10 ? memo.text.slice(0, 10) + '...' : memo.text}
      </Text>
      <Date>
        {memo.date}
      </Date>
    </Container>
  )
}

export default MemoItem;