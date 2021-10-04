import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

export const AppContainer = styled.div`
  height: 100vh;
`
export const BackgroundImage = styled.div`
  height: 30vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  color: #fff;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
`
export const TrackContainer = styled.div`
  background-color: #152850;
  height: 70vh;
  display: flex;
  flex-direction: column;
`
export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  color: #fff;
`
export const Heading = styled.h1`
  font-size: 34px;
`
export const SearchContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  height: 40px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;
  align-self: center;
  border: none;
  outline: none;
`
export const SearchIcon = styled(AiOutlineSearch)`
  background-color: #fff;
  font-size: 24px;
  color: #000;
  align-self: center;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 40px;
  outline: none;
`
export const NoSong = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #fff;
  align-self: center;
  margin: auto;
`
export const TrackList = styled.ul`
  list-style: none;
  height: 100%;
  overflow: auto;
`
