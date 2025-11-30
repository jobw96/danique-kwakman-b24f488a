import { Section } from "@/components/Section";

const Privacy = () => {
  return (
    <div className="bg-background">
      <Section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
            Privacyverklaring
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">1. Inleiding</h2>
              <p>
                Danique Kwakman hecht veel waarde aan de bescherming van uw persoonsgegevens. 
                In deze privacyverklaring leggen we uit welke persoonsgegevens we verzamelen, 
                waarom we deze gegevens verzamelen en hoe we ermee omgaan. We houden ons aan 
                de eisen van de Algemene Verordening Gegevensbescherming (AVG).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">2. Verwerkingsverantwoordelijke</h2>
              <p>
                Danique Kwakman, gevestigd te Nederland, is verantwoordelijk voor de verwerking 
                van persoonsgegevens zoals weergegeven in deze privacyverklaring.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">3. Welke gegevens verzamelen we?</h2>
              <p>We kunnen de volgende persoonsgegevens van u verwerken:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Voor- en achternaam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Geboortedatum</li>
                <li>Gezondheidsinformatie (alleen met uw expliciete toestemming)</li>
                <li>Voedingsgewoonten en leefstijlinformatie</li>
                <li>Klachten en symptomen</li>
                <li>Behandelhistorie en voortgang</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">4. Waarom verzamelen we deze gegevens?</h2>
              <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Het verstrekken van orthomoleculaire en functionele medische behandelingen</li>
                <li>Het voeren van persoonlijke begeleiding en coaching</li>
                <li>Het opstellen van gepersonaliseerde behandelplannen</li>
                <li>Communicatie over afspraken en behandelingen</li>
                <li>Het versturen van nieuwsbrieven (alleen met uw toestemming)</li>
                <li>Het voldoen aan wettelijke verplichtingen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">5. Grondslag voor gegevensverwerking</h2>
              <p>
                Wij verwerken uw persoonsgegevens op basis van:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Uitvoering van de overeenkomst:</strong> Voor het leveren van onze diensten</li>
                <li><strong>Toestemming:</strong> Voor gezondheidsgegevens en nieuwsbrieven</li>
                <li><strong>Gerechtvaardigd belang:</strong> Voor verbetering van onze dienstverlening</li>
                <li><strong>Wettelijke verplichting:</strong> Voor administratieve en fiscale doeleinden</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">6. Bewaartermijn</h2>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden 
                waarvoor deze zijn verzameld. Medische dossiers worden conform de Wet op de 
                geneeskundige behandelingsovereenkomst (WGBO) minimaal 15 jaar bewaard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">7. Delen met derden</h2>
              <p>
                Wij verstrekken uw gegevens alleen aan derden indien dit noodzakelijk is voor 
                de uitvoering van onze diensten of om te voldoen aan een wettelijke verplichting. 
                Dit kunnen zijn:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Laboratoria voor bloedonderzoek of andere analyses</li>
                <li>Huisartsen of andere zorgverleners (alleen met uw toestemming)</li>
                <li>IT-dienstverleners voor gegevensopslag</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">8. Beveiliging</h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om uw 
                persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking. 
                Dit omvat onder andere:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Versleutelde verbindingen (SSL)</li>
                <li>Beveiligde opslag van medische dossiers</li>
                <li>Streng toegangsbeleid tot persoonsgegevens</li>
                <li>Regelmatige backup van gegevens</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">9. Uw rechten</h2>
              <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Inzagerecht:</strong> U kunt inzage vragen in uw gegevens</li>
                <li><strong>Recht op correctie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
                <li><strong>Recht op verwijdering:</strong> U kunt verwijdering van uw gegevens verzoeken</li>
                <li><strong>Recht op beperking:</strong> U kunt beperking van de verwerking vragen</li>
                <li><strong>Recht op overdraagbaarheid:</strong> U kunt uw gegevens in een gestructureerd formaat ontvangen</li>
                <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de verwerking</li>
              </ul>
              <p className="mt-4">
                Om gebruik te maken van deze rechten, kunt u contact met ons opnemen via de 
                contactgegevens onderaan deze pagina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">10. Cookies en vergelijkbare technieken</h2>
              <p>
                Voor informatie over ons gebruik van cookies, verwijzen wij u naar ons 
                <a href="/cookie-policy" className="text-primary hover:underline"> cookiebeleid</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">11. Wijzigingen privacyverklaring</h2>
              <p>
                Wij behouden ons het recht voor deze privacyverklaring aan te passen. 
                Wijzigingen worden gepubliceerd op onze website. Wij raden u aan deze 
                privacyverklaring regelmatig te raadplegen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">12. Contact</h2>
              <p>
                Als u vragen heeft over deze privacyverklaring of over de manier waarop wij 
                met uw persoonsgegevens omgaan, kunt u contact met ons opnemen via:
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

export default Privacy;
