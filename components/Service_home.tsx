const services = [
  {
    label: "Coming Soon",
    title: "펫로스 상담 지원",
    description:
      "혼자 감당하기 어려운 마음, 펫로스 상담사와 나눌 수 있도록 준비하고 있습니다.",
    image: "/images/service-counseling.png",
    imageAlt: "펫로스 상담 지원",
  },
  {
    label: "Coming Soon",
    title: "펫보험, 장례지도사 연결",
    description:
      "혼자 준비하기 어려운 순간, 전문가와 연결할 수 있도록 준비하고 있습니다.",
    image: "/images/service-expert.png",
    imageAlt: "펫보험 및 장례지도사 연결",
  },
  {
    label: "Coming Soon",
    title: "메모리얼 제작 & 드림",
    description:
      "소중한 추억을 오래도록 간직할 수 있도록 준비하고 있습니다.",
    image: "/images/service-memorial.png",
    imageAlt: "메모리얼 제작",
  },
];

export default function Service() {
  return (
    <section className="relative w-full px-6 py-20">
      {/* 상단 배경: 높이 504px */}
      <div className="absolute inset-x-0 top-0 h-[504px] overflow-hidden">
        <img
          src="/images/service_01.jpg"
          alt=""
          className="block h-full w-full object-cover"
        />

        {/* 갈색 딤 */}
        <div className="absolute inset-0 bg-[#412826]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1356px]">
        <div className="mb-16 text-white">
          <p
            data-reveal
            className="mb-2 text-[26px] font-bold"
          >
            Our Service
          </p>

          <h2
            data-reveal
            data-reveal-delay="150"
            className="font-gowun text-[32px] font-normal leading-[45px] text-[#ffffff]"
          >
            이별의 순간부터,
            <br />
            그 이후의 시간까지 함께합니다.
          </h2>

          <p
            data-reveal
            data-reveal-delay="300"
            className="mt-4 text-[18px] leading-[27px]"
          >
            반려동물과 보호자의 마음까지 살피는 케어 서비스,
            DearByPet이 준비하고 있습니다.
          </p>

<a
  href="/service"
  data-reveal
  data-reveal-delay="450"
  className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-5 py-2 text-[14px] text-white hover:bg-white hover:text-[#412826]"
>
  서비스 자세히 보기
</a>
        </div>

        <div className="grid gap-[30px] lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              data-reveal-delay={index * 150}
              className="min-h-[490px] rounded-[20px] bg-[#f4f0ed] p-8 text-center"
            >
              <p className="text-[19px] italic text-[#c8ab91]">
                {service.label}
              </p>

              <h3 className="mt-1 text-[32px] leading-[45px] text-[#5c4b42]">
                {service.title}
              </h3>

              <p className="mt-3 text-[17px] leading-[25px] text-[#5c4b42]">
                {service.description}
              </p>

              <img
                src={service.image}
                alt={service.imageAlt}
                className="mt-10 block h-[200px] w-full rounded-xl object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}