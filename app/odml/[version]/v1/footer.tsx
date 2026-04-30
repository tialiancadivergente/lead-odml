import Image from "next/image";

export default function Footer() {
    return (
        <div
            className="
                bg-[#031B22]
                bg-[url('/images/odml/v1/bg_rodape_mobile.webp')]
                md:bg-[url('/images/odml/v1/bg_rodape_desktop.webp')]
                bg-no-repeat
                bg-center
                bg-cover
                py-[100px]
            "
        >
            <footer
                className="
                    container mx-auto
                    sm:px-4
                    lg:w-[1080px]

                    flex flex-col
                    items-center
                    gap-6

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    lg:gap-0
                "
            >
                {/* ESQUERDA (DESKTOP) / TOPO (MOBILE) */}
                <div className="font-raleway text-[14px] text-white text-center lg:text-left">
                    <p>© 2026 O Despertar da Mulher Livre.</p>
                    <p>Todos os direitos reservados.</p>
                </div>

                {/* LOGO (CENTRO NO DESKTOP) */}
                <Image
                    src="/images/odml/v1/logo-alianca.png"
                    alt="Logomarca Aliança Divergente"
                    width={165}
                    height={32}
                    priority
                    className="object-contain md:w-[220px] w-[260px]"
                />

                {/* DIREITA (DESKTOP) / BASE (MOBILE) */}
                <div className="flex flex-col items-center lg:items-end gap-1 text-white text-[14px] font-raleway text-center lg:text-right">
                    
                    <p className="leading-tight">
                        CNPJ nº 48.424.807/0001-88
                    </p>

                    <p className="leading-tight">
                        <a
                            href="https://www.aliancadivergente.com.br/politicas-de-privacidade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Política de privacidade
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a
                            href="#"
                            className="hover:underline"
                        >
                            Termos de uso
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}