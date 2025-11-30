import { motion } from "framer-motion";

interface Card {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface ParallaxCardStackProps {
  cards: Card[];
}

export const ParallaxCardStack = ({ cards }: ParallaxCardStackProps) => {
  return (
    <div className="relative w-full">
      {cards.map((card, index) => {
        const zIndex = cards.length - index;
        
        return (
          <div
            key={index}
            style={{ 
              zIndex,
              marginBottom: index === cards.length - 1 ? '0' : 'calc(-100vw + 250px)'
            }}
            className="mb-[400px] last:mb-0 md:mb-[400px] md:[&:not(:last-child)]:mb-[-140px]"
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                y: 30 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={`sticky top-[20px] md:top-[80px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden ${card.bgColor} shadow-none`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 min-h-[400px] md:min-h-[500px]">
                {/* Text Content */}
                <div className="text-white order-2 md:order-1">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                    {card.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed opacity-95">
                    {card.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
