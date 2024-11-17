/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import donaleche_products from "@/data/donaleche_products.json";
import { ArrowUpRight, Heart, ShoppingCart } from "lucide-react";

const CATEGORIAS = [
  {
    name: "Leches",
    url: "/donaleche/Leches_Dona_Leche.webp",
  },
  {
    name: "Quesos",
    url: "/donaleche/Quesos_Dona_Leche.webp",
  },
  {
    name: "Kumis",
    url: "/donaleche/Kumis_Dona_Leche.webp",
  },
  {
    name: "Yogurts",
    url: "/donaleche/Yogurt_Dona_Leches.webp",
  },
  {
    name: "Avenas",
    url: "/donaleche/Avena_Dona_Leche.webp",
  },
  {
    name: "Todos los Productos",
    url: "/donaleche/Todos_los_productos_Dona_Leche.webp",
  },
];
const FAVORITOS = donaleche_products.filter((product) =>
  [
    "CAMPESINO",
    "CAMPESINO SLIM",
    "KUMIS GARRAFA",
    "LECHE UHT ENTERA ACHOCOLATADA",
  ].includes(product.title)
);

export default function page() {
  return (
    <div className="w-full flex-col flex">
      <div className="grid md:h-[calc(100dvh-174px)] lg:grid-cols-4">
        <div className="max-lg:hidden col-span-1 bg-secondary flex items-end">
          <img src="/donaleche/doñalechebaca.png" alt="Doña Leche" />
        </div>
        <div className="max-md:h-[500px] col-span-2 max-lg:relative xl:h-full text-white bg-primary w-full">
          <div className="w-full relative z-10 flex items-center h-full gap-5 flex-col justify-center">
            <div className="flex py-5 px-5  max-w-[500px] flex-col items-center">
              <span className="uppercase font-light">Doña Leche</span>
              <h1 className="text-5xl sm:text-6xl tracking-tight text-balance text-center font-bold">
                Tu pedido fresco, directo a casa.
              </h1>
              <span className="text-sm px-10 text-center">
                Tenemos cobertura en la zona norte de Bogotá.
              </span>
            </div>
            <div className="flex max-md:flex-col items-center gap-3">
              <Button size="lg" className="rounded-full" variant={"secondary"}>
                Pide Tu Domicilo
              </Button>
              <Button
                size="lg"
                className="rounded-full text-white"
                variant={"link"}
              >
                ¿Donde Comprar?
              </Button>
            </div>
          </div>
          <div className="h-full absolute left-0 bottom-0 flex items-end justify-start w-full lg:hidden">
            <img
              className="w-64 brightness-90 relative right-28"
              src="/donaleche/doñalechebaca.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex col-span-1 max-lg:hidden flex-col bg-secondary">
          <img
            className="h-full object-cover"
            src="/donaleche/doñaleche-comida.svg"
            alt=""
          />
          <div className="h-[140px] uppercase flex-col md:text-3xl font-extrabold text-primary bg-secondary flex justify-center px-5 pt-5 rounded-t-md relative bottom-2">
            <span>Nuestros</span>
            <span>Prodcutos</span>
          </div>
        </div>
      </div>
      <div className="flex px-10 flex-col items-center gap-10 justify-center py-20 w-full">
        <h2 className="text-3xl font-bold md:text-4xl text-center">
          Categorias
        </h2>
        <div className="grid max-w-[700px] grid-cols-3 gap-5 md:gap-10">
          {CATEGORIAS.map(({ name, url }) => {
            return (
              <div
                key={name}
                className="flex aspect-square flex-col bg-secondary/50 rounded-xl max-w-[150px] gap-3 items-center justify-center px-5"
              >
                <img className="w-10 md:w-16" src={url} alt={name} />
                <span className="text-center">{name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex px-10 flex-col bg-secondary/30 items-center gap-10 justify-center py-20 w-full">
        <h2 className="text-3xl font-bold md:text-4xl text-center">
          Certificados
        </h2>
        <img
          src="/donaleche/Certificados_Dona_Leche.webp"
          alt="Certificados_Dona_Leche"
        />
      </div>

      <div className="flex bg-primary flex-col items-center gap-10 justify-center py-20 w-full">
        <h2 className="text-3xl px-10 font-bold md:text-4xl text-center text-white">
          Los Favoritos
        </h2>
        <ScrollArea className="w-full xl:px-10">
          <div className="flex w-full justify-start xl:justify-center gap-5">
            {FAVORITOS.map((product) => (
              <div
                key={product.title}
                className="min-w-[300px] max-xl:first:ml-10 max-xl:last:mr-10 w-[300px] pt-4 relative bg-white flex flex-col items-center rounded-lg shadow-md overflow-hidden"
              >
                <div className="absolute right-0 top-0 p-2">
                  <Button size="icon" className="w-8 h-8" variant="ghost">
                    <Heart />
                  </Button>
                </div>
                <img
                  className="w-[50%] h-auto rounded-t-lg"
                  src={product.image_url_1}
                  alt={product.title}
                />
                <div className="px-4 flex flex-col justify-between h-full w-full">
                  <div>
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                    <div className="flex mt-2 mb-4 items-center">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-3 h-3 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                        <svg
                          className="w-3 h-3 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 ml-2">
                        5.0
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {product.price.replace("Desde", "")}
                    </span>
                  </div>
                  <div className="mt-auto py-3">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full rounded-full"
                    >
                      Agregar <ShoppingCart className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            )).reverse()}
            <div className="p-5 md:hidden"></div>
            <ScrollBar className="h-0" orientation="horizontal" />
          </div>
        </ScrollArea>
        <Button variant="link" className="text-white">
          Ver todos los productos <ArrowUpRight />
        </Button>
      </div>

      <div className="relative md:h-[300px] px-10 md:px-20 grid md:grid-cols-2 gap-10 py-10 pb-0 w-full">
        <div className="w-full h-full max-md:row-start-2 flex items-end justify-center">
          <img
            className="w-[200px] md:w-[350px]"
            src="/donaleche/doñaleche-baca-desc.svg"
            alt="Desc"
          />
        </div>
        <div className="flex relative z-10 flex-col justify-center items-center text-center h-full gap-3 md:gap-5">
          <div>
            <h2 className="text-3xl font-bold text-balance md:text-4xl text-center">
              5% OFF En Tu Primera Compra
            </h2>
            <p className="text-center text-sm md:text-base">
              Aplica solo para domicilios en la zona norte de Bogotá
            </p>
          </div>
          <Button size="lg" className="w-fit rounded-full">
            Comprar ahora
          </Button>
        </div>
      </div>

      <div className="relative px-10 grid md:grid-cols-2 items-center gap-10 justify-center py-10 overflow-hidden bg-secondary/30 w-full">
        <div className="flex relative z-10 flex-col items-center gap-5 justify-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl text-center">
              Aprende con nosotros
            </h2>
            <p className="text-center">Conoce todas la recetas de Doña Leche</p>
          </div>
          <Button size="lg" className="w-fit rounded-full">
            Ver Recetas
          </Button>
        </div>
        <div className="flex relative z-10 items-center justify-center">
          <img
            className="aspect-square w-[500px]"
            src="https://donaleche.com/cdn/shop/files/Aprende_con_nosotros_Mobile_Dona_Leche.png?v=1715712513"
            alt="Aprende con nosotros"
          />
        </div>
      </div>

      <div className="relative px-20 grid md:grid-cols-2 items-center gap-10 justify-center py-20 overflow-hidden w-full">
        <div className="relative">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/jfGgzeUhvqc?si=J4a6wNSelA0Doq8Z"
            thumbnailSrc="https://i.ytimg.com/vi_webp/jfGgzeUhvqc/maxresdefault.webp"
            thumbnailAlt="Doña Leche Quienes Somos"
          />
        </div>
        <div className="flex relative z-10 flex-col items-center gap-5 justify-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl text-center">
              Descubre quienes somos
            </h2>
            <p className="text-center max-w-[500px] text-balance">
              Lácteos de calidad excepcional, con tradición y tecnología
              sostenible, desde el corazón de Ubaté.
            </p>
          </div>
          <Button size="lg" className="w-fit rounded-full">
            Conocenos
          </Button>
        </div>
      </div>

      <div className="md:px-10">
        <div className="relative md:rounded-full px-10 bg-secondary grid gap-10 py-10 w-full">
          <div className="flex relative z-10 flex-col justify-center items-center text-center h-full gap-3 md:gap-5">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl text-center">
                Siguenos en nuestras Redes
              </h2>
              <p className="text-center max-w-[500px] text-sm md:text-base">
                Conéctate con nosotros en redes sociales para conocer nuestras
                promociones y novedades en productos lácteos frescos.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/donalechebogota/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="fill-primary w-12"
                    src="/donaleche/facebook.svg"
                    alt="Facebook Doña Leche"
                  />
                </a>
                <a
                  href="https://www.instagram.com/donalechebogota/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="fill-primary w-10"
                    src="/donaleche/instagram.svg"
                    alt="Instagram Doña Leche"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[600px] md:min-h-[500px] px-10 md:px-20 grid md:grid-cols-2 gap-10 py-10 pb-0 w-full">
        <div className="w-full h-full max-md:row-start-2 flex items-end justify-center">
          <img
            className="w-[400px]"
            src="/donaleche/doñaleche-mercado.png"
            alt="Desc"
          />
        </div>
        <div className="flex relative z-10 flex-col justify-center items-center text-center h-full gap-3 md:gap-5">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl text-balance text-center">
              Compra tu mercado lácteo con nosotros
            </h2>
            <p className="text-center text-balance text-sm md:text-base">
              Haz tu pedido de productos lácteos frescos y recíbelos en la
              comodidad de tu hogar en poco tiempo.
            </p>
          </div>
          <Button size="lg" className="w-fit rounded-full">
            Pide Tu Domicilio
          </Button>
        </div>
      </div>
    </div>
  );
}
