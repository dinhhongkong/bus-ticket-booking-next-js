import Link from "next/link";
import person from '@/asserts/person.svg';
import logo from "../../asserts/logo_new.svg"
import Logout from "../../asserts/Logout.png"
import styles from "./header.module.css"

export default function Header() {
  return (
    <>
      <div className={ `${styles.headerHomePage} relative mx-auto w-full bg-white text-[13px] block h-[220px]`}>
        <div className="flex m-auto w-[1128px] h-[80px]">
          <div className="mt-4 flex flex-1 items-start"></div>
          <div className="logo-banner z-10 mx-20">
            <Link href="/">
              <img alt="logo_banner" loading="lazy" style={{width: "295px", height: "60px", color: 'transparent'}}
                   src={logo.src}/>
            </Link>
          </div>
          <div className="mt-4 flex flex-1 justify-end">
            <div
              className={"flex items-start gap-4 text-center text-sm font-medium"}>
              <Link href="/login"
                    className="flex h-8 w-44 justify-center text-[12px] cursor-pointer items-center gap-2 rounded-2xl bg-white p-2 text-black">
                <img src={person.src} style={{width: "20px", height: "20px"}} alt=""/>
                <span className={``}>Đăng nhập/Đăng ký</span>
              </Link>
            </div>
          </div>

        </div>

        <div className={"nav-link-group content"}>
          <Link className={styles.active} href="/">TRANG CHỦ</Link>
          <Link className={styles.active} href="/tra-cuu-ve">TRA CỨU VÉ</Link>
          <Link className={styles.active} href="/lien-he">LIÊN HỆ</Link>
          <Link className={styles.active} href="/ve-chung-toi">VỀ CHÚNG TÔI</Link>
        </div>
      </div>
    </>

  )
}