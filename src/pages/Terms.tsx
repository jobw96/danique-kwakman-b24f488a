import { Section } from "@/components/Section";

const Terms = () => {
  return (
    <div className="bg-background">
      <Section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
            Algemene Voorwaarden
          </h1>
          
          <p className="text-muted-foreground mb-8">Danique Kwakman (2025)</p>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 1. Definities</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">1.1 Therapeut:</span> Danique Kwakman Orthomoleculaire Therapie, gevestigd te Muntstraat 18, 1621 GB in Hoorn, ingeschreven bij de KvK onder nummer 90038606</li>
                <li><span className="font-medium text-foreground">1.2 Cliënt:</span> de natuurlijke persoon die een dienst of traject afneemt bij de therapeut.</li>
                <li><span className="font-medium text-foreground">1.3 Diensten:</span> orthomoleculaire coaching, trajecten, consulten, testen (o.a. ontlastingsonderzoek, voedselintolerantietesten, glucosemonitor trajecten), online programma's en gerelateerde dienstverlening.</li>
                <li><span className="font-medium text-foreground">1.4 Overeenkomst:</span> de schriftelijke of digitale afspraak tussen therapeut en cliënt.</li>
                <li><span className="font-medium text-foreground">1.5 Bescheiden:</span> alle materialen, adviezen, documenten, rapportages en digitale gegevens die door de therapeut worden verstrekt aan cliënt.</li>
                <li><span className="font-medium text-foreground">1.6 Schriftelijk:</span> e-mail, WhatsApp en overige digitale communicatie.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 2. Toepasselijkheid</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">2.1</span> Deze voorwaarden gelden voor alle diensten, trajecten, aanbiedingen en overeenkomsten.</li>
                <li><span className="font-medium text-foreground">2.2</span> Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</li>
                <li><span className="font-medium text-foreground">2.3</span> Algemene voorwaarden van de cliënt worden uitdrukkelijk uitgesloten.</li>
                <li><span className="font-medium text-foreground">2.4</span> Indien één bepaling ongeldig is, blijven de overige bepalingen van kracht.</li>
                <li><span className="font-medium text-foreground">2.5</span> De therapeut mag de voorwaarden aanpassen; wijzigingen gelden ook voor bestaande overeenkomsten.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 3. Diensten & Werkwijze</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">3.1</span> De therapeut heeft een inspanningsverplichting, geen resultaatsverplichting.</li>
                <li><span className="font-medium text-foreground">3.2</span> De therapeut voert haar diensten naar beste inzicht, professionaliteit en zorgvuldigheid uit.</li>
                <li><span className="font-medium text-foreground">3.3</span> Orthomoleculaire therapie vervangt geen medische behandeling.</li>
                <li><span className="font-medium text-foreground">3.4</span> De therapeut mag derden inschakelen indien dit wenselijk is.</li>
                <li><span className="font-medium text-foreground">3.5</span> Adviezen worden verstrekt op basis van de door de cliënt aangeleverde informatie. Onvolledige of onjuiste informatie is verantwoordelijkheid van de cliënt.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 4. Verplichtingen van de cliënt</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">4.1</span> De cliënt geeft volledige en juiste informatie over gezondheid, medicatie, klachten en relevante voorgeschiedenis.</li>
                <li><span className="font-medium text-foreground">4.2</span> De cliënt is zelf verantwoordelijk voor het opvolgen van adviezen.</li>
                <li><span className="font-medium text-foreground">4.3</span> De cliënt blijft onder behandeling van een arts waar nodig.</li>
                <li><span className="font-medium text-foreground">4.4</span> De cliënt is verantwoordelijk voor het tijdig aanleveren van gegevens/onderzoeksmaterialen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 5. Afspraken & Annuleringen</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">5.1</span> Afspraken kunnen tot 24 uur van tevoren kosteloos worden verzet.</li>
                <li><span className="font-medium text-foreground">5.2</span> Niet tijdig verzetten of afwezigheid kan volledig in rekening worden gebracht.</li>
                <li><span className="font-medium text-foreground">5.3</span> Bij trajecten (1:1 of groepen) is annuleren na start niet mogelijk; het volledige bedrag blijft verschuldigd.</li>
                <li><span className="font-medium text-foreground">5.4</span> Bij losse consulten gelden de normale annuleringsregels zoals beschreven in artikel 5.1, 5.2 en 5.3.</li>
                <li><span className="font-medium text-foreground">5.5</span> Annulering door de klant:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Tot 14 dagen voor de intake datum: volledige terugbetaling minus administratiekosten van €25.</li>
                    <li>Binnen 14 dagen voor de intake: geen terugbetaling.</li>
                  </ul>
                </li>
                <li><span className="font-medium text-foreground">5.6</span> Bij online programma's en e-books geldt: geen terugbetaling na levering.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 6. Tarieven & Betaling</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">6.1</span> Alle tarieven zijn inclusief btw, tenzij anders vermeld.</li>
                <li><span className="font-medium text-foreground">6.2</span> Facturen dienen binnen 14 dagen te worden betaald.</li>
                <li><span className="font-medium text-foreground">6.3</span> Bij niet tijdige betaling mag de therapeut de dienstverlening opschorten.</li>
                <li><span className="font-medium text-foreground">6.4</span> De therapeut mag vooruitbetaling of een aanbetaling vragen.</li>
                <li><span className="font-medium text-foreground">6.5</span> Bij uitblijven van betaling worden wettelijke rente en incassokosten in rekening gebracht.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 7. Duur van de overeenkomst</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">7.1</span> De overeenkomst eindigt na afronding van het traject of consult, tenzij anders overeengekomen.</li>
                <li><span className="font-medium text-foreground">7.2</span> Bij overlijden of bedrijfsbeëindiging eindigt de overeenkomst automatisch.</li>
                <li><span className="font-medium text-foreground">7.3</span> Tussentijdse beëindiging door de cliënt is niet mogelijk in lopende trajecten.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 8. Overmacht</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">8.1</span> Onder overmacht worden alle omstandigheden verstaan die de nakoming van de overeenkomst geheel of gedeeltelijk verhinderen en die niet aan Danique Kwakman zijn toe te rekenen. Voorbeelden hiervan zijn (maar niet uitsluitend): ziekte of uitval van de therapeut, technische storingen, storingen in online communicatiemiddelen, extreme weersomstandigheden, overheidsmaatregelen, plotselinge persoonlijke omstandigheden of andere situaties buiten de redelijke invloedssfeer van de therapeut.</li>
                <li><span className="font-medium text-foreground">8.2</span> In geval van overmacht heeft Danique Kwakman het recht om afspraken of consulten te verzetten of tijdelijk op te schorten, zonder dat de cliënt aanspraak kan maken op enige schadevergoeding.</li>
                <li><span className="font-medium text-foreground">8.3</span> Indien een overmachtsituatie zich voordoet nadat een deel van de diensten al is geleverd, is Danique Kwakman gerechtigd het reeds geleverde gedeelte te factureren. Voor diensten die nog niet zijn uitgevoerd, vindt geen terugbetaling van vooruitbetaalde bedragen plaats.</li>
                <li><span className="font-medium text-foreground">8.4</span> Duurt de overmachtssituatie langer dan twee maanden of is deze blijvend van aard, dan mogen zowel de cliënt als Danique Kwakman de overeenkomst schriftelijk beëindigen, zonder recht op schadevergoeding of terugbetaling voor nog niet geleverde diensten.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 9. Aansprakelijkheid</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">9.1</span> De therapeut is niet aansprakelijk voor schade die voortvloeit uit:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>onjuiste of onvolledige informatie van de cliënt,</li>
                    <li>het niet opvolgen van adviezen,</li>
                    <li>vertraging door derden,</li>
                    <li>indirecte schade (zoals gevolgschade of winstverlies).</li>
                  </ul>
                </li>
                <li><span className="font-medium text-foreground">9.2</span> Orthomoleculaire therapie is ondersteunend en niet-medisch; resultaten kunnen niet worden gegarandeerd.</li>
                <li><span className="font-medium text-foreground">9.3</span> De cliënt blijft altijd zelf verantwoordelijk voor zijn/haar gezondheid en besluitvorming.</li>
                <li><span className="font-medium text-foreground">9.4</span> Aansprakelijkheid is beperkt tot directe schade en tot maximaal het factuurbedrag.</li>
                <li><span className="font-medium text-foreground">9.5</span> De klant vrijwaart Danique Kwakman tegen aanspraken van derden.</li>
                <li><span className="font-medium text-foreground">9.6</span> Aansprakelijkheid vervalt één jaar na beëindiging van de overeenkomst, behoudens opzet of grove nalatigheid.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 10. Intellectueel eigendom</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">10.1</span> Alle adviezen, modellen, documenten, werkboeken en materialen blijven eigendom van de therapeut.</li>
                <li><span className="font-medium text-foreground">10.2</span> Het is niet toegestaan materiaal te delen met derden of te verspreiden zonder schriftelijke toestemming.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 11. Privacy</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-medium text-foreground">11.1</span> De therapeut verwerkt persoonsgegevens volgens de AVG.</li>
                <li><span className="font-medium text-foreground">11.2</span> Gegevens worden nooit gedeeld met derden tenzij wettelijk vereist of met expliciete toestemming.</li>
                <li><span className="font-medium text-foreground">11.3</span> Cliëntgegevens worden veilig bewaard en digitaal versleuteld opgeslagen waar mogelijk.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">Artikel 12. Toepasselijk recht</h2>
              <p>
                Op de overeenkomst is Nederlands recht van toepassing. Eventuele geschillen worden 
                voorgelegd aan de bevoegde rechter in het arrondissement van de vestigingsplaats van de therapeut.
              </p>
            </section>

            <p className="mt-8 text-sm opacity-80">
              Laatste update: 2025
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
