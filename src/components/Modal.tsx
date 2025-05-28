interface ModalProps {
  isShowing?: boolean;
  toggle?: () => void;
}

export default function Modal({ isShowing, children }: React.PropsWithChildren<ModalProps>) {
  return (
    isShowing && (
      <dialog className="modal modal-open">
        <div className="modal-box">{children}</div>
      </dialog>
    )
  );
}
