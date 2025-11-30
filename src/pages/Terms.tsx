import { Section } from "@/components/Section";

const Terms = () => {
  return (
    <div className="bg-background">
      <Section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
            Algemene Voorwaarden
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">1. Algemeen</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle diensten, adviezen en 
                behandelingen die worden aangeboden door Danique Kwakman, gevestigd te Nederland, 
                hierna te noemen "de praktijk".
              </p>
              <p className="mt-4">
                Door gebruik te maken van onze diensten verklaart u zich akkoord met deze 
                algemene voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">2. Dienstverlening</h2>
              <p>
                De praktijk biedt orthomoleculaire therapie, voedingsadviezen en gerelateerde 
                gezondheidsdiensten aan. Alle diensten worden uitgevoerd met de grootst mogelijke 
                zorgvuldigheid en volgens de laatste stand van de wetenschap.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Adviezen zijn altijd persoonlijk en worden op maat gemaakt</li>
                <li>Behandelingen vinden plaats na een uitgebreide intake</li>
                <li>Resultaten kunnen per persoon verschillen</li>
                <li>De praktijk werkt niet met diagnoses maar met adviezen gericht op optimale gezondheid</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">3. Afspraken en reserveringen</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">3.1 Afspraken maken</h3>
                  <p>
                    Afspraken kunnen worden gemaakt via:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Het online boekingssysteem op onze website</li>
                    <li>Per e-mail: info@daniquekwakman.nl</li>
                    <li>Telefonisch (tijdens kantooruren)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">3.2 Bevestiging</h3>
                  <p>
                    U ontvangt binnen 24 uur een bevestiging van uw afspraak per e-mail. 
                    Zonder bevestiging is de afspraak niet definitief.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">3.3 Voorbereiding</h3>
                  <p>
                    Voor het eerste consult ontvangt u een intakeformulier dat u 
                    volledig en naar waarheid dient in te vullen en uiterlijk 48 uur voor de 
                    afspraak dient te retourneren.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">4. Annuleringsbeleid</h2>
              <div className="bg-accent/20 border border-secondary rounded-lg p-6 my-6">
                <h3 className="text-xl font-medium mb-3 text-foreground">Belangrijke informatie</h3>
                <p className="text-foreground font-medium mb-2">
                  Bij annulering binnen 24 uur voor de afspraak wordt € 45,- annuleringskosten 
                  in rekening gebracht.
                </p>
                <p className="text-sm">
                  Deze kosten dienen binnen 7 dagen na annulering te worden voldaan.
                </p>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">4.1 Annuleren door cliënt</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Meer dan 24 uur van tevoren:</strong> Gratis annuleren mogelijk</li>
                    <li><strong>Binnen 24 uur:</strong> € 45,- annuleringskosten</li>
                    <li><strong>No-show (niet verschenen):</strong> Volledige behandelkosten worden in rekening gebracht</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">4.2 Annuleren door praktijk</h3>
                  <p>
                    Mocht de praktijk genoodzaakt zijn een afspraak te annuleren, dan wordt u 
                    hier zo snel mogelijk van op de hoogte gesteld. Er worden geen kosten in 
                    rekening gebracht en er wordt gezocht naar een passende vervangende datum.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">4.3 Te laat komen</h3>
                  <p>
                    Bij te laat komen wordt de behandeltijd verkort met de vertraging. 
                    Het volledige tarief blijft van toepassing. Bij meer dan 15 minuten 
                    vertraging kan de praktijk besluiten de afspraak te annuleren, waarbij 
                    de annuleringskosten van toepassing zijn.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">5. Tarieven en betaling</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">5.1 Tarieven</h3>
                  <p>
                    De actuele tarieven zijn terug te vinden op onze website en kunnen 
                    jaarlijks worden aangepast. De tarieven die gelden op het moment van 
                    afspraak maken zijn van toepassing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">5.2 Betaling</h3>
                  <p>Betaling dient te geschieden:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Direct na afloop van de behandeling via pin of bank</li>
                    <li>Bij trajecten: volgens het overeengekomen betalingsschema</li>
                    <li>Voor supplementen: bij afhalen of voorafgaand aan verzending</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">5.3 Verzuim betaling</h3>
                  <p>
                    Bij niet-tijdige betaling worden twee herinneringen gestuurd. Bij uitblijven 
                    van betaling na de tweede herinnering kunnen incassokosten in rekening worden 
                    gebracht.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">5.4 Vergoeding door verzekering</h3>
                  <p>
                    Sommige zorgverzekeraars vergoeden (een deel van) de kosten via de 
                    aanvullende verzekering. Dit is afhankelijk van uw polis. De praktijk 
                    is niet aangesloten bij zorgverzekeraars; betaling geschiedt rechtstreeks 
                    aan de praktijk, waarna u zelf declaratie kunt indienen bij uw verzekeraar.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">6. Trajecten en pakketten</h2>
              <div className="space-y-4">
                <p>
                  De praktijk biedt verschillende trajecten en pakketten aan met een vaste 
                  looptijd en vooraf afgesproken aantal consulten.
                </p>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">6.1 Looptijd</h3>
                  <p>
                    De minimale looptijd van een traject is zoals aangegeven in het pakket. 
                    Tussentijds beëindigen is niet mogelijk, behalve in overleg met de praktijk.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">6.2 Verlenging</h3>
                  <p>
                    Na afloop van een traject kan deze in overleg worden verlengd met losse 
                    consulten of een vervolgtraject.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">7. Privacy en geheimhouding</h2>
              <p>
                De praktijk gaat zorgvuldig om met uw persoonlijke gegevens en gezondheids­informatie 
                volgens de AVG (Algemene Verordening Gegevensbescherming). Meer informatie vindt u 
                in onze{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  privacyverklaring
                </a>
                .
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Alle informatie die u deelt wordt vertrouwelijk behandeld</li>
                <li>Gegevens worden alleen gedeeld met uw toestemming</li>
                <li>U heeft inzagerecht in uw dossier</li>
                <li>Gegevens worden bewaard volgens de wettelijke bewaartermijn</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">8. Aansprakelijkheid</h2>
              <div className="space-y-4">
                <p>
                  De praktijk is aangesloten bij een beroepsvereniging en beschikt over een 
                  beroepsaansprakelijkheidsverzekering.
                </p>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">8.1 Behandelaansprakelijkheid</h3>
                  <p>
                    De praktijk werkt met de grootst mogelijke zorgvuldigheid. Aansprakelijkheid 
                    voor directe of indirecte schade is beperkt tot het bedrag dat door de 
                    aansprakelijkheidsverzekering wordt uitbetaald.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">8.2 Eigen verantwoordelijkheid</h3>
                  <p>
                    De cliënt is zelf verantwoordelijk voor het opvolgen van adviezen en het 
                    correct innemen van aanbevolen supplementen. Bij twijfel of bijwerkingen 
                    dient u altijd contact op te nemen met de praktijk.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">9. Klachten</h2>
              <p>
                Mocht u onverhoopt een klacht hebben over de dienstverlening, dan vragen wij u 
                dit zo snel mogelijk kenbaar te maken, zodat we samen naar een oplossing kunnen zoeken.
              </p>
              <div className="mt-4">
                <p><strong>Klachten kunt u indienen via:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>E-mail: info@daniquekwakman.nl</li>
                  <li>Schriftelijk naar het praktijkadres</li>
                </ul>
                <p className="mt-4">
                  U ontvangt binnen 14 dagen een reactie op uw klacht. Indien we er niet samen 
                  uitkomen, kunt u zich wenden tot de klachtencommissie van de beroepsvereniging 
                  waarbij de praktijk is aangesloten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">10. Intellectueel eigendom</h2>
              <p>
                Alle materialen die door de praktijk worden verstrekt (zoals adviezen, planningen, 
                recepten en educatief materiaal) zijn intellectueel eigendom van de praktijk en 
                mogen niet worden gekopieerd, verspreid of commercieel gebruikt zonder schriftelijke 
                toestemming.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">11. Wijzigingen</h2>
              <p>
                De praktijk behoudt zich het recht voor deze algemene voorwaarden te wijzigen. 
                Wijzigingen worden op de website gepubliceerd en zijn van kracht vanaf de 
                publicatiedatum. Voor lopende trajecten blijven de voorwaarden gelden die bij 
                aanvang van het traject van toepassing waren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">12. Toepasselijk recht</h2>
              <p>
                Op deze algemene voorwaarden is Nederlands recht van toepassing. Eventuele 
                geschillen zullen worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">13. Contact</h2>
              <p>
                Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>E-mail:</strong> info@daniquekwakman.nl</p>
                <p><strong>Website:</strong> www.daniquekwakman.nl</p>
                <p className="mt-6 text-sm opacity-80">
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

export default Terms;
