import Image from 'next/image'

export default function Overview() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-[1356px]">
        <div className="mb-12">
          <p
            data-reveal
            className="mb-2 text-[26px] font-bold uppercase text-[#8574ac]"
          >
            Overview
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <h2
              data-reveal
              data-reveal-delay="150"
              className="font-gowun text-[32px] font-normal leading-[45px] text-[#5c4b42]"
            >
              소중한 관계의 마지막까지
              <br />
              존중받을 수 있도록
            </h2>

            <div
              data-reveal
              data-reveal-delay="300"
              className="text-[18px] leading-[27px] text-[#5c4b42] lg:text-right"
            >
              <p>
                반려동물과의 이별은 단순히 하나의 순간으로 끝나지 않습니다.
              </p>
              <p>
                함께한 시간을 돌아보고, 마지막을 준비하고,
                이별 이후의 시간을 받아들이는 과정까지 이어집니다.
              </p>
              <p>
                Dear By Pet은 이 모든 과정에서 보호자가 혼자 고민하지 않기를
                바라며 시작되었습니다.
              </p>
            </div>
          </div>
        </div>

        <Image
          data-reveal
          src="/images/m_overview_01.jpg"
          alt="해 질 녘 야외 배경 앞에 나란히 서 있는 두 마리의 개. 왼쪽에는 입을 벌리고 있는 코기 종이, 오른쪽에는 털이 긴 테리어 종이 있습니다."
          width={750}
          height={500}
          className="block md:hidden h-[300px] w-full rounded-[20px] object-cover"
        />
        <Image
          data-reveal
          src="/images/overview_01.jpg"
          alt="해 질 녘 야외 배경 앞에 나란히 서 있는 두 마리의 개. 왼쪽에는 입을 벌리고 있는 코기 종이, 오른쪽에는 털이 긴 테리어 종이 있습니다."
          width={1356}
          height={600}
          className="hidden md:block h-[600px] w-full rounded-[20px] object-cover"
        />
      </div>
    </section>
  );
}