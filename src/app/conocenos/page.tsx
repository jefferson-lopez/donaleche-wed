import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Users } from "lucide-react";
import Image from "next/image";

export default function PageConocenos() {
  return (
    <div className="w-full">
      <section className="relative h-[450px] md:h-[500px] overflow-hidden">
        <div className="absolute px-4 md:px-20 inset-0 bg-primary">
          <div className="container relative h-full flex items-center">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-5xl font-bold tracking-tighter">
                SOMOS
                <span className="block text-6xl">Doña Leche</span>
              </h1>
              <p className="text-xl">
                Más de 30 años llevando los mejores productos lácteos a las
                familias colombianas
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground">
                Fundamos la marca Doña Leche en 1990, cuando lanzamos nuestra
                primera línea de leche pasteurizada, marcando el comienzo de
                nuestro compromiso con la calidad e innovación. Un año después,
                fuimos pioneros en el mercado colombiano al introducir la Leche
                Larga Vida UHT.
              </p>
              <p className="text-muted-foreground">
                Desempeñamos un papel crucial en el fortalecimiento de la
                economía de nuestro municipio, creando nuevas oportunidades de
                empleo y desarrollo para la comunidad local.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/donaleche/Somos-Dona-Leche-1.webp"
                alt="Planta de producción Doña Leche"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 px-4 md:px-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Sostenibilidad</h3>
              <p className="text-muted-foreground">
                Comprometidos con prácticas sostenibles y el cuidado del medio
                ambiente en todos nuestros procesos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Calidad</h3>
              <p className="text-muted-foreground">
                Productos de la más alta calidad, cumpliendo con todos los
                estándares nacionales e internacionales.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Comunidad</h3>
              <p className="text-muted-foreground">
                Generando empleo y desarrollo en nuestra comunidad,
                contribuyendo al crecimiento de la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="container">
          <div className="bg-green-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Conoce Nuestros Productos
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de productos lácteos, elaborados con
              los más altos estándares de calidad
            </p>
            <Button variant="secondary">
              Ver Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
