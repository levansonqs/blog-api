import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const GuestRouter = ({component: Component, ...rest}) =>

    <Route
        {...rest}
        render={props =>
            !localStorage.token ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                    }}
                />
            )
        }
    />


export default GuestRouter