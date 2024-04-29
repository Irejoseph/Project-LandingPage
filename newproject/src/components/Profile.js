function Profile(props){

    const {firstname, lastname} = props

    return (
        <h1>
            Name: {firstname} {lastname}
        </h1>
    )
}

export default Profile