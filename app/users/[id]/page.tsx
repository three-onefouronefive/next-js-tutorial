import React from 'react'

interface Props {
    params: Promise<{ id: string }>
}

const UserDetailPage = async ({ params }: Props) => {
    const { id } = await params
    
  return (
    <div className='text-black'>
        UserDetailPage {id}
    </div>
  )
}

export default UserDetailPage