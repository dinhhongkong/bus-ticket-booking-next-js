import styles from "./footer.module.css"
export default function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className="flex min-h-[40px] flex-col items-center justify-center bg-[#00613D] py-2 text-center text-white sm:flex-row">
                <span>© 2024<span className="mx-2">|</span>
                  Trang web phục vụ mục đích học tập  - Hệ thống bán vé xe PTITHCM
                </span>
        </div>
      </div>
    </>
  )
}