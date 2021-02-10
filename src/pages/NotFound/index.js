import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()
    return (
        <div style={{
            textAlign: "center",
            paddingTop: "30vh",
            backgroundColor: "#02141D",
            minHeight: "100vh"
        }}>
            <h1>Page Not Found</h1>
            <h1>404</h1>

            <div className="pt-6">
                <button className="is-link button" onClick={() => history.push("/")}>Home</button>
            </div>
        </div>
    )
}

export default NotFound
