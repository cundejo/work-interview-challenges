import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Block from './Block'

test('Rendering <Block> ', () => {
  render(<Block value="text" index={0} onClick={()=>null} />)
  expect(screen.queryByText('text')).toBeDefined;
})
