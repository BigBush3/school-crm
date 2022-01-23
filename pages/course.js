import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Course.module.css";
import Link from "next/link";
import YouTube from "react-youtube";

export default function Course() {
  const opts = {
    height: "352",
    width: "560",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <div className={styles.userBlock}>
            <div className={styles.userPhoto}>
              <img
                className={styles.logo}
                src={
                  "https://static.tildacdn.com/tild3435-6463-4436-a637-393566323462/Logo_purple_eng.png"
                }
              />
            </div>
            <div className={styles.userInfo}>
              <div>UserName (user@email.com)</div>
              <div>Edit Profile</div>
              <Link href="/login">
                <div className={styles.logOut}>Log out</div>
              </Link>
            </div>
          </div>
          <div className={styles.titleBlock}>
            <div>
              <img
                className={styles.titleImage}
                src={
                  "https://thumb.tildacdn.com/tild3262-3430-4364-b261-653135363663/-/format/webp/2019_ELENA_IS_chair_.jpg"
                }
              />
            </div>
            <div className={styles.titleDesc}>
              <span className={styles.descTitle}>Industrial sketching — </span>{" "}
              <br />
              <span className={styles.descSubtitle}>
                quick drawing of concepts and objects in the field <br /> of
                industrial design
              </span>
            </div>
          </div>
          <div className={styles.titleBlockVideos}>
            <div className={styles.title}>1 block</div>
          </div>
          <div className={styles.blockVideos}>
            <div className={styles.videoBlock}>
              <div className={styles.descVideo}>
                <div className={styles.descVideoTitle}>
                  1. What is perspective?
                </div>
                <div className={styles.descVideoSubtitle}>
                  Types of Perspective
                </div>
              </div>
              <div>
                <YouTube
                  className={styles.video}
                  videoId="oWkbjoq_NKY"
                  opts={opts}
                />
              </div>
            </div>
            <div className={styles.subtitleVideo}>#1 Теория</div>
            <hr className={styles.videoHr} />
          </div>
          <div className={styles.blockVideos}>
            <div className={styles.videoBlockSecond}>
              <div className={styles.descVideo}>
                <div className={styles.descVideoTitle}>2. Practic</div>
                <div className={styles.descVideoSubtitle}>
                  Виды перспективы <br />— Одноточечная <br />— Двухточечная{" "}
                  <br />— Трехточечная
                </div>
              </div>
              <div>
                <YouTube className={styles.video} videoId="Q0WSS-2tYtc" opts={opts} />
              </div>
            </div>
            <div className={styles.subtitleVideo}>#2 Практика</div>
            <hr className={styles.videoHr} />
          </div>
          <div className={styles.blockVideos}>
            <div className={styles.videoBlockThird}>
              <div className={styles.descVideo}>
                <div className={styles.descVideoTitle}>
                  3. Материалы для скетчинга
                </div>
              </div>
              <div>
                <YouTube className={styles.video} videoId="mMoFDxscWig" opts={opts} />
              </div>
            </div>
            <div className={styles.subtitleVideo}>#3 Теория</div>
            <hr className={styles.videoHr} />
          </div>
          <div className={styles.blockVideos}>
            <div className={styles.videoBlockFourth}>
              <div className={styles.descVideo}>
                <div className={styles.descVideoTitle}>
                  4. Как разогревать руку
                </div>
              </div>
              <div>
                <YouTube className={styles.video} videoId="oWkbjoq_NKY" opts={opts} />
              </div>
            </div>
            <div className={styles.subtitleVideo}>#4 Практика</div>
            <hr className={styles.videoHr} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
