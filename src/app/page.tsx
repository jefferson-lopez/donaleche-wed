/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import donaleche_products from "@/data/donaleche_products.json";

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
      <div className="grid lg:grid-cols-3">
        <div className="max-lg:hidden bg-secondary/30 flex items-end">
          <img src="/donaleche/doñalechebaca.png" alt="Doña Leche" />
        </div>
        <div className="h-[400px] lg:h-[500px] max-lg:relative xl:h-full text-white bg-primary w-full">
          <div className="w-full relative z-10 flex items-center h-full gap-5 flex-col justify-center">
            <div className="flex px-5 max-w-[500px] flex-col items-center">
              <span className="uppercase font-light">Doña Leche</span>
              <h1 className="text-4xl sm:text-5xl text-balance text-center font-semibold">
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
        <div className="flex max-lg:hidden flex-col bg-secondary">
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
        <h2 className="text-2xl font-semibold md:text-3xl text-center">
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
      <div className="flex bg-primary px-10 flex-col items-center gap-10 justify-center py-20 w-full">
        <h2 className="text-2xl text-white font-semibold md:text-3xl text-center">
          Los Favoritos
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {FAVORITOS.map((product) => {
            return (
              <div
                key={product.title}
                className="flex flex-col bg-white aspect-square rounded-lg justify-center items-center gap-3 pb-5"
              >
                <img
                  className="w-32 h-32 rounded-md"
                  src={product.image_url_1}
                  alt={product.title}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="uppercase text-muted-foreground text-xs">
                    {product.collection}
                  </span>
                  <p className="font-medium text-balance max-w-[180px] text-center">
                    {product.title}
                  </p>
                  <div className="flex gap-1 items-center">
                    <span className="text-muted-foreground">Desde</span>
                    <strong>{product.price.replace("Desde", "")}</strong>
                  </div>
                </div>
                <Button>Agregar al carrito</Button>
              </div>
            );
          }).reverse()}
        </div>
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
            <h2 className="text-xl font-semibold md:text-3xl">
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

      <div className="relative px-10 grid md:grid-cols-2 items-center gap-10 justify-center py-10 pb-32 overflow-hidden bg-secondary/30 w-full">
        <img
          className="absolute object-cover bottom-0 aspect-square"
          src="/donaleche/Bg_decoracion_Dona_Leche_1920x.webp"
          alt="Aprende con nosotros"
        />
        <div className="flex relative z-10 flex-col items-center gap-5 justify-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl text-center">
              Aprender con nosotros
            </h2>
            <p className="text-center">Conoce todas la recetas de Doña Leche</p>
          </div>
          <Button size="lg" className="w-fit rounded-full">
            Ver Resetas
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
            <h2 className="text-2xl font-semibold md:text-3xl text-center">
              Descubre quienes somos
            </h2>
            <p className="text-center max-w-[500px] text-balance">
              Empresa láctea en el corazón lechero de Ubaté, Cundinamarca, donde
              tradición y tecnología sostenible se unen para ofrecerte tus
              productos lácteos favoritos con calidad excepcional.
            </p>
          </div>
          <Button size="lg" className="w-fit rounded-full">
            Conocenos
          </Button>
        </div>
      </div>

      <div className="relative md:h-[200px]  px-10 bg-secondary grid gap-10 py-10 w-full">
        <div className="flex relative z-10 flex-col justify-center items-center text-center h-full gap-3 md:gap-5">
          <div>
            <h2 className="text-xl font-semibold md:text-3xl">
              Siguenos en nuestras Redes
            </h2>
            <p className="text-center text-sm md:text-base">
              Aplica solo para domicilios en la zona norte de Bogotá
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
  );
}
