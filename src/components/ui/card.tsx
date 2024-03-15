import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export interface TestimonialsCardProps {
  className?: string;
  name: string;
  userSince: string;
  profil: string;
  profilWidth: number;
  profilHeight: number;
  description: string;
}

export const TestimonialsCard = React.forwardRef<
  HTMLDivElement,
  TestimonialsCardProps
>(
  (
    {
      className,
      name,
      userSince,
      profil,
      profilWidth,
      profilHeight,
      description,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "py-[41px] px-12 flex flex-col rounded-[14px] gap-6 bg-secondary border border-white/10 max-w-[554px] w-full",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-[25px]">
        <Image
          className="w-[49px] h-[49px] rounded-full"
          src={profil}
          alt=""
          width={profilWidth}
          height={profilHeight}
        />
        <span className="flex flex-col items-start gap-[9px]">
          <span className="text-lg-500 text-white leading-[25.5px] tracking-[-0.48px]">
            {name}
          </span>
          <span className="text-sm-300 text-white">
            Utilisateur depuis {userSince}
          </span>
        </span>
      </div>
      <p className="text-white/50 text-base leading-[26.56px]">{description}</p>
    </div>
  )
);
TestimonialsCard.displayName = "TestimonialsCard";
