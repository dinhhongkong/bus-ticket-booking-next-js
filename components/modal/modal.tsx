export default function Modal({children, onClose}) {

  return(
    <>
      <div className={'fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center'}  onClick={onClose}></div>
      <dialog open >
        {children}
      </dialog>
    </>
  )

}