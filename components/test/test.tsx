import ProvincePicker from "@/components/province/province-picker";

export default function Test() {
  return (
    <div>
      <div>
        <div className={'relative'}>
          <div className={'absolute'}>
            <ProvincePicker />
          </div>

        </div>

      </div>
      <div className="relative flex w-full justify-center">
        <button
          className="absolute z-10 h-12 rounded-full bg-orange-600 px-20 text-base text-white transition duration-200">
          Tìm chuyến xe
        </button>
      </div>
    </div>

)
}