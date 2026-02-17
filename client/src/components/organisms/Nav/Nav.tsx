import Typography from "@/components/atoms/Typography/Typography";
import styles from "./styles.module.scss";

type NavProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

const MENU_ID = "main-menu";

// TODO: when we are past this thing's scroll
// and we scroll upwards, reveal the menu (make sticky)

export default function Nav({ isOpen, toggleIsOpen }: NavProps) {
  // style the thing
  // move focus to first thing in the menu?

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="/">LOGO</a>
      </div>
      <ul>
        <li>
          <button
            aria-controls={MENU_ID}
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleIsOpen}
          >
            <Typography as="span">Products</Typography>
          </button>
        </li>
      </ul>
      {isOpen && (
        <div id={MENU_ID} className={styles.menu} hidden={!isOpen}>
          <a href="/men">
            <Typography as="span">Men</Typography>
          </a>
          <a href="/women">
            <Typography as="span">Women</Typography>
          </a>
          <div className={styles.backdrop} onClick={toggleIsOpen}></div>
        </div>
      )}
    </nav>
  );
}
