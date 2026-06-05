import style from './css/userProfile.module.css'
function UserProfile() {
  return (
    <div> 
        <div className={style.card}>
            <img className={style.img} src="/src/assets/hero.png" alt="User Avatar" />
        
        <div className={style.textWrapper}>
            <h1 className={style.heading}>User Profile</h1>
            <p>This is the user profile page.</p>
        </div>
      </div>    
    </div>

    
  );
}
export default UserProfile;