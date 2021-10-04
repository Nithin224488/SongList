import {
  SongContainer,
  SongDetailContainer,
  SongImage,
  SongName,
  SongGenre,
  DeleteContainer,
  Duration,
  DeleteIcon,
} from './styledComponents'

const Track = props => {
  const {track, deleteTrack} = props
  const {imageUrl, name, genre, duration, id} = track

  const onClickDelete = () => {
    deleteTrack(id)
  }

  return (
    <SongContainer>
      <SongDetailContainer>
        <SongImage src={imageUrl} alt="track" />
        <div>
          <SongName>{name}</SongName>
          <SongGenre>{genre}</SongGenre>
        </div>
      </SongDetailContainer>
      <DeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteIcon onClick={onClickDelete} data-testid="delete" />
      </DeleteContainer>
    </SongContainer>
  )
}
export default Track
