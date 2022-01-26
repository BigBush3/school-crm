import Footer from "../components/Footer";
import styles from "../styles/MyCourses.module.css";
import Link from "next/link";

export default function MyCourses() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <div className={styles.userBlock}>
            <div className={styles.userPhotoBlock}>
              <img
                className={styles.userPhoto}
                src={
                  "https://thumb.tildacdn.com/tild6639-3938-4862-b336-326264376261/-/resize/100x/-/format/webp/designers1.png"
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
            <div className={styles.courseTitle}>Course content</div>
          </div>
          <div>
            <div className={styles.course}>
              <div>
                <img
                  src={
                    "https://static.tildacdn.com/tild3864-3563-4763-b536-663264313863/21_IS_on_.png"
                  }
                  className={styles.photoCourse}
                />
              </div>
              <div className={styles.descCourse}>
                <div className={styles.descTitle}>
                  Industrial Sketching (Full course)
                </div>
                <div className={styles.descSubtitle}>for beginners</div>
                <div className={styles.desc}>
                  from simple to complex. <br /> what is perspective, how to
                  transfer textures, <br />
                  create our design
                </div>
                <div>
                  <button className={styles.buttonLearn}>Learn</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.course}>
              <div>
                <img
                  src={
                    "https://static.tildacdn.com/tild3030-3737-4361-b237-633830366335/21_IS_on_texure.png"
                  }
                  className={styles.photoCourse}
                />
              </div>
              <div className={styles.descCourse}>
                <div className={styles.descTitle}>
                  Industrial Sketching (Full course)
                </div>
                <div className={styles.descSubtitle}>for beginners</div>
                <div className={styles.desc}>
                  from simple to complex. <br /> what is perspective, how to
                  transfer textures, <br />
                  create our design
                </div>
                <div>
                  <button className={styles.buttonLearn}>Learn</button>
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
