import * as React from "react";
import { Icon } from "@iconify-icon/react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { Button, ChakraProps, VisuallyHidden, chakra } from "@chakra-ui/react";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps & ChakraProps
>(
  (
    { orientation = "horizontal", opts, setApi, plugins, children, ...props },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <chakra.div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          pos="relative"
          {...props}
        >
          {children}
        </chakra.div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ChakraProps
>(({ ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <chakra.div ref={carouselRef} overflow="hidden">
      <chakra.div
        ref={ref}
        display="flex"
        flexDir={orientation === "horizontal" ? "row" : "column"}
        m={orientation === "horizontal" ? "0 0 0 -16px" : "-16px 0 0 0"}
        {...props}
      />
    </chakra.div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ChakraProps
>(({ ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <chakra.div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      display="flex"
      minW="0"
      flexShrink="0"
      flexGrow="0"
      flexBasis="full"
      p={orientation === "horizontal" ? "0 0 0 16px" : "16px 0 0 0"}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ variant = "outline", size = "sm", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      pos="absolute"
      w="8"
      h="8"
      rounded="full"
      transform="auto"
      {...(orientation === "horizontal"
        ? { left: "-12", top: "1/2", translateY: "1/2" }
        : { top: "-12", left: "1/2", translateX: "-1/2", rotate: "90" })}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon icon="ri:arrow-left-s-line" width="16" height="16" />
      <VisuallyHidden>Previous slide</VisuallyHidden>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      pos="absolute"
      w="8"
      h="8"
      rounded="full"
      transform="auto"
      {...(orientation === "horizontal"
        ? { right: "-12", top: "1/2", translateY: "1/2" }
        : { bottom: "-12", left: "1/2", translateX: "-1/2", rotate: "90" })}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon icon="ri:arrow-right-s-line" width="16" height="16" />
      <VisuallyHidden>Next slide</VisuallyHidden>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
