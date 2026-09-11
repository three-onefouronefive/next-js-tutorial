import React from 'react'

interface Props {
    params: Promise<{ id: string; photoId: string }>
}

const PhotoDetailPage = async ({ params }: Props) => {
    const { id, photoId } = await params
    
  return (
    <div className='text-black'>
        PhotoDetailPage {id}, {photoId}
    </div>
  )
}

export default PhotoDetailPage