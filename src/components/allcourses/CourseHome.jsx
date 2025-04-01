import React from "react"
import Back from "../common/back/Back"
import ReportForm from "./ReportForm"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Report Site' />
      <ReportForm />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
