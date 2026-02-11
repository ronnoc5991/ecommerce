import styles from "./styles.module.scss";

type NavProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

const MENU_ID = "main-menu";

export default function Nav({ isOpen, toggleIsOpen }: NavProps) {
  // when the menu opens...
  // need to fill the screen
  // disable scrolling
  // make other content inert
  // move focus to first thing in the menu?
  // style the thing
  // the 'inert' thing would need to be in the parent layout?
  // pass this nav a function onMenuOpen/onMenuClosed?
  // or just hold the state for the menu up there and pass a setter down?
  // then, the parent inerts the body?

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
            Products
          </button>
        </li>
      </ul>
      {isOpen && (
        <div id={MENU_ID} hidden={!isOpen}>
          Menu
        </div>
      )}
    </nav>
  );
}
