import DeviceStatsFrame from "./DeviceStatsFrame";
import MembershipQuestions from "./MembershipQuestions";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <form className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.settingsFrameWrapper}>
        <DeviceStatsFrame />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.areYouAGymMemberParent}>
          <input
            className={styles.areYouAGymMember}
            placeholder="Age"
            type="text"
          />
          <input
            className={styles.areYouAGymMember1}
            placeholder="Height"
            type="text"
          />
        </div>
        <div className={styles.gymMemberMeatParent}>
          <MembershipQuestions />
          <MembershipQuestions />
          <MembershipQuestions />
          <div className={styles.qRCodeScan}>
            <button className={styles.addDetailsButton}>
              <div className={styles.addDetailsButtonChild} />
              <div className={styles.saveDetails}>Save Details</div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
