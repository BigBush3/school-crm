import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Payment.module.css";
import { TextField } from "@mui/material";

export default function Courses() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div>
          <div className={styles.title}>My bag</div>
          <div>
            <div className={styles.firstBlock}>
              <div className={styles.priceBlock}>
                <div className={styles.priceRow}>
                  <img
                    src={
                      "https://thumb.tildacdn.com/tild6534-3063-4061-b834-333132663034/-/resize/200x/-/format/webp/2020_IS_SUBJETS.jpg"
                    }
                    className={styles.image}
                  />
                  <div className={styles.desc}>
                    Industrual Sketching — Full course/ 23 Lessons
                  </div>
                  <div className={styles.finalPrice}>
                    <div className={styles.priceOne}>200$</div>
                    <div className={styles.priceTwo}>150 $</div>
                  </div>
                </div>
              </div>
              <div className={styles.descBlock}>
                <ul className={styles.aboutCourse}>
                  <li>23 lessons/ 10 hours</li>
                  <li>Lifetime access</li>
                  <li>All future updates</li>
                  <li>14 day money-back guarantee</li>
                </ul>
              </div>
            </div>
            <div className={styles.secondBlock}>
              <div className={styles.paymentBlock}>
                <div className={styles.promoBlock}>
                  <div className={styles.promo}>Promo code:</div>
                  <div>
                    <input className={styles.promoInput} />
                  </div>
                  <div>
                    <button className={styles.buttonApply}>APPLY CODE</button>
                  </div>
                </div>
                <div className={styles.totalBlock}>
                  <div>Total:</div>
                  <div>150$</div>
                </div>
                <div className={styles.acceptBlock}>
                  <div className={styles.accept}>
                    We accept: Visa, Master Card, Мир
                  </div>
                </div>
              </div>
              <div className={styles.profileBlock}>
                <div className={styles.profileTitle}>Your Profile</div>
                <div>
                  <input placeholder="mail@example.com" className={styles.emailInput} />
                </div>
                <div>
                  <input placeholder="John Smith" className={styles.nameInput}/>
                </div>
                <div>
                  <button className={styles.checkButton}>CHECK OUT</button>
                </div>
                <div className={styles.subtitle}>
                  By proceeding here you are agreeing to our{" "}
                  <a
                    href="https://skillsfaster.com/terms-of-service/"
                    rel="noopener noreferrer"
                    className={styles.rules}
                  >
                    Terms of Service
                  </a>{" "}
                  and will be charged at the price quoted above.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
