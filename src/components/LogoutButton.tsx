type LogoutButtonProps = {
    onLogout: ()=> void
}

const butonLogoutStyle = {
    width: '150px',
    cursor: 'pointer'
}

export function LogoutButton({onLogout,}: LogoutButtonProps){
    return(
        <button style={butonLogoutStyle} onClick={onLogout}>Logout</button>
    )
} 