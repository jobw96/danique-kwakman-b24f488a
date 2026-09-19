export type ComplaintFaq = {
  question: string;
  /** Losse alinea's van het antwoord. */
  answer: string[];
};

export type ComplaintFactor = {
  title: string;
  text: string;
};

/** Uitgebreide, per klacht unieke pagina-inhoud. */
export type ComplaintContent = {
  /** Intro-alinea's onder de H1. */
  intro: string[];
  recognitionHeading?: string;
  recognition: string[];
  explanationHeading: string;
  explanation: string[];
  factorsHeading: string;
  factorsIntro: string;
  factors: ComplaintFactor[];
  widerHeading: string;
  widerIntro: string;
  widerSignals: string[];
  togetherIntro: string;
  together: string[];
  faqHeading: string;
  faqs: ComplaintFaq[];
};

export type ComplaintContentMap = Record<string, ComplaintContent>;
