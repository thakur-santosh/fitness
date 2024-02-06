import styles from "./MembershipQuestions.module.css";

const MembershipQuestions = () => {
  return (
    <div className={styles.gymMemberMeat}>
      <div className={styles.gymMemberMeatChild} />
      <div className={styles.areYouA}>Are you a gym member?</div>
      <img
        className={styles.ionarrowBackOutlineIcon}
        alt=""
        src="/ionarrowbackoutline-1@2x.png"
      />
    </div>
  );
};

export default MembershipQuestions;
