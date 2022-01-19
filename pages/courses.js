import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Courses.module.css";
import Link from "next/link";

export default function Courses() {
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
          <div>
            <div className={styles.title}>Courses</div>
            <div className={styles.courseContainer}>
              <div className={styles.coursePhoto}>
                <img
                  className={styles.logoCourse}
                  src={
                    "https://static.tildacdn.com/tild3435-6463-4436-a637-393566323462/Logo_purple_eng.png"
                  }
                />
              </div>
              <div className={styles.courseInfo}>
                <div className={styles.names}>
                  <div className={styles.name}>Name</div>
                  <div className={styles.from}>from 20/12</div>
                </div>
                <div className={styles.description}>
                  Self-development in design and revolutions <br />
                  in the minds of the early 20s.
                </div>
                <div className={styles.learnButton}>Learn</div>
              </div>
              <div>
                <div className={styles.courseContainer}>
                  <div className={styles.coursePhoto}>
                    <img
                      className={styles.logoCourse}
                      src={
                        "https://static.tildacdn.com/tild3435-6463-4436-a637-393566323462/Logo_purple_eng.png"
                      }
                    />
                  </div>
                  <div className={styles.courseInfo}>
                    <div className={styles.names}>
                      <div>
                        <div className={styles.name}>Name</div>
                        <div className={styles.titleName}>Title Name</div>
                      </div>
                      <div className={styles.from}>from 20/12</div>
                    </div>
                    <div className={styles.description}>
                      Self-development in design and revolutions <br />
                      in the minds of the early 20s.
                    </div>
                    <div className={styles.learnButton}>Learn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtitle}>
            If you need help with your account, please contact
            support@lakmus@school
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
