import {AiOutlineDelete} from 'react-icons/ai'
import styled from 'styled-components'

export const SongContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 50px;
`
export const SongDetailContainer = styled.div`
  display: flex;
`
export const SongImage = styled.img`
  width: 200px;
  border-radius: 15px;
  margin-right: 40px;
`

export const SongName = styled.h1`
  font-size: 24px;
  color: #ffff;
`
export const SongGenre = styled.p`
  font-size: 18px;
  color: #3b82f6;
`
export const DeleteContainer = styled.div`
  display: flex;
  color: #ffff;
`

export const DeleteIcon = styled(AiOutlineDelete)`
  font-size: 30px;
  align-self: center;
  cursor: pointer;
`
export const Duration = styled.p`
  font-size: 20px;
  margin-right: 40px;
  align-self: center;
`
