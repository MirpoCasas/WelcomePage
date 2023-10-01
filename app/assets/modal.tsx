import { useEffect, ReactNode } from "react";
import ReactPortal from "./reactportal";
import styles from"./modalStyles.module.scss";

type modalProps = {
	children: ReactNode;
	handleClose: () => void;
}


function Modal({ children , handleClose }: modalProps) {

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? handleClose() : null);
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
				<div className={styles.modal}>
					<div className={styles.modal_content}>
					<button onClick={handleClose} className={styles.close_btn}>
						X
					</button>
						{children}
						</div>
				</div>
			
		</ReactPortal>
	);
}
export default Modal;