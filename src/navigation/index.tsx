import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

import { NavigationContainer } from "@react-navigation/native"


import Auth from "./AuthStack"
import Loading from "~/screens/utils/Loading"


export default () => {
  const auth = useContext(AuthContext)
  const user = auth.user

  return (
    <NavigationContainer>
      {/* {<Loading/>} */}
      {<Auth/>}
    </NavigationContainer>
  )
}