import React, { useEffect, useState } from 'react'
import Header from '../componets/Header'
import View from '../componets/View'
import Profile from '../componets/Profile'



function Dashboard() {
  const [displayName, setDisplayname] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("exisitingUser")) {
      const { username } = JSON.parse(sessionStorage.getItem("exisitingUser"))
      setDisplayname(username)
    } else {
      setDisplayname("")
    }
  }, [])

  return (
    <>
      <Header insideDashBoard={true} />
      <div style={{ marginTop: '100px' }} className="container-fluid">
        <h1>Welcome <span className='text-warning'>{displayName?.split(" ")[0]}</span>,</h1>
        <div className="row mt-3">
          <div className="col-lg-8">
            <View />
          </div>
          <div className="col-lg-4">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard