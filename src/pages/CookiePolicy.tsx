import { Section } from "@/components/Section";

const CookiePolicy = () => {
  return (
    <div className="bg-background">
      <Section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
            Cookiebeleid
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">1. Wat zijn cookies?</h2>
              <p>
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden 
                geplaatst wanneer u onze website bezoekt. Deze cookies helpen ons om de website 
                beter te laten functioneren en u een betere gebruikerservaring te bieden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">2. Waarom gebruiken we cookies?</h2>
              <p>
                Wij gebruiken cookies voor verschillende doeleinden:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Functionele cookies:</strong> Deze cookies zijn noodzakelijk voor het 
                functioneren van de website. Zonder deze cookies kan de website niet goed werken.</li>
                <li><strong>Analytische cookies:</strong> Deze cookies helpen ons om te begrijpen 
                hoe bezoekers onze website gebruiken, zodat we de website kunnen verbeteren.</li>
                <li><strong>Voorkeuren cookies:</strong> Deze cookies onthouden uw voorkeuren, 
                zoals taalvoorkeur of regio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">3. Welke cookies gebruiken we?</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Essentiële cookies</h3>
                  <p>
                    Deze cookies zijn strikt noodzakelijk voor het functioneren van de website. 
                    Ze kunnen niet worden uitgeschakeld:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Sessie cookies voor websitenavigatie</li>
                    <li>Cookies voor contactformulier functionaliteit</li>
                    <li>Beveiligingscookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Analytische cookies</h3>
                  <p>
                    Deze cookies helpen ons begrijpen hoe bezoekers de website gebruiken:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Google Analytics:</strong> Voor het analyseren van websiteverkeer 
                    en gebruikersgedrag. Deze cookies zijn geanonimiseerd.</li>
                    <li>Bewaartermijn: Tot 2 jaar</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Sociale media cookies</h3>
                  <p>
                    Als u onze website deelt via sociale media, kunnen deze platforms cookies plaatsen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Instagram cookies (voor embedded content)</li>
                    <li>TikTok cookies (voor embedded content)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">4. Cookies beheren</h2>
              <p>
                U kunt cookies beheren via uw browserinstellingen. De meeste browsers staan u 
                toe om:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Alle cookies te blokkeren</li>
                <li>Alleen third-party cookies te blokkeren</li>
                <li>Alle cookies te verwijderen wanneer u de browser sluit</li>
                <li>Speciale uitzonderingen te maken voor bepaalde websites</li>
              </ul>
              <p className="mt-4">
                Let op: als u cookies uitschakelt, kunnen sommige functies van onze website 
                mogelijk niet goed werken.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">5. Cookies verwijderen</h2>
              <p>
                U kunt cookies op elk moment verwijderen via uw browserinstellingen. 
                Hoe u dit doet, verschilt per browser:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens</li>
                <li><strong>Firefox:</strong> Instellingen → Privacy en beveiliging → Cookies en sitegegevens</li>
                <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies en websitegegevens</li>
                <li><strong>Edge:</strong> Instellingen → Cookies en sitemachtigingen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">6. Third-party cookies</h2>
              <p>
                Sommige cookies worden geplaatst door diensten van derden die op onze pagina's 
                verschijnen. Wij hebben geen controle over deze cookies. Raadpleeg de privacy- 
                en cookiebeleid van deze partijen voor meer informatie:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                  className="text-primary hover:underline">Google Analytics privacybeleid</a></li>
                <li><a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" 
                  className="text-primary hover:underline">Instagram cookies beleid</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">7. Toestemming</h2>
              <p>
                Bij uw eerste bezoek aan onze website vragen wij u om toestemming voor het 
                plaatsen van niet-essentiële cookies. U kunt uw toestemming op elk moment 
                intrekken door cookies te verwijderen en uw browserinstellingen aan te passen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">8. Meer informatie</h2>
              <p>
                Voor meer informatie over cookies en privacy op onze website, kunt u ook onze 
                <a href="/privacy" className="text-primary hover:underline"> privacyverklaring</a> raadplegen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">9. Wijzigingen</h2>
              <p>
                Wij behouden ons het recht voor dit cookiebeleid aan te passen. Wijzigingen 
                worden op deze pagina gepubliceerd. Wij raden u aan dit beleid regelmatig te 
                controleren om op de hoogte te blijven van eventuele wijzigingen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">10. Contact</h2>
              <p>
                Als u vragen heeft over ons cookiebeleid, kunt u contact met ons opnemen via:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>E-mail:</strong> info@daniquekwakman.nl</p>
                <p className="mt-4 text-sm opacity-80">
                  Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CookiePolicy;
