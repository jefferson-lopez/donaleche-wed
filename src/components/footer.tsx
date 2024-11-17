import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/30 px-4 py-8 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Contact Section */}
          <div className="space-y-4">
            <Image
              src="/donaleche/Logo_Dona_Leche.webp"
              alt="Doña Leche Logo"
              width={180}
              height={180}
              className="mb-4"
            />
            <div className="space-y-2 text-sm">
              <p>Bogotá, Colombia.</p>
              <p>
                Llámanos:{" "}
                <Link
                  href="tel:+573216599870"
                  className="text-green-700 hover:underline"
                >
                  +57 321 659870
                </Link>
              </p>
              <p>
                PQRS:{" "}
                <Link
                  href="mailto:servicioalcliente@donaleche.com"
                  className="text-green-700 hover:underline"
                >
                  servicioalcliente@donaleche.com
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:mercadeo@donaleche.com"
                  className="text-green-700 hover:underline"
                >
                  mercadeo@donaleche.com
                </Link>
              </p>
            </div>
          </div>

          {/* Locations Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-800">
              NUESTRAS SEDES
            </h3>
            <ul className="space-y-2">
              {[
                "Toberín",
                "Suba",
                "Margarita",
                "Bulevar",
                "Pijaos",
                "Ubaté",
                "Unicentro",
                "Niza",
              ].map((location) => (
                <li key={location}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-700 hover:underline"
                  >
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-800">
              PIDE TU DOMICILIO
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Conoce nuestra tienda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Pide por WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-800">
              APARTADO LEGAL
            </h3>
            <ul className="space-y-2">
              {[
                "Preguntas frecuentes",
                "Políticas de envío",
                "Políticas de devoluciones",
                "Términos y condiciones",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-700 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-green-800/10">
        <div className="container mx-auto">
          <p className="py-4 text-sm text-gray-600">
            © {new Date().getFullYear()} Doña Leche | Desarrollado por 2OS
          </p>
        </div>
      </div>
    </footer>
  );
}
