import styles from "./ProfileCard.module.css";
const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.cardHeader}>
        <div className={styles.profileImage}>
          <img src="./Images/user-image.jpg" alt="ProfileImage" />
        </div>
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.name}> Alex</h2>
        <p className={styles.title}> Frontend Developer</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}> 1.2k</span>
            <span className={styles.statLabel}> Followers</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>2k</span>
            <span className={styles.statLabel}> Following</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}> 24</span>
            <span className={styles.statLabel}> Posts</span>
          </div>

        </div>

        <p className = {styles.bio}>
            Passionate about creating beautiful and functional web applications. I love coding and sharing my knowledge with the community. Always eager to learn new technologies and improve my skills.
        </p>

        <div className = {styles.actions}>
            <button className = {styles.followButton}>Follow</button>
            <button className = {styles.messageButton}>Message</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
