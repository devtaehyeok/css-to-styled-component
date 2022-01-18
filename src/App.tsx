import FrequentlyAskedQuestion from "./before/Faq";
import ContactCard from "./after/ContactCard";
import styles from "./App.module.css";
import StyledLoginForm from "./after/LoginForm";
import StyledFrequentlyAskedQuestion from "./after/Faq";

export default function App() {
  return (
    <div className={styles.app}>
      <StyledFrequentlyAskedQuestion
        question="What does “CSS” stand for?"
        answer="Cool Styling Strategy"
      />
      <StyledLoginForm
        handleSubmit={(ev) => {
          ev.preventDefault();
          alert("Submitted!");
        }}
      />
      <ContactCard name="hellCat" email="hellCat@gmail.com" />
    </div>
  );
}
