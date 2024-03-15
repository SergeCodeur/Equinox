import UserProfile from "@/assets/images/user.png";
import Marquee from "react-fast-marquee";
import { TestimonialsCard } from "../ui/card";

const testimonialsBloc1 = [
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
];
const testimonialsBloc2 = [
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
  {
    name: "André Roux",
    userSince: "6m mois",
    profil: UserProfile.src,
    profilWidth: 42,
    profilHeight: 42,
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum cras volutpat urna auctor interdum. Tellus aliquet gravida feugiat hendrerit nullam posuere. Cursus nunc diam tortor eget nisi dui quis consectetur. Diam pharetra est tempor viverra.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="pt-[88px] pb-[122px] space-y-[43px] relative z-10"
      id="testimonials"
    >
      <h2 className="text-transparent bg-clip-text bg-gradiant-195 text-5xl-600 tracking-[-0.96px] text-center">
        Témoignages de nos utilisateurs
      </h2>
      <div className="space-y-[26px]">
        <Marquee direction="right" pauseOnHover={true}>
          {testimonialsBloc1.map((testimonials, index) => (
            <TestimonialsCard
              className="mr-[22px]"
              key={index}
              {...testimonials}
            />
          ))}
        </Marquee>
        <Marquee direction="left" pauseOnHover={true}>
          {testimonialsBloc2.map((testimonials, index) => (
            <TestimonialsCard
              className="mr-[22px]"
              key={index}
              {...testimonials}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
