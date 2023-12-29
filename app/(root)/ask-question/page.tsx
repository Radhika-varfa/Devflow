import Question from '@/components/forms/Question'
// import {auth} from '@clerk/nextjs'
import { getUserById } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  // const {userId} = auth();

  const userId = 'CL123'
 if(!userId) redirect('/sign-in');

 const mongoUser = await getUserById({ userId });
 console.log(mongoUser);

  return (
    <div>
      <h1 className='h1-bold twxt-dark'>Ask a quwstion</h1>
      <div>
        <Question mongoUserId={JSON.stringify(mongoUser._id)}/>
      </div>
    </div>
  )
}

export default page