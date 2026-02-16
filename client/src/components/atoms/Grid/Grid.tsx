import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

// TODO: 'as' prop that determines tag used?
type GridProps = PropsWithChildren<{}>;

export default function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
