import Logo from "@/components/ui/Logo";

const SignUp = () => {
  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden relative">
      <div className="max-w-[485px] w-full bg-secondary flex flex-col items-start relative">
        <Logo className="h-7 mt-7 ml-6" />
        <div className="mt-[110px] ml-[125px]">
          <h2 className="mb-2 text-[32px] font-semibold text-white">
            S&apos;inscrire
          </h2>
          <h3 className="text-white text-sm">Commencez dès maintenant.</h3>
        </div>
        {/* <SignUpForm /> */}
      </div>
      {/* <svg
        width="577"
        height="100%"
        viewBox="0 0 577 832"
        fill="none"
        className="absolute z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="288.5" cy="415.5" rx="288.5" ry="722.5" fill="#04081A" />
        <path
          d="M576.5 415.5C576.5 614.966 544.215 795.525 492.036 926.199C465.946 991.538 434.891 1044.38 400.434 1080.88C365.977 1117.38 328.151 1137.5 288.5 1137.5C248.849 1137.5 211.023 1117.38 176.566 1080.88C142.109 1044.38 111.054 991.538 84.964 926.199C32.7847 795.525 0.5 614.966 0.5 415.5C0.5 216.034 32.7847 35.4751 84.964 -95.1992C111.054 -160.538 142.109 -213.38 176.566 -249.879C211.023 -286.377 248.849 -306.5 288.5 -306.5C328.151 -306.5 365.977 -286.377 400.434 -249.879C434.891 -213.38 465.946 -160.538 492.036 -95.1992C544.215 35.4751 576.5 216.034 576.5 415.5Z"
          stroke="url(#paint0_linear_100_1172)"
          strokeOpacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_100_1172"
            x1="551.5"
            y1="23"
            x2="557"
            y2="816"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="0.483117" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}
      <div className="flex-1"></div>
    </div>
  );
};

export default SignUp;
