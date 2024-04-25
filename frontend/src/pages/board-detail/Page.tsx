import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import LayoutHeader from '@components/LayoutHeader.tsx'
import BoardDetailHeader from '@pages/board-detail/components/BoardDetailHeader.tsx'
import BoardDetailContent from '@pages/board-detail/components/BoardDetailContent.tsx'

export const Page = () => {
  const { id } = useParams()
  console.log(id)
  return <Container maxWidth={false} disableGutters={true} sx={{
    height: '100vh',
    background: '#45abef'
  }}>
    <LayoutHeader />
    <BoardDetailHeader />
    <BoardDetailContent />
  </Container>
}
