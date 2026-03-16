import React from 'react'
import { useParams } from 'react-router-dom'

// Dynamic Routing
const CourseDetails = () => {

   const params = useParams()
   console.log(params.courseId);
   
// Dynamic Routing
  return (
    <div>
      <h1> {params.courseId} Course Details </h1>
    </div>
  )
}

export default CourseDetails
