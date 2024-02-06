import FrameConnectedDevicesStats from "../components/FrameConnectedDevicesStats";
import FrameComponent from "../components/FrameComponent";
import styles from "./Fitness.module.css";

const Fitness = () => {
  return (
    <div className={styles.fitness}>
      <FrameConnectedDevicesStats />
      <div className={styles.addDetailsRectangle}>
        <img
          className={styles.addDetailsRectangleChild}
          loading="eager"
          alt=""
          src="/rectangle-7@2x.png"
        />
        <FrameComponent />
      </div>
    </div>
  );
};

export default Fitness;
