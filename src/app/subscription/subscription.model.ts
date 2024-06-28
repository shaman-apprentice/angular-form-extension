export type SubscriptionOption = {
  price: string;
  description: string;
  id: number;
}

export type WelcomeGift = {
  isCharity: boolean;
  name: string;
  description: string;
  includedInOptions: number[];
}

export type SubscriptionOffers = {
  options: SubscriptionOption[];
  welcomeGifts: WelcomeGift[];
}
