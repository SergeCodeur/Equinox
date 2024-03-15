const SvgOrange = ({
  className,
  viewBox,
}: {
  className?: string;
  viewBox?: string;
}) => {
  return (
    <svg
      className={`w-[1153px] h-[1153px] ${className}`}
      viewBox={viewBox ? viewBox : "0 0 1153 1153"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_f_138_2159)">
        <circle cx="576.5" cy="576.5" r="254.5" fill="#9D65EA" />
      </g>
      <g opacity="0.8" filter="url(#filter1_f_138_2159)">
        <circle cx="577.251" cy="577.251" r="213.251" fill="#F2860A" />
      </g>
      <defs>
        <filter
          id="filter0_f_138_2159"
          x="0.878601"
          y="0.878601"
          width="1151.24"
          height="1151.24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="160.561"
            result="effect1_foregroundBlur_138_2159"
          />
        </filter>
        <filter
          id="filter1_f_138_2159"
          x="94.9258"
          y="94.9258"
          width="964.65"
          height="964.65"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="134.537"
            result="effect1_foregroundBlur_138_2159"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgOrange;
