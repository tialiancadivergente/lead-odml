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
      <p className="uppercase font-spectral text-[#D3CAC0] font-extrabold">
        Em apenas 1 dia, descubra
        <br className="hidden md:block" />
        como seus relacionamentos
        <br className="hidden md:block" />
        estão travando sua vida
        <br className="hidden md:block" />
        financeira...
      </p>
    ),
    text: subHeadline,
  },

  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral text-[#D3CAC0] font-extrabold">
        Aprenda a identificar os relacionamentos
        <br className="hidden md:block" />
        que estão limitando sua conta bancária.
      </p>
    ),
    text: subHeadline,
  },

  {
    id: "h2",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral text-[#D3CAC0] font-extrabold">
        Identifique e rompa os
        <br className="hidden md:block" />
        padrões que estão travando
        <br className="hidden md:block" />
        os seus relacionamentos
        <br className="hidden md:block" />
        e a sua vida financeira.
      </p>
    ),
    text: subHeadline,
  },
];