
import React from 'react'
import LeftContent from './LeftContent.jsx';
import RightContent from './RightContent.jsx';

const Page1Content = (props) => {
  return (
    <div className=" h-[90vh] flex gap-10 items-center py-5 px-5">
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}
export default Page1Content
