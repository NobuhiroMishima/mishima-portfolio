import Headline from "@/components/elements/title/Headline";
import { servicecontent } from "@/features/service/constants/servicecontent";
import "../../../app/rotateCard.css";
import { serviceoption } from "@/features/service/constants/serviceoption";
import RelatedServices from "@/features/service/RelatedServices";
import PageTransitionButton from "@/components/elements/button/PageTransitionButton";

async function PlanDetail({ params }) {
  const { planId } = await params;

  const plan = servicecontent.find((plan) => plan.id == planId);
  if (!plan) {
    notFound();
  }

  // 現在のサービスを取得するロジック
  const currentService = servicecontent.find(service => service.id === parseInt(planId));

  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse items-start mb-12">
          <Headline title={plan.catch} subtitle={plan.subcatch} />
        </div>
        <div className="flex flex-col gap-20 mb-40">
          <div className="flex flex-col lg:flex-row gap-x-20 gap-y-5 items-center lg:items-start">
            <div className="max-lg:order-2">
              <img
                src={plan.mainimage}
                alt={`${plan.name} Image`}
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col items-center flex-1 gap-6 max-lg:order-1">
              <h5 className="relative w-[300px] sm:w-[480px] sm:h-[88px] px-4 sm:px-12 pt-8 pb-6 text-2xl border border-black before:absolute before:top-2 before:left-2 before:w-[300px] before:sm:w-[480px] before:h-[88px] before:bg-boxblue before:-z-10">
                {plan.name}
              </h5>
              <div>
                <p style={{ whiteSpace: 'pre-line' }}>{plan.plandescription}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-28 gap-y-5 items-start">
            <h4 className="w-24 font-bold text-2xl">基本料金</h4>
            <div className="flex flex-col gap-y-3">
              <p className="flex-1 text-2xl">{`${plan.minprice.toLocaleString()}円～（料金はサイトによって変動します。）`}</p>
              <div>
              {plan.pricesupport.map((sentence) => (
                <p>{`・${sentence}`}</p>
              ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-14">
            <h4 className="w-full font-bold text-2xl">
              本プラン限定！料金ご負担なしの3つのサービス
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 place-items-center">
              {plan.freeoption.map((opt) => {
                const option = serviceoption.find((so) => so.name === opt);
                return (
                  <div className="flip-card w-80 h-80">
                    <div className="flip-inner relative w-full h-full">
                      <div className="flip-face bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg flex flex-col items-center justify-center">
                        <div className="text-center">
                          <div className="text-white w-40 h-40 mx-auto rounded-full flex items-center justify-center">
                            <img src={option.image} alt="" />
                          </div>
                          <h4 className="text-xl font-bold mb-12">
                            {option.name}
                          </h4>
                          <span className="block h-1 w-40 mx-auto bg-taggreen"></span>
                        </div>
                      </div>
                      <div className="flip-face back-face bg-gray-200 border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mt-2 leading-relaxed text-center">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mb-20">
          <RelatedServices currentService={currentService} />
        </div>
        <div className="flex justify-center">
          <PageTransitionButton
            page={"service"}
            textcolor={"black"}
            bgcolor={"white"}
            text={"一覧に戻る"}
          />
        </div>
      </div>
    </section>
  );
}

export default PlanDetail;
