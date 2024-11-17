/* eslint-disable @next/next/no-img-element */
"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Heart, MapPin, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import donaleche_collection_avena from "@/data/donaleche_collection_avena.json";
import donaleche_collection_kumis from "@/data/donaleche_collection_kumis.json";
import donaleche_collection_leches from "@/data/donaleche_collection_leches.json";
import donaleche_collection_quesos from "@/data/donaleche_collection_quesos.json";
import donaleche_collection_yogurt from "@/data/donaleche_collection_yogurt.json";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mueslin de manzana con yogurt",
    href: "/docs/primitives/alert-dialog",
    description: "Desayunos",
  },
  {
    title: "Tomates Rellenos de Queso",
    href: "/docs/primitives/hover-card",
    description: "Almuerzos",
  },
  {
    title: "Fondue",
    href: "/docs/primitives/progress",
    description: "Cenas",
  },
  {
    title: "Jugos naturales y batidos",
    href: "/docs/primitives/scroll-area",
    description: "Snaks",
  },
];

export function NavigationMenuDemo() {
  return (
    <div>
      <Button asChild variant="ghost">
        <Link href={"/"}>Inicio</Link>
      </Button>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button variant="ghost">Categorias</Button>
        </HoverCardTrigger>
        <HoverCardContent className="md:w-[400px] lg:w-[500px]">
          <ul className="grid gap-3 grid-cols-3 p-4">
            <ListItem href="" title="Avena">
              <img
                className="bg-transparent w-[100px] h-[100px] object-cover"
                src={`${donaleche_collection_avena[0].image_url_1}`}
                alt="Avena"
              />
            </ListItem>
            <ListItem href="" title="Kumis">
              <img
                className="bg-transparent w-[100px] h-[100px] object-cover"
                src={`${donaleche_collection_kumis[0].image_url_1}`}
                alt="Avena"
              />
            </ListItem>
            <ListItem href="" title="Leches">
              <img
                className="bg-transparent w-[100px] h-[100px] object-cover"
                src={`${donaleche_collection_leches[0].image_url_1}`}
                alt="Avena"
              />
            </ListItem>
            <ListItem href="" title="Quesos">
              <img
                className="bg-transparent w-[100px] h-[100px] object-cover"
                src={`${donaleche_collection_quesos[11].image_url_1}`}
                alt="Avena"
              />
            </ListItem>
            <ListItem href="" title="Yogurt">
              <img
                className="bg-transparent w-[100px] h-[100px] object-cover"
                src={`${donaleche_collection_yogurt[0].image_url_1}`}
                alt="Avena"
              />
            </ListItem>
          </ul>
        </HoverCardContent>
      </HoverCard>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button variant="ghost">Recetas</Button>
        </HoverCardTrigger>
        <HoverCardContent className="md:w-[400px] lg:w-[500px]">
          <ul className="grid gap-3 p-4 grid-cols-2 ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
      <Button variant="ghost">Atención al cliente</Button>
      <Button asChild variant="ghost">
        <Link href={"/conocenos"}>Conócenos</Link>
      </Button>
    </div>
  );
}

export function Header() {
  return (
    <header className="md:h-[174px]">
      <div className="relative h-10 bg-secondary flex items-center justify-center">
        <Button variant="link">
          <MapPin className="w-4 h-4" />
          Conoce nuestras ubicabiones
        </Button>
      </div>
      <nav className="flex py-2 md:hidden justify-between items-center px-5 md:px-10">
        <div className="flex justify-end items-center gap-5">
          <Menu className="w-6 cursor-pointer h-6" />
        </div>
        <div className="flex items-center gap-5">
          <Link className="w-24" href={"/"}>
            <img
              className="min-w-24"
              src="/donaleche/Logo_Dona_Leche.webp"
              alt="Logo Doña Leche"
              title="Doña Leche"
            />
          </Link>
        </div>
        <div className="flex justify-end items-center gap-5">
          <Button size="icon" className="h-10 rounded-full w-10">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </nav>
      <nav className="h-[85px] max-md:hidden grid p-4 max-lg:grid-cols-2 grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        <div className="flex items-center xl:col-span-1 gap-5">
          <Link className="w-24" href={"/"}>
            <img
              className="min-w-24"
              src="/donaleche/Logo_Dona_Leche.webp"
              alt="Logo Doña Leche"
              title="Doña Leche"
            />
          </Link>
          <div className="relative lg:hidden w-full">
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="pr-10 rounded-full"
            />
            <Search className="absolute w-5 h-5 right-4 top-1/2 transform -translate-y-1/2 text-primary" />
          </div>
        </div>

        <div className="flex max-lg:hidden items-center xl:col-span-2 justify-between w-full">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="pr-10 rounded-full"
            />
            <Search className="absolute w-5 h-5 right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex justify-end xl:col-span-1 items-center gap-5">
          <div className="flex items-center">
            <Button className="h-10 rounded-full" variant="link">
              <Heart className="w-4 h-4" />
              Mi Lista
            </Button>
            <Button className="h-10 rounded-full" variant="link">
              <User className="w-4 h-4" />
              Registrate
            </Button>
          </div>
          <Button size="icon" className="h-10 rounded-full w-10">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </nav>
      <div className="p-4 py-0 max-md:hidden w-full flex justify-center">
        <NavigationMenuDemo />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors border border-transparent hover:border-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
