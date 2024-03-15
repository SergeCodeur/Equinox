import Image from "next/image";
import twentyMinutes from "../../../public/20-min.png";
import doctissimo from "../../../public/doctissimo.png";
import forbes from "../../../public/forbes.png";
import health from "../../../public/health.png";
import nhi from "../../../public/nhi.png";
import MaxWidthContainer from "../MaxWidthContainer";

const partenaires = [
  {
    logo: health,
    width: 122,
    height: 44,
  },
  {
    logo: twentyMinutes,
    width: 77,
    height: 77,
  },
  {
    logo: doctissimo,
    width: 235,
    height: 66,
  },
  {
    logo: forbes,
    width: 200,
    height: 70,
  },
  {
    logo: nhi,
    width: 83,
    height: 74,
  },
];

const PartenairesSection = () => {
  return (
    <section className="bg-secondary relative z-20">
      <MaxWidthContainer className="pt-[55px] space-y-[35px]">
        <h3 className="text-neutral-400 text-xl text-center">
          Ils parlent de nous et de notre application
        </h3>
        <div className="flex items-center gap-[52px] w-full justify-center">
          {partenaires.map((partenaire, index) => {
            return (
              <Image
                key={index}
                src={partenaire.logo}
                alt=""
                width={partenaire.width}
                height={partenaire.height}
              />
            );
          })}
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default PartenairesSection;
