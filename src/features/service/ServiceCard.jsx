import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";
import Link from "next/link";
import Image from "next/image";
function ServiceCard({ menu, index }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <Link
      href={`/service?category=${encodeURIComponent(menu.type)}`}
      ref={elementRef}
      className={appearUp(isVisible, "rounded-lg overflow-hidden bg-white max-w-[360px] hover:shadow-card-lg hover:translate-y-[-2px] hover:duration-500")}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <Image
          src={menu.image}
          alt={`${menu.name} Image`}
          height={240}
          width={360}
          className="object-cover"
        />
      </div>
      <div className="min-h-[240px] flex flex-col justify-between">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">{menu.type}</h4>
            <p
              className={`w-20 text-xs border-2 rounded-lg flex justify-center py-[2px] ${
                menu.status === '受付停止中' ? 'border-red-600' : 'border-taggreen'
              }`}
            >
              {menu.status}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">{menu.description}</p>
          </div>
          <div>
            <ul className="list-disc list-inside">
              {menu.detail.map((content, index) => (
                <li key={index} className="text-sm" style={{ whiteSpace: 'pre-line' }}>
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-4 mb-4 text-xs">VIEW MORE</button>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
