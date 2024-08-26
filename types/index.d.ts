export type EventResponse = {
  _embedded: { events: Event[]; };
  _links: _Links;
  page: Page;
}

export type SuggestResponse = {
  _embedded: {
    venues: Venue[]
    attractions: Attraction[]
    events: Event[]
  };
}

export type Event = {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  sales: Sales;
  dates: Dates;
  classifications: Classification[];
  promoter?: Promoter;
  promoters?: Promoter[];
  info?: string;
  pleaseNote?: string;
  priceRanges?: PriceRange[];
  products?: Product[];
  seatmap: Seatmap;
  accessibility?: Accessibility;
  ticketLimit?: TicketLimit;
  ageRestrictions?: AgeRestrictions;
  ticketing: Ticketing;
  _links: EventLinks;
  _embedded: EventEmbedded;
  outlets?: Outlet[];
}

export type EventEmbedded = {
  venues: Venue[];
  attractions: Attraction[];
}

export type Attraction = {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  externalLinks?: ExternalLinks;
  aliases?: string[];
  images: Image[];
  classifications: Classification[];
  upcomingEvents: AttractionUpcomingEvents;
  _links: AttractionLinks;
}

export type AttractionLinks = {
  self: LinkRef;
}

export type LinkRef = {
  href: string;
}

export type Classification = {
  primary: boolean;
  segment: Genre;
  genre: Genre;
  subGenre: Genre;
  type?: Genre;
  subType?: Genre;
  family: boolean;
}

export type Genre = {
  id: string;
  name: string;
}

export type ExternalLinks = {
  twitter: SocialMedia[];
  facebook: SocialMedia[];
  wiki: SocialMedia[];
  instagram: SocialMedia[];
  homepage: SocialMedia[];
}

export type SocialMedia = {
  url: string;
}

export type Image = {
  ratio: Ratio;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export enum Ratio {
  16_9 = "16_9",
  3_2 = "3_2",
  4_3 = "4_3",
}

export type AttractionUpcomingEvents = {
  tmr?: number;
  ticketmaster: number;
  _total: number;
  _filtered: number;
}

export type Venue = {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url?: string;
  locale: string;
  images?: Image[];
  postalCode: string;
  timezone: string;
  city: City;
  state: State;
  country: Country;
  address: Address;
  location: Location;
  markets?: Genre[];
  dmas: DMA[];
  boxOfficeInfo?: BoxOfficeInfo;
  parkingDetail?: string;
  accessibleSeatingDetail?: string;
  generalInfo?: GeneralInfo;
  upcomingEvents: VenueUpcomingEvents;
  _links: AttractionLinks;
  aliases?: string[];
  social?: Social;
  ada?: Ada;
}

export type Ada = {
  adaPhones: string;
  adaCustomCopy: string;
  adaHours: string;
}

export type Address = {
  line1: string;
}

export type BoxOfficeInfo = {
  phoneNumberDetail: string;
  openHoursDetail: string;
  acceptedPaymentDetail: string;
  willCallDetail?: string;
}

export type City = {
  name: string;
}

export type Country = {
  name: string;
  countryCode: string;
}

export type DMA = {
  id: number;
}

export type GeneralInfo = {
  generalRule: string;
  childRule?: string;
}

export type Location = {
  longitude: string;
  latitude: string;
}

export type Social = {
  twitter: Twitter;
}

export type Twitter = {
  handle: string;
}

export type State = {
  name: string;
  stateCode: string;
}

export type VenueUpcomingEvents = {
  archtics?: number;
  ticketmaster?: number;
  _total: number;
  _filtered: number;
  tmr?: number;
  universe?: number;
}

export type EventLinks = {
  self: LinkRef;
  attractions: LinkRef[];
  venues: LinkRef[];
}

export type Accessibility = {
  ticketLimit: number;
  id: string;
  info?: string;
}

export type AgeRestrictions = {
  legalAgeEnforced: boolean;
  id: string;
}

export type Dates = {
  start: Start;
  timezone?: string;
  status: Status;
  spanMultipleDays: boolean;
}

export type Start = {
  localDate: Date;
  localTime: string;
  dateTime: Date;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export type Status = {
  code: Code;
}

export enum Code {
  Offsale = "offsale",
  Onsale = "onsale",
}

export type Outlet = {
  url: string;
  type: string;
}

export type PriceRange = {
  type: string;
  currency: string;
  min: number;
  max: number;
}

export type Product = {
  name: string;
  id: string;
  url: string;
  type: string;
  classifications: Classification[];
}

export type Promoter = {
  id: string;
  name: string;
  description: string;
}

export type Sales = {
  public: Public;
  presales?: Presale[];
}

export type Presale = {
  startDateTime: Date;
  endDateTime: Date;
  name: string;
  description?: string;
}

export type Public = {
  startDateTime?: Date;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime?: Date;
}

export type Seatmap = {
  staticUrl: string;
  id: string;
}

export type TicketLimit = {
  info: string;
  id: string;
}

export type Ticketing = {
  safeTix?: SafeTix;
  allInclusivePricing: {
    enabled: boolean;
  };
  id: string;
}

export type SafeTix = {
  enabled: boolean;
  inAppOnlyEnabled: boolean;
}

export type _Links = {
  first: LinkRef;
  self: LinkRef;
  next: LinkRef;
  last: LinkRef;
}

export type Page = {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
