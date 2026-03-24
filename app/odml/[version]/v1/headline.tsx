import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

const subHeadline = (
  <div>
    <p className="md:hidden">
      E o caminho para se tornar uma MULHER LIVRE: prosperar, construir uma
      vida estável e ter um relacionamento saudável, sem carregar o mundo
      nas costas.
    </p>

    <div className="hidden md:block">
      <p>E o caminho para se tornar uma MULHER LIVRE:</p>
      <p>prosperar, construir uma vida estável e ter um relacionamento</p>
      <p>saudável, sem carregar o mundo nas costas.</p>
    </div>

    <p className="mt-2 text-[#C0964B] font-bold">
      Faça sua inscrição gratuita
    </p>
  </div>
);

export const Headline: IHeadline[] = [
  {
    id: "h0",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral text-[#D3CAC0] font-extrabold leading-tight tracking-normal">
        Em apenas 1 dia,{" "}
        descubra{" "}
        <span className="whitespace-nowrap">
          como seus relacionamentos
        </span>{" "}
        estão travando sua vida financeira...
      </p>
    ),
    text: subHeadline,
  },

  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral text-[#D3CAC0] font-extrabold leading-tight tracking-normal">
        Aprenda a identificar os{" "}
        relacionamentos que estão{" "}
        limitando sua conta{" "}
        bancária.
      </p>
    ),
    text: subHeadline,
  },

  {
    id: "h2",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral text-[#D3CAC0] font-extrabold leading-tight tracking-normal">
        Identifique e rompa os{" "}
        padrões que estão travando{" "}
        os seus relacionamentos{" "}
        e a sua vida financeira.
      </p>
    ),
    text: subHeadline,
  },
];