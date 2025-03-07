
    function UserGreeting(props){

        // if(props.isLoggedIn) {
        //     return <h2>Welcome {props.username}</h2>
        // }else{
        //     return <h2>Please, {props.username}, log in to continue</h2>
        // }
        const welcomeMessage = <h2 className="logged-in-msg">
            Welcome {props.username}
            </h2>
        const logInPrompt = <h2 className="logged-out-msg">
            {props.username} log in to continue</h2>
            
        return(props.isLoggedIn ? welcomeMessage : logInPrompt)
    }
    export default UserGreeting