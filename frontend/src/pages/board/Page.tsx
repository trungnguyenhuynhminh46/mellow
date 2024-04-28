import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import LayoutHeader from '@components/LayoutHeader'
import BoardDetailHeader from '@pages/board/components/BoardDetailHeader.tsx'
import BoardDetailContent from '@pages/board/components/BoardDetailContent.tsx'

export const Page = () => {
  const { id } = useParams()
  console.log(id)
  return <Container maxWidth={false} disableGutters={true} sx={{
    height: '100vh'
  }}>
    <LayoutHeader />
    <BoardDetailHeader />
    <BoardDetailContent />
  </Container>
}
