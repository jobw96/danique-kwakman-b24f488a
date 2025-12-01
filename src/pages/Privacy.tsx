import { Section } from "@/components/Section";

const Privacy = () => {
  return (
    <div className="bg-background">
      <Section className="pt-4 pb-20 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
            Privacyverklaring
          </h1>
          
          <div className="mb-8 text-muted-foreground space-y-1">
            <p><span className="font-medium text-foreground">Praktijk:</span> Danique Kwakman – Orthomoleculaire Therapie</p>
            <p><span className="font-medium text-foreground">KvK:</span> 90038606</p>
            <p><span className="font-medium text-foreground">Contact:</span> info@daniquekwakman.nl</p>
            <p>Muntstraat 18, 1621 GB Hoorn</p>
            <p>06 82 01 87 27</p>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">1. Inleiding</h2>
              <p>
                Deze privacyverklaring is opgesteld volgens de Algemene Verordening Gegevensbescherming (AVG). 
                Binnen mijn praktijk verwerk ik persoonsgegevens, waaronder bijzondere persoonsgegevens over 
                gezondheid. In deze verklaring lees je welke gegevens ik verzamel, waarom ik dat doe en hoe 
                ik deze veilig bewaar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">2. Welke gegevens worden verwerkt?</h2>
              
              <h3 className="text-lg font-medium mb-2 text-foreground">Persoonsgegevens:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Voor- en achternaam</li>
                <li>Adresgegevens</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Geboortedatum</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2 text-foreground">Gezondheidsgegevens (bijzondere persoonsgegevens):</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Medische voorgeschiedenis</li>
                <li>Medicatiegebruik</li>
                <li>Gezondheidsklachten</li>
                <li>Verzamelingen uit vragenlijsten en/of intakeformulieren</li>
                <li>Uitslagen van onderzoeken (zoals ontlastingsonderzoek, voedselintolerantietest, glucosemetingen)</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2 text-foreground">Overige gegevens:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Notities uit consulten</li>
                <li>Communicatie via WhatsApp of e-mail</li>
                <li>Facturatie- en betalingsgegevens</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">3. Doel van gegevensverwerking</h2>
              <p className="mb-4">Ik verwerk persoonsgegevens voor:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>het opstellen van een persoonlijk behandelplan;</li>
                <li>het uitvoeren van een orthomoleculair traject;</li>
                <li>communicatie via e-mail/WhatsApp;</li>
                <li>het versturen van nieuwsbrieven, promoties en andere marketingcommunicatie (alleen met voorafgaande toestemming van de cliënt);</li>
                <li>het versturen van facturen;</li>
                <li>wettelijke administratie- en bewaarplichten;</li>
                <li>het verbeteren van mijn dienstverlening (anoniem, nooit herleidbaar).</li>
              </ul>
              <p className="mt-4">
                Ik verwerk uitsluitend gegevens die nodig zijn voor de kwaliteit van de begeleiding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">4. Rechtsgrond</h2>
              <p className="mb-4">De verwerking vindt plaats op basis van:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>toestemming van de cliënt middels de akkoordverklaring;</li>
                <li>noodzakelijkheid voor uitvoering van de overeenkomst;</li>
                <li>wettelijke verplichting (zoals administratie).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">5. Bewaartermijnen</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Administratieve gegevens: 7 jaar (wettelijk verplicht).</li>
                <li>Gezondheidsdossiers: maximaal 5 jaar na laatste consult.</li>
                <li>WhatsApp- en e-mailcommunicatie: wordt periodiek opgeschoond.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">6. Beveiliging</h2>
              <p className="mb-4">Ik neem passende maatregelen, waaronder:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>sterke wachtwoorden en tweefactorauthenticatie;</li>
                <li>beveiligde opslag van documenten;</li>
                <li>veilige systemen voor dossiervorming en communicatie;</li>
                <li>versleutelde back-ups.</li>
              </ul>
              <p className="mt-4">
                Er worden geen gegevens gedeeld met derden zonder toestemming, tenzij wettelijk verplicht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">7. Delen van gegevens</h2>
              <p className="mb-4">Gegevens worden alleen gedeeld met:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>laboratoria (alleen wanneer de cliënt testmateriaal instuurt);</li>
                <li>accountant/boekhouder (alleen factuurinformatie, geen gezondheidsgegevens).</li>
              </ul>
              <p className="mt-4">
                Nooit met anderen, tenzij de cliënt hier schriftelijk toestemming voor geeft.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">8. Rechten van de cliënt</h2>
              <p className="mb-4">Je hebt het recht op:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>inzage;</li>
                <li>correctie;</li>
                <li>verwijdering (voor zover toegestaan binnen de wet);</li>
                <li>beperking van verwerking;</li>
                <li>overdraagbaarheid van gegevens;</li>
                <li>intrekken van toestemming.</li>
              </ul>
              <p className="mt-4">
                Een verzoek kan worden ingediend via e-mail, waarna binnen 30 dagen wordt gereageerd. 
                E-mailadres: info@daniquekwakman.nl
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">9. Cookies en website</h2>
              <p>
                Indien de website analytische cookies gebruikt, worden deze uitsluitend geplaatst met toestemming.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-foreground">10. Klachten</h2>
              <p>
                Bij klachten over de verwerking van gegevens kun je terecht bij de Autoriteit Persoonsgegevens.
              </p>
            </section>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-20 pt-12 border-t border-border">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
              Disclaimer
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-serif mb-4 text-foreground">1. Geen medisch advies</h2>
                <p className="mb-4">
                  Alle informatie, adviezen, consulten en trajecten binnen mijn praktijk zijn nooit 
                  bedoeld als vervanging van medische zorg of professioneel medisch advies.
                </p>
                <p className="mb-4">Ik:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>stel geen diagnoses;</li>
                  <li>schrijf geen medicatie voor;</li>
                  <li>handel binnen het werkgebied van orthomoleculaire gezondheidskunde.</li>
                </ul>
                <p className="mt-4">
                  Voor medische klachten, spoedsituaties of aanhoudende symptomen dient de cliënt 
                  altijd contact op te nemen met een arts of specialist.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif mb-4 text-foreground">2. Eigen verantwoordelijkheid</h2>
                <p className="mb-4">De cliënt blijft te allen tijde verantwoordelijk voor:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>het opvolgen of niet-opvolgen van adviezen;</li>
                  <li>eigen keuzes rondom voeding, leefstijl en supplementen;</li>
                  <li>het raadplegen van een arts bij twijfel over gezondheid;</li>
                  <li>het informeren van de therapeut over medicatie en veranderingen in gezondheid.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif mb-4 text-foreground">3. Geen garanties</h2>
                <p>
                  Hoewel ik met zorg en expertise werk, zijn resultaten afhankelijk van factoren 
                  zoals inzet, leefstijl, voedingspatronen en persoonlijke gezondheid. Daarom kan 
                  ik geen garanties geven over uitkomsten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif mb-4 text-foreground">4. Supplementen en medicatie</h2>
                <p className="mb-4">Adviezen over supplementen:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>vervangen nooit medicatie;</li>
                  <li>moeten altijd zorgvuldig worden toegepast;</li>
                  <li>kunnen interacties hebben met medicatie.</li>
                </ul>
                <p className="mt-4">
                  De cliënt blijft verantwoordelijk voor overleg met de arts wanneer nodig.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif mb-4 text-foreground">5. Informatie op de website en social media</h2>
                <p>
                  Informatie op mijn website, social media of mailings is uitsluitend ter educatie. 
                  Aan deze informatie kunnen geen rechten worden ontleend.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif mb-4 text-foreground">6. Aansprakelijkheid</h2>
                <p className="mb-4">Ik ben niet aansprakelijk voor schade die ontstaat door:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>het niet opvolgen van adviezen;</li>
                  <li>het verkeerd toepassen van informatie;</li>
                  <li>onvolledige of onjuiste informatie van de cliënt.</li>
                </ul>
              </section>

              <p className="mt-8 text-sm opacity-80">
                Laatste update: 2025
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
