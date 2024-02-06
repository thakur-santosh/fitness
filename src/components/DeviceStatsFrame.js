import styles from "./DeviceStatsFrame.module.css";

const DeviceStatsFrame = () => {
  return (
    <div className={styles.settingsFrame}>
      <div className={styles.addDetailsFrame}>
        <h3 className={styles.addDetails}>Add Details</h3>
      </div>
      <input
        className={styles.settingsFrameChild}
        placeholder="Name"
        type="text"
      />
    </div>
  );
};

export default DeviceStatsFrame;
