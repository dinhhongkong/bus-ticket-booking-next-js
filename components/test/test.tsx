export default function Test() {
  return (
    <header
      className="header-home-page relative mx-auto w-full bg-white text-[13px] block max-h-[70px] 2lg:min-h-[150px] 2lg:max-h-[150px]">
      <div className="2lg:content 2lg:layout hidden h-20 2lg:flex">
        <div className="mt-4 flex flex-1 items-start">
          <div className="ant-dropdown-trigger flex cursor-pointer items-center"><img src="/images/icons/eng.svg"
                                                                                      width="26"
                                                                                      alt="language icon"/><span
            className="mx-2 uppercase text-white">en</span><img src="/images/icons/icon_form_droplist.svg"
                                                                alt="icon_form_droplist"/></div>
          <div className="ml-4 border-l pl-4">
            <div className="ant-dropdown-trigger flex cursor-pointer items-center">
              <img
              src="/images/icons/download_app.svg" width="26" alt="download app icon"/><span className="mx-2 text-white">Download App</span><img
              src="/images/icons/icon_form_droplist.svg" alt="icon_form_droplist"/></div>
          </div>
        </div>
        <div className="logo-banner z-10 mx-20"><a href="/"><img alt="logo_banner" loading="lazy" width="295"
                                                                 height="60" decoding="async" data-nimg="1"
                                                                 style="color:transparent"
                                                                 src="/_next/static/media/logo_new.8a0251b8.svg"/></a>
        </div>
        <div className="mt-4 flex flex-1 justify-end">
          <div className="flex items-start gap-4 text-center text-sm font-medium"><a
            className="flex h-8 w-44 cursor-pointer items-center gap-3 rounded-2xl bg-white p-2 text-black"><img
            src="/images/icons/person.svg" alt="person" width="20" height="20"/>Sign In/Sign Up</a></div>
        </div>
      </div>
      <div className="2lg:content z-20 hidden items-center justify-center 2lg:flex"><a className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white font-medium" rel="noopener noreferrer" target="_self" href="/">Home</a><a
        className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white border-b-4 border-b-white font-bold" rel="noopener noreferrer" target="_self"
        href="/lich-trinh">Schedule</a><a className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white font-medium" rel="noopener noreferrer" target="_self" href="/tra-cuu-ve">Manage
        Booking</a><a className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white font-medium" rel="noopener noreferrer" target="_self" href="/tin-tuc">News</a><a
        className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white font-medium" rel="noopener noreferrer" target="_blank"
        href="https://hoadon.futabus.vn/#/tracuuhoadon/tracuu">Invoice</a><a className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white font-medium" rel="noopener noreferrer" target="_self" href="/lien-he">Contact</a><a
        className="mx-2 w-32 pb-3 text-center text-sm uppercase text-white
      hover:font-bold hover:text-white font-medium" rel="noopener noreferrer" target="_self" href="/ve-chung-toi">About
        us</a></div>
      <div className="header flex flex-col 2lg:hidden">
        <div className="flex">
          <div className="flex flex-1 items-center justify-between pt-4">
            <div className="flex"><label className="hamb" htmlFor="side-menu"><span
              className="hamb-line"></span></label>
              <div className="ant-dropdown-trigger flex cursor-pointer items-center"><img src="/images/icons/eng.svg"
                                                                                          width="26"
                                                                                          alt="language icon"/></div>
            </div>
            <a href="/"><img alt="logo_banner" loading="lazy" width="115" height="36" decoding="async" data-nimg="1"
                             style="color:transparent" src="/_next/static/media/logo_banner_mb.6e0db6f9.svg"/></a>
            <div className="mr-5"><img alt="avatar" loading="lazy" width="28" height="28" decoding="async" data-nimg="1"
                                       style="color:transparent" src="/_next/static/media/person.abc5e83c.svg"/></div>
          </div></div>
        <div className="collapse-menu-wrapper">
          <div className="fixed left-0 top-0 z-50 h-full w-full bg-[rgba(0,0,0,0.4)] hidden"></div>
          <div className="fixed left-[-60%] top-0 z-50 h-full w-[60%] overflow-y-auto bg-white p-2 duration-200 ">
            <div className="mb-4 w-full"><a className="block pl-1" href="/"></a></div>
            <a className="mb-3 flex">
              <button className="rounded-ful text-md px-2 text-orange">Sign In/Sign Up</button>
            </a>
            <nav className="nav-header">
              <ul className="list-none">
                <li className=" border-t border-slate-200 px-2 py-3 text-xs "><a target="_self" href="/">Home</a></li>
                <li className="text-orange border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a
                  target="_self" href="/lich-trinh">Schedule</a></li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/tra-cuu-ve">Manage
                  Booking</a></li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/tin-tuc">News</a>
                </li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_blank"
                                                                                                     href="https://hoadon.futabus.vn/#/tracuuhoadon/tracuu">Invoice</a>
                </li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/lien-he">Contact</a>
                </li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/ve-chung-toi">About
                  us</a></li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs "><a target="_self"
                                                                                 href="https://vieclam.futabus.vn/">Recruitment</a>
                </li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/danh-sach-chi-nhanh">Office
                  network</a></li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_blank"
                                                                                                     href="/dieu-khoan-su-dung">Terms
                  of service</a></li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/hoi-dap">FAQ</a>
                </li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/huong-dan-dat-ve-tren-web">Booking
                  guide Web</a></li>
                <li className=" border-t border-slate-200 px-2 py-3 text-xs 2lg:border-slate-200"><a target="_self"
                                                                                                     href="/huong-dan-nap-tien-tren-app">Booking
                  guide App</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
)
}